"use strict";

var projectId;
var projectCommit = -1;
var baseProjectPath;

var sprite, sprite2x;

var filesToUpload = [];
var selectedIcons = [];

var iconsList = document.getElementById('icons-list');
if (typeof iconsList === 'undefined') {
    throw Error("icons-list' not found!");
}

var uploadBtn = document.getElementById('uploadBtn');
if (typeof uploadBtn === 'undefined') {
    throw Error("uploadBtn not found!");
}

var removeIconBtn = document.getElementById('removeIconBtn');
if (typeof removeIconBtn === 'undefined') {
    throw Error("removeIconBtn not found!");
}

function clearDOMElement(domElement) {
    while (domElement.firstChild) {
        domElement.removeChild(domElement.firstChild);
    }
}

function loadFile(path, callback, retry) {
    retry = typeof retry === 'undefined' ? false : retry;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == XMLHttpRequest.DONE) {
            if (xhttp.status == 200) {
                callback(xhttp.responseText);
            } else {
                console.log('Error loading ' + path);
                if (retry) {
                    loadFile(path, callback, true);
                }
            }
        }
    };
    xhttp.open('GET', path, true);
    xhttp.send();
    return xhttp;
}

function loadSpriteInfo() {
    selectedIcons = [];
    clearDOMElement(iconsList);
    // loadFile('/sprite/sprite.json', function (responseText) {
    loadFile(baseProjectPath + '/sprite.json', function (responseText) {
        sprite = JSON.parse(responseText);
        onSpriteInfoLoaded();
    });
    loadFile('/projects/' + projectId + '/sprite@2x.json',function (xhttp) {
        sprite2x = JSON.parse(responseText);
    });
}

function onSpriteInfoLoaded() {
    var backgroundImage = 'url(' + baseProjectPath + '/sprite.png?random='+ new Date().getTime() + ')';
    // var backgroundImage = 'url(/projects/' + projectId + '/sprite.png)';
    clearDOMElement(iconsList);
    for (var iconName in sprite) {
        var listItem = document.createElement('li');
        listItem.setAttribute('data-name', iconName);

        var image = document.createElement('div');
        image.style.backgroundImage = backgroundImage;
        var iconParams = sprite[iconName];
        image.style.width = iconParams.width + 'px';
        image.style.height = iconParams.height + 'px';
        image.style.backgroundPosition = -iconParams.x + 'px ' + -iconParams.y + 'px';
        // image.innerHTML = 'person';

        listItem.appendChild(image);

        var name = document.createTextNode(iconName);
        listItem.appendChild(name);

        // listItem.onclick = onIconClick;
        $(listItem).on('click', onIconClick);

        iconsList.appendChild(listItem);
    }
}

function onIconClick(e) {
    var target = e.currentTarget;
    var name = target.getAttribute('data-name');
    if (target.classList.contains('selected')) {
        target.classList.remove('selected');
        selectedIcons.splice(selectedIcons.indexOf(name), 1);
    } else {
        target.classList.add('selected');
        selectedIcons.push(name);
    }
    removeIconBtn.disabled = selectedIcons.length == 0;
}

function handleFiles(files) {
    var numFiles = files.length;
    if (numFiles == 0) {
        uploadBtn.disabled = true;
        return;
    }
    filesToUpload = [];
    for (var i = 0; i < numFiles; i++) {
        var file = files[i];
        if (file.type ==='image/svg+xml' || file.type === 'image/png') {
            filesToUpload.push(file);
        } else {
            var data = {
                message: 'Button color changed.',
                timeout: 2000
            };
            snackbarContainer.MaterialSnackbar.showSnackbar(data);
        }
    }
    uploadBtn.disabled = filesToUpload.length == 0;
}

removeIconBtn.addEventListener('click', function () {
    removeIconBtn.disabled = true;
    if (selectedIcons.length == 0) {
        return;
    }
    if (projectCommit != -1) {
        alert('Unable to modify items from history');
        return;
    }
    var path = '/projects/' + projectId + '/sprite';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == XMLHttpRequest.DONE) {
            if (xhttp.status == 200 || xhttp.status == 204) {
                loadSpriteInfo();
            } else {
                throw Error('Error loading ' + path);
            }
        }
    };
    xhttp.open('DELETE', path, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify({icons: selectedIcons}));
});

uploadBtn.addEventListener('click', function () {
    if (projectCommit != -1) {
        alert('Unable to modify items from history');
        return;
    }
    if (filesToUpload.length > 0) {
        var path = '/projects/' + projectId + '/sprite';
        var formData = new FormData();
        for (var i = 0, filesNum = filesToUpload.length; i < filesNum; ++i) {
            formData.append('icon', filesToUpload[i]);
        }
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == XMLHttpRequest.DONE) {
                if (xhttp.status == 200 || xhttp.status == 204) {
                    loadSpriteInfo();
                } else {
                    alert('Error uploading icons! ' + xhttp.status + ': ' + xhttp.responseText);
                }
            }
        };
        xhttp.open('POST', path, true);
        xhttp.send(formData);
        $(uploadModal).modal('hide');
    }
});

var uploadModal = document.querySelector('#uploadModal');

var uploadInput = uploadModal.querySelector('#uploadInput');
uploadInput.addEventListener('change', function () {
    handleFiles(this.files);
});

$(uploadModal).on('hidden.bs.modal', function (e) {
    filesToUpload = [];
    uploadInput.value = '';
    uploadBtn.disabled = true;
});


module.exports = {
    setProjectId: function(project_id, commit) {
        if (projectId == project_id) { return; }
        if (!project_id || !isFinite(project_id)) {
            throw 'invalid project ID';
        }
        projectId = project_id;
        var path = '/projects/' + projectId;
        if (commit && commit != -1) {
            projectCommit = commit;
            path += '/commit/' + commit;
        }
        baseProjectPath = path;
        loadSpriteInfo();
    }
};
