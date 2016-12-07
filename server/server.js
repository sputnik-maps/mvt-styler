"use strict";

var util = require('util');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var app = express();
var spritezero = require('./spritezero');
// var generateLayout = Promise.promisify(spritezero.generateLayout);
// var generateImage = Promise.promisify(spritezero.generateImage);
// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('./storage.db');

// TODO: mkdir storage folder

var sqlite3 = require("sqlite3"),
    TransactionDatabase = require("sqlite3-transactions").TransactionDatabase;

// Wrap sqlite3 database
var db = new TransactionDatabase(
    new sqlite3.Database("./storage/storage.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE)
);

db.run('CREATE TABLE IF NOT EXISTS projects(' +
            'id INTEGER PRIMARY KEY NOT NULL,' +
            'name TEXT NOT NULL,' +
            'deleted INT NOT NULL DEFAULT 0)'
);

db.run('CREATE TABLE IF NOT EXISTS commits(' +
            'id INTEGER PRIMARY KEY NOT NULL,' +
            'project_id INT NOT NULL,' +
            'style_id INT,' +
            'sprite_id INT,' +
            'tag TEXT,' +
            'time INTEGER NOT NULL)');

db.run('CREATE TABLE IF NOT EXISTS style(' +
            'id INTEGER PRIMARY KEY NOT NULL,' +
            'project_id INT NOT NULL,' +
            'json TEXT NOT NULL)');

db.run('CREATE TABLE IF NOT EXISTS style(' +
            'id INTEGER PRIMARY KEY NOT NULL,' +
            'project_id INT NOT NULL,' +
            'json TEXT NOT NULL)');

db.run('CREATE TABLE IF NOT EXISTS icons(' +
            'id INTEGER PRIMARY KEY NOT NULL,' +
            'name TEXT NOT NULL,' +
            'extension SMALLINT NOT NULL CHECK(extension in (\'png\', \'svg\')),' +
            'data BLOB)');

db.run('CREATE TABLE IF NOT EXISTS sprites(' +
            'id INTEGER PRIMARY KEY NOT NULL,' +
            'json TEXT NOT NULL,' +
            'json2x TEXT NOT NULL,' +
            'png BLOB NOT NULL,' +
            'png2x BLOB NOT NULL,' +
            'project_id INT NOT NULL)');

db.run('CREATE TABLE IF NOT EXISTS sprite_icons(' +
            'id INTEGER PRIMARY KEY NOT NULL,' +
            'icon_id INTEGER NOT NULL,' +
            'sprite_id INTEGER NOT NULL)');

function corsMiddleware(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
}

function getProjectsHandler(req, res) {
    db.all('SELECT id, name FROM projects WHERE deleted !=1 ', function(err, rows) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        var row, projects = [];
        for (var i = 0; i < rows.length; ++i) {
            row = rows[i];
            projects.push({ id: row.id, name: row.name })
        }
        res.json(projects);
    });
}

function postProjectHandler(req, res) {
    var name = req.body.name;
    if (!name || name.length > 256) {
        res.sendStatus(400);
        return;
    }
    db.run('INSERT INTO projects(name) VALUES(?)', name, function(err) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.status(200).json({id: this.lastID, name: name});
    });
}

function putProjectHandler(req, res) {
    var id = req.params.projectId;
    var name = req.body.name;
    if (!name || !id || name.length > 256 || !isFinite(id)) {
        res.sendStatus(400);
        return;
    }
    db.run('UPDATE projects SET name = ? WHERE id = ?', [name, id], function(err) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).json({id: id, name: name});
    });
}

function deleteProjectHandler(req, res) {
    var id = req.params.projectId;
    if (!id || !isFinite(id)) {
        res.sendStatus(400);
        return;
    }
    db.run('UPDATE projects SET deleted = 1 WHERE id = ?', id, function(err) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.sendStatus(204);
    });
}

function getCommitsHandler(req, res) {
    var id = req.params.projectId;
    if (!id || !isFinite(id)) {
        res.sendStatus(400);
        return;
    }
    db.all('SELECT id, tag, time FROM commits WHERE project_id = ? ORDER BY time DESC', id, function(err, rows) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        var row, commits = [];
        for (var i = 0; i < rows.length; ++i) {
            row = rows[i];
            commits.push({id: row.id, tag: row.tag, time: new Date(row.time) })
        }
        res.json(commits);
    });
}

