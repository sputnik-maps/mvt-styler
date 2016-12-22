
function ensureObject(value) {
	return 'string' === typeof value ? JSON.parse(value) : value;
}

function ensureString(value) {
	return 'object' === typeof value ? JSON.stringify(value) : '' + value;
}

var store = {}; // { name: style }
var style;
var styleName = '';
var projectId;
var projectCommit = -1;
var baseProjectPath;

var storage = {

		'set': function _set(contents) {
			style = ensureObject(contents);
		},
		'get': function _get() {
			return style;
		},
		'update': function _update(obj) {
			_.extend(style, ensureObject(obj));
		},

		// get projects list
		'getProjects': function _getProjects (cb) {
			xhr.get(' ./projects', null, cb || defaultCallback)
		},

		// create project in storage
		'createProject': function _createProject (name, cb) {
			xhr.post('./projects',
				JSON.stringify({name: name}),
				cb || defaultCallback
			)
		},
		'deleteProject': function _deleteProject(projectId, cb) {
			xhr.delete('./projects/'+ projectId,
				null,
				cb || defaultCallback
			);
		},

// var projectId = +req.params.projectId;
// var style = req.body.style;

		'updateStyle': function updateStyle(style, cb) {
			xhr.post(
				baseProjectPath + '/style.json',
				JSON.stringify({style: style}),
				cb || defaultCallback
			)
		},

		'loadStyle': function loadStyle(cb) {
			xhr.get(
				baseProjectPath + '/style.json',
				null,
				cb || defaultCallback
			)
		},

		// to storage
		'save': function _store() {

		},
		// from storage
		'load': function _load() {

		},

		'setProjectId': function (id, commit) {
			if (!id || !isFinite(id)) {
				throw 'invalid project ID';
			}
			projectId = id;
			var path = './projects/' + projectId;
			if (commit && commit != -1) {
				projectCommit = commit;
				path += '/commit/' + commit;
			}
			baseProjectPath = path;
		},

		'setCommit': function (commit) {
			if (!commit || !isFinite(commit)) {
				throw 'invalid commit ID';
			}
			this.setProjectId(projectId, commit);
		}
};

function defaultCallback(o, ctx) {
	if (console && console.log) {
		console.log('xhr.defaultCallback(o) ' + (ctx && ctx || '') + ' : ' , o);
	}
}

if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	module.exports = storage;
}