function getTaggedCommitsHandler(req, res) {
    var id = req.params.projectId;
    if (!id || !isFinite(id)) {
        res.sendStatus(400);
        return;
    }
    db.all('SELECT id, tag, time FROM commits WHERE project_id = ? AND tag IS NOT NULL ORDER BY time DESC', id, function(err, rows) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        var row, commits = [];
        for (var i = 0; i < rows.length; ++i) {
            row = rows[i];
            commits.push({id: row.id, tag: row.tag, time: new Date(row.time) })
        }
        res.json(commits);
    });
}

function putCommitTagHandler(req, res) {
    var projectId = req.params.projectId;
    var commitId = req.params.commitId;
    var tag = req.body.tag;
    if (!projectId || !isFinite(projectId) || !commitId || !isFinite(commitId) || !tag) {
        res.sendStatus(400);
        return;
    }
    db.run('UPDATE commits SET tag = ? WHERE project_id = ? AND id = ?', [tag, projectId, commitId], function(err, rows) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        // TODO: 201->204
        res.status(201).send();
    });
}

function getStyleHandler(req, res) {
    var projectId = +req.params.projectId;
    var commitId = typeof req.params.commitId !== 'undefined' ? req.params.commitId : -1;
    if (!projectId || !isFinite(projectId) || (commitId != -1 && !isFinite(commitId))) {
        res.sendStatus(400);
        return;
    }
    var sql_expr = commitId == -1 ?
        'SELECT json FROM style WHERE id = (SELECT style_id FROM commits WHERE project_id = $projectId ORDER BY time DESC LIMIT 1)' :
        'SELECT json FROM style WHERE id = (SELECT style_id FROM commits WHERE project_id = $projectId AND id = $commitId)';

    var sql_data = {'$projectId': projectId};
    if (commitId !== -1) {
        sql_data['$commitId'] = commitId;
    }

    db.get(sql_expr, sql_data, function(err, row) {
        if (err) {
            if (err.errno == 25) {
                res.sendStatus(404);
            } else {
                res.status(500).send(err.message);
            }
            return;
        }
        if (!row) {
            res.sendStatus(404);
            return;
        }
        res.send(row.json);
    });
}

function errCallback(err) {
    if (err) {
        console.log(err.message);
    }
}

function postStyleHandler(req, res) {
    var projectId = +req.params.projectId;
    var style = JSON.stringify(req.body.style);
    if (!isFinite(projectId) || !style) {
        res.sendStatus(400);
        return;
    }

    db.beginTransaction(function (err, transaction) {
        transaction.run('INSERT INTO style(project_id, json) VALUES($projectId, $json)', {$projectId: projectId, $json: style }, function (err) {
            if (err) {
                res.status(500).send(err.message);
                transaction.rollback(errCallback);
                return;
            }
            var styleId = this.lastID;
            transaction.run('INSERT INTO commits(project_id, style_id, time, sprite_id)' +
                ' VALUES($projectId, $styleId, datetime(\'now\'), (' +
                'SELECT sprite_id FROM commits WHERE project_id = $projectId ORDER BY time DESC LIMIT 1' +
                '));', {$projectId: projectId, $styleId: styleId}, function (err) {
                if (err) {
                    res.status(500).send(err.message);
                    transaction.rollback(errCallback);
                    return;
                }
                var commitId = this.lastID;
                transaction.commit(function(err) {
                    if (err) {
                        res.status(500).send(err.message);
                        transaction.rollback(errCallback);
                        return;
                    }
                    res.status(200).json({commit_id: commitId});
                });
            });
        });
    });
}

function getSpriteHandler(req, res) {
    // TODO: recheck params
    var projectId = req.params.projectId;
    var file = req.params.file;
    var commitId = typeof req.params.commitId !== 'undefined' ? req.params.commitId : -1;
    if (!projectId || !isFinite(projectId) || (commitId != -1 && !isFinite(commitId))) {
        res.sendStatus(400);
        return;
    }
    var is_png = false;
    switch (file) {
        case 'sprite.json':
            file = 'json';
            break;
        case 'sprite@2x.json':
            file = 'json2x';
            break;
        case 'sprite.png':
            file = 'png';
            is_png = true;
            break;
        case 'sprite@2x.png':
            file = 'png2x';
            is_png = true;
            break;
        default:
            res.sendStatus(400);
            return;
    }
    var sql_expr, sql_params;
    if (commitId == -1) {
        sql_expr = 'SELECT ' + file + ' FROM sprites WHERE id = (SELECT sprite_id FROM commits WHERE project_id = $projectId ORDER BY time DESC LIMIT 1)';
        sql_params = {$projectId: projectId};
    } else {
        sql_expr = 'SELECT ' + file + ' FROM sprites WHERE id = (SELECT sprite_id FROM commits WHERE project_id = $projectId AND id = $commitId)';
        sql_params = {$projectId: projectId, $commitId: commitId};
    }
    db.get(sql_expr, sql_params, function(err, row) {
        if (err) {
            // TODO: add this to another handlers:
            if (err.errno == 25) {
                res.sendStatus(404);
            } else {
                res.status(500).send(err.message);
            }
            return;
        }
        if (!row) {
            res.sendStatus(404);
            return;
        }

        if (is_png) {
            res.set('Content-Type', 'image/png');
        } else {
            res.set('Content-Type', 'application/json');
        }
        res.send(row[file]);
    });
}

function getIcons(project_id, callback) {
    var icons = [];
    db.all('SELECT id, name, extension, data FROM icons WHERE id IN (' +
        'SELECT icon_id FROM sprite_icons WHERE sprite_id = (' +
        'SELECT sprite_id FROM commits WHERE project_id = $projectId ORDER BY time DESC LIMIT 1))',
        {$projectId: project_id}, function (err, rows) {
            if (err) {
                if (err.errno != 25) {
                    callback(err, null);
                    return;
                }
            } else {
                for (var i = 0, rowsNum = rows.length; i < rowsNum; ++i) {
                    var row = rows[i];
                    // TODO db_id -> id?
                    icons.push({id: row.name, svg: row.data, db_id: row.id, ext: row.extension});
                }
            }
            callback(null, icons);
        });
}

function generateSprite(icons, ratio, callback) {
    var sprite = {};
    spritezero.generateLayout(icons, ratio, true, function (err, layout) {
        if (err) {
            callback(err, null);
            return;
        }
        sprite.json = layout;
        spritezero.generateLayout(icons, ratio, false, function (err, layout) {
            if (err) {
                callback(err, null);
                return;
            }
            spritezero.generateImage(layout, function (err, image) {
                if (err) {
                    callback(err, null);
                    return;
                }
                sprite.png = image;
                callback(null, sprite);
            });
        });
    });
}

function generateSprites(icons, callback) {
    var sprites = {json: null, json2: null, png: null, png2: null};
    generateSprite(icons, 1, function (err, sprite) {
        if (err) {
            callback(err, null);
            return;
        }
        sprites.json = sprite.json;
        sprites.png = sprite.png;
        generateSprite(icons, 2, function (err, sprite) {
            if (err) {
                callback(err, null);
                return;
            }
            sprites.json2 = sprite.json;
            sprites.png2 = sprite.png;
            callback(null, sprites);
        })
    });
}

function saveIcons(transaction, icons, new_icons_ids, callback) {
    if (icons.length == 0) {
        callback(null, new_icons_ids);
        return;
    }
    var icon = icons.pop();
    transaction.run('INSERT INTO icons(name, extension, data) VALUES (?, ?, ?)',
        [icon.id, icon.ext, icon.svg], function (err) {
            if (err) {
                callback(err, null);
                return;
            }
            new_icons_ids.push(this.lastID);
            saveIcons(transaction, icons, new_icons_ids, callback);
        });
}

function saveIconsLinks(transaction, icons_ids, sprite_id, callback) {
    if (icons_ids.length == 0) {
        callback(null);
        return;
    }
    var icon_id = icons_ids.pop();
    transaction.run('INSERT INTO sprite_icons(icon_id, sprite_id ) VALUES (?, ?)',
        [icon_id, sprite_id], function (err) {
            if (err) {
                callback(err);
                return;
            }
            saveIconsLinks(transaction, icons_ids, sprite_id, callback);
        });
}


function commitIcons(project_id, sprites, new_icons, old_icons_ids, callback) {

    db.beginTransaction(function (err, transaction) {
        transaction.run('INSERT INTO sprites(json, png, json2x, png2x, project_id)' +
            ' VALUES($json, $png, $json2x, $png2x, $project_id)',
                {$json: JSON.stringify(sprites.json),
                $png: sprites.png,
                $json2x: JSON.stringify(sprites.json2),
                $png2x: sprites.png2, $project_id: project_id},
            function (err) {
                if (err) {
                    callback(err, null);
                    transaction.rollback(errCallback);
                    return;
                }
                var sprite_id = this.lastID;
                saveIcons(transaction, new_icons, [], function(err, new_icons_ids) {
                    if (err) {
                        callback(err, null);
                        transaction.rollback(errCallback);
                        return;
                    }
                    var icons_ids = old_icons_ids.concat(new_icons_ids);
                    saveIconsLinks(transaction, icons_ids, sprite_id, function (err) {
                        if (err) {
                            callback(err, null);
                            transaction.rollback(errCallback);
                            return;
                        }
                        transaction.run('INSERT INTO commits(project_id, sprite_id, time, style_id)' +
                            ' VALUES($projectId, $spriteId, datetime(\'now\'), (' +
                            'SELECT style_id FROM commits WHERE project_id = $projectId ORDER BY time DESC LIMIT 1' +
                            '));', {$projectId: project_id, $spriteId: sprite_id}, function (err) {
                            if (err) {
                                res.status(500).send(err.message);
                                transaction.rollback(errCallback);
                                return;
                            }
                            var commitId = this.lastID;
                            transaction.commit(function (err) {
                                if (err) {
                                    transaction.rollback(errCallback);
                                    callback(err, null);
                                    return;
                                }
                                callback(null, {commit_id: commitId});
                            });
                        });
                    })
                });
            });
    });
}

function postSpriteHandler(req, res) {
    var projectId = +req.params.projectId;
    if (!isFinite(projectId)) {
        res.sendStatus(400);
        return;
    }

    // split files
    var files = req.files;
    var new_icons = [];
    var rejected_files_names = [];

    for (var i = 0, filesNum = files.length; i < filesNum; ++i) {
        var file = files[i];
        var mimetype = file.mimetype;
        if (mimetype === 'image/svg+xml') {
            new_icons.push({id: file.originalname, svg: file.buffer, ext: 'svg'});
        } else if (mimetype === 'image/png') {
            new_icons.push({id: file.originalname, svg: file.buffer, ext: 'png'});
        } else {
            rejected_files_names.push(file.originalname);
        }
    }

    if (rejected_files_names.length == files.length) {
        res.status(400).json({rejected_files: rejected_files_names});
        return;
    }

    // get icons
    getIcons(projectId, function (err, old_icons) {
        if (err)  {
            res.status(500).send(err.message);
            return;
        }
        var all_icons = new_icons.concat(old_icons);
        var old_icons_ids = [];
        old_icons.map(function (icon) {
            old_icons_ids.push(icon.db_id);
        });
        generateSprites(all_icons, function (err, sprites) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            commitIcons(projectId, sprites, new_icons, old_icons_ids, function (err, commit) {
                if (err) {
                    res.status(500).send(err.message);
                    return;
                }
                res.status(200).json(commit);
            })
        });
    });
}

function deleteSpriteHandler(req, res) {
    var projectId = +req.params.projectId;
    var icons_to_delete = req.body.icons;
    if (!projectId || !isFinite(projectId) || !icons_to_delete || !icons_to_delete.length) {
        res.sendStatus(400);
        return;
    }

    getIcons(projectId, function (err, old_icons) {
        if (err)  {
            res.status(500).send(err.message);
            return;
        }
        var new_icons = [];
        var icons_ids = [];

        // filter
        for (var i = 0; i < old_icons.length; ++i) {
            var icon = old_icons[i];
            if (icons_to_delete.indexOf(icon.id) == -1) {
                new_icons.push(icon);
                icons_ids.push(icon.db_id);
            }
        }
        generateSprites(new_icons, function (err, sprites) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            commitIcons(projectId, sprites, [], icons_ids, function (err, commit) {
                if (err) {
                    res.status(500).send(err.message);
                    return;
                }
                res.status(200).json(commit);
            })
        });
    });
}

app.use(corsMiddleware);
app.use(bodyParser.json({limit: '100mb'})); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', express.static('./app'));
app.use('/dist', express.static('./dist'));
app.use('/libs', express.static('./libs'));
app.use('/fonts', express.static('./fonts'));
// app.get('/', function (req, res) {
// 	res.redirect('/app/');
// });

app.get('/projects', getProjectsHandler);
app.post('/projects', postProjectHandler);
app.put('/projects/:projectId', putProjectHandler);
app.delete('/projects/:projectId', deleteProjectHandler);

app.get('/projects/:projectId/commits', getCommitsHandler);
app.get('/projects/:projectId/commits/tagged', getTaggedCommitsHandler);
app.put('/projects/:projectId/commits/:commitId/tag', putCommitTagHandler);
app.get('/projects/:projectId/commits/:commitId/style', getStyleHandler);
app.get('/projects/:projectId/commits/:commitId/:file(sprite.json|sprite@2x.json|sprite.png|sprite@2x.png)',
    getSpriteHandler);

app.get('/projects/:projectId/style.json', getStyleHandler);
app.post('/projects/:projectId/style.json', postStyleHandler);

app.get('/projects/:projectId/:file(sprite.json|sprite@2x.json|sprite.png|sprite@2x.png)', getSpriteHandler);
app.post('/projects/:projectId/sprite', upload.array('icon'), postSpriteHandler);
app.delete('/projects/:projectId/sprite/', deleteSpriteHandler);

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});
