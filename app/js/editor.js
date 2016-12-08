/**
 *
 * @title editor
 */
var xhr = require('./xhr');
var themes = require('./themes');
var map = require('./map');
var storage = require('./storage');
var icons_tab = require('./icons.js');
var statistic = require('./statistic.js');
var sessions = {};
var editor;
var tabName = 'source'; // source|settings|layers
var layerIndex;

/**
 * style storage mock
 * @returns {{}}
 * @constructor
 */
var style;
var styleName;
var projectId;
var commitId;
var projectLoaded = false;
var styleChanged = false;
var editorVisible = true;
var zoomCorrection = false;
map.showTileBoundaries = document.getElementById('boundaries-checkbox').checked;
var layersAtPointPopup;

var saveBtn = $('#saveBtn');
saveBtn.prop( "disabled", true );

function setProjectId(id, commit) {
	if (!id || !isFinite(id)) {
		throw 'invalid project ID';
	}
	if (!projectLoaded) {
		$('.editor-switch li').removeClass('disabled');
		projectLoaded = true;
	}
	projectId = id;
	if (commit && commit != -1) {
		projectCommit = commit;
	}
	icons_tab.setProjectId(id, commit);
	storage.setProjectId(id, commit);
	sessions = {};
	styleChanged = false;
	saveBtn.prop( "disabled", true );
}

function setCommit(commit) {
	if (!commit || !isFinite(commit)) {
		throw 'invalid commit ID';
	}
	setProjectId(projectId, commit);
}

function setStyle(name) {
	// console.log('setStyle(name)', name);
	if (!window.mvtStyles) {
		throw new Error('No window.mvtStyles defined');
	}
	var tempStyle = name && window.mvtStyles[name] || style;
	if (!tempStyle) {
		console.log('openSource() couldnt resolve style:', name);
		return;
	}

	styleName = name;
	applyStyle(tempStyle);

}

function openIO() {
// console.log('openIO');

	$('.content-pane').hide();
	$('#io').show();

	var container = $('#io-container');
	container.empty();

	var projects = null;
	storage.getProjects(function (o) {
		try {
			projects = JSON.parse(o.response);
			_.each(projects, function (project, index) {
				var active = projectId == project.id ? ' active' : '';
				var el = $(
					'<a href="#" title="#' + project.id + '" data-index="' + project.id + '" class="list-group-item' + active + '" onclick="codeEditor.IO.load('+project.id+')">'+project.name+
						'<button class="btn btn-sm btn-default sm-btn-remove pull-right" type="button" onclick="codeEditor.IO.remove('+project.id+')" >' +
						'<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>'+
						'</button>'+
					'</a>'
				);
				container.append(el);
			});
		} catch (e) {}
	});
}

function showStatistic() {
	$('.content-pane').hide();
	$('#statistic').show();

	var container = $('#statistic-container');
	container.empty();

	var zoom_statistic = statistic.zoomStatistic(style);
	var zoom_statistic_length = zoom_statistic.length;
	for (var i = 0; i < zoom_statistic_length; i++) {
		if (zoom_statistic[i] == undefined) {
			continue;
		}
		var added = zoom_statistic[i].added;
		var added_str = '';
		for (var j = 0; j < added.length; ++j) {
			added_str += '<span class="badge lyr-btn lyr-stat">' + added[j] + '</span>\n';
		}
		var removed = zoom_statistic[i].removed;
		var removed_str = '';
		for (var j = 0; j < removed.length; ++j) {
			removed_str += '<span class="badge lyr-btn lyr-stat">' + removed[j] + '</span>\n';
		}
		var el = $(
			'<tr>' +
				'<th scope="row">' + i + '</th>' +
				'<td>' + added_str + '</td>' +
				'<td>' + removed_str + '</td>' +
			'</tr>'
		);
		container.append(el);
	}

	$('.lyr-stat').click(function() {
		var lyr_name = $( this ).text();
		var stat = statistic.layerStatistic(lyr_name, style);
		console.log(stat);
		$('#layerStatisticModalLabel').text(lyr_name);
		var container = $('#lyr-statistic-container');
		container.empty();
		var layer_statistic_length = stat.length;
		for (var j = 0; j < layer_statistic_length; ++j) {
			if (stat[j] == undefined) {
				continue;
			}
			var filters = Array.from(stat[j]);
			var filters_str = '';
			for (var k = 0; k < filters.length; ++k) {
				filters_str += '<p>' + filters[k].split(',').join(', ') + '</p>\n';
			}
			var el = $(
				'<tr>' +
					'<th scope="row">' + j + '</th>' +
					'<td>' + filters_str + '</td>' +
				'</tr>'
			);
			container.append(el);
		}
		$('#layerStatisticModal').modal('show');
	});
}

var IO = {
	remove: function io__remove(id) {
		// console.log('IO.remove('+id+')');
		storage.deleteProject(id, function (o) {
			console.log('deleted', o);
			openIO();
		});
	},
	create: function io__create(name, callback) {
		// console.log('IO.create('+name+')');
		if (!name) { return; }

		storage.createProject(name, function (o) {
			console.log('created', o);

			callback(o.response);
			// openIO();
		});
	},

	update: function io__update(callback) {
		console.log('IO.update()');

		storage.updateStyle(style, function (o) {
			console.log('style updated', o);

			if (callback) {
				callback(o.response);
			}
		});
	},

	load: function io__load(id, callback) {
		if (id == projectId) { return; }
		setProjectId(id);
		storage.loadStyle(function (o) {
			console.log('style loaded', id);
			var loadedStyle;
			try {
				loadedStyle = JSON.parse(o.responseText);
			} catch (e) {
				console.log('Error parsing style: ', e);
				loadedStyle = {};
			}
			applyStyle(loadedStyle, true);
			openIO();
			if (callback) {
				callback(o.responseText);
			}
		});

	}
};


/**
 *
 * @param name
 * @param filter Object keys to be excluded for edition
 */
function openSource(name) {
	if (!projectLoaded) {
		return;
	}
	setStyle(name);

	if (style) {
		edit(style);
	}
	// applyStyle(tempStyle);
	tabName = 'source';
	styleName = name || styleName;
}

function openSettings() {
	if (!projectLoaded) {
		return;
	}
	var settings = _.omit(style, ['sources', 'layers']);
	edit(settings, '__settings__');
	tabName = 'settings';
}

function openLayers() {
	if (!projectLoaded) {
		return;
	}
	var layers = style.layers;
	edit(layers);
	tabName = 'layers';
}

function openList() {
	if (!projectLoaded) {
		return;
	}
	$('.content-pane').hide();

	$('#list').show();
	tabName = 'list';

	var container = $('#layers-container');
	container.empty();

	_.each(style.layers, function (layer, index) {
		var el = $('<a href="#" data-index="' + index + '" class="list-group-item">'+layer.id+
				'<button class="btn btn-sm btn-default sm-btn-remove pull-right" type="button" onclick="codeEditor.removeLayer('+index+',\''+layer.id+'\', event)" >' +
				'<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>'+
				'</button>'+
			'</a>');
		container.append(el);
	});

	var sortOptions = {
		onEnd: function (event) {
			if (event.oldIndex === event.newIndex) {
				return;
			}
			moveArrayItem(style.layers, event.oldIndex, event.newIndex);
			applyStyle(style, true);
			onStyleChanged();
			openList();
		}
	};

	Sortable.create(container.get(0), sortOptions);

	$('#layers-container a').on('click', function(e) {
		layerIndex = $(e.target).data('index');
		var lyr_id = style.layers[layerIndex].id;
		editLayer(lyr_id);
	});

}

function openIcons() {
	if (!projectLoaded) {
		return;
	}
	$('.content-pane').hide();

	$('#icons-editor').show();
	tabName = 'icons';
}

function moveArrayItem(list, fromIndex, toIndex) {
	list.splice(toIndex, 0, list.splice(fromIndex, 1)[0]);
}

function applyStyle(newStyle, force) {
	if (!force && newStyle === style) {
		// console.log('applyStyle() styles are identical, halt');
		return;
	}

	try {
		if (zoomCorrection) {
			map.setStyle(correctZoomLevels(newStyle));
		} else {
			map.setStyle(newStyle);
		}
		style = newStyle;
		styleName = newStyle.name;
		// TODO: store style
	} catch (e) {
		console.log(' (!) applyStyle(): Error opening style', e);
	}
}

function correctZoom(zoom) {
	return zoom - 1;
}

function correctProperties(properties) {
	for (property_name in properties) {
		property = properties[property_name];
		if (property.hasOwnProperty('stops')) {
			stops_length = property.stops.length;
			for (var j = 0; j < stops_length; j++) {
				stop = property.stops[j];
				stop[0] = correctZoom(stop[0]);
			}
		}
	}
}

function correctZoomLevels(style) {
	var corrected_style = $.extend(true, {}, style)
	var layers = corrected_style.layers;
	var layers_length = layers.length;
	for (var i = 0; i < layers_length; i++) {
		layer = layers[i];
		if (layer.hasOwnProperty('maxzoom')) {
			layer.maxzoom = correctZoom(layer.maxzoom);
		}
		if (layer.hasOwnProperty('minzoom')) {
			layer.minzoom = correctZoom(layer.minzoom);
		}
		if (layer.hasOwnProperty('paint')) {
			correctProperties(layer.paint)
		}
		if (layer.hasOwnProperty('layout')) {
			correctProperties(layer.layout)
		}
	}
	// console.log(JSON.stringify(corrected_style));
	return corrected_style
}

/**
 *
 * @param newStyle {object|string} style
 * @param id {string|number} unique key to save session; if not provided session won't not be saved
 */
function edit(newStyle, id) {
	// Creates new session if needed, does not save session without id.
	var code = typeof newStyle === 'object' ? JSON.stringify(newStyle, null, '	') : '' + newStyle;
	var aceSession;
	var idProvided = typeof id !== 'undefined';
	if (!idProvided || !(id in sessions)) {
		aceSession = sessions.getaceSession = ace.createEditSession(code, 'ace/mode/json');
		if (idProvided) {
			aceSession.setMode('ace/mode/json');
			sessions[id] = aceSession;
		}
	} else {
		aceSession = sessions[id];
	}
	editor.setSession(aceSession);
	aceSession.on('change', onCodeUpdate);
	$('.content-pane').hide();
	$('#editor').show();
}

function editLayer(lyr_name) {
	var layers = style.layers;
	for (var i = 0; i < layers.length; i++) {
		var lyr = layers[i];
		if (lyr.id === lyr_name) {
			tabName = 'layer';
			edit(lyr, lyr.id);
			return;
		}
	}
}

function render() {
	try {
		var jsonData = JSON.parse(editor.getSession().getValue());
		var oStyle;
		if ('source' === tabName) {
			oStyle = jsonData;
		}
		else if ('settings' === tabName) {
			oStyle = _.extend({}, style, jsonData);
		}
		else if ('layers' === tabName) {
			oStyle = _.extend({}, style, {layers:jsonData});
		}
		else if ('layer' === tabName) {
			// console.log('render() ', tabName, 'layerIndex', layerIndex, 'style.layers', style.layers);
			var layers = Array.prototype.slice.call(style.layers);
			layers[layerIndex] = jsonData;
			oStyle = _.extend({}, style, {layers: layers});
		}
		if (oStyle) {
			applyStyle(oStyle);
		}
	}
	catch (e) {}
}

// ace.config.set('themePath', 'http://cdnjs.cloudflare.com/ajax/libs/ace/1.2.3');
// ace.config.set('basePath', 'http://cdnjs.cloudflare.com/ajax/libs/ace/1.2.3');
// console.log('theme', ace.config.get('themePath'));

editor = ace.edit('editor');

editor.setShowPrintMargin(false);
editor.$blockScrolling = Infinity;

var aceThemes = themes.list;
var themePref = themes.value;
var themeEl = document.getElementById('theme');

for (var t = 0; t < aceThemes.length; t++) {
	var themeOption = document.createElement('option');
	themeOption.value = aceThemes[t];
	themeOption.text = aceThemes[t];
	themeEl.appendChild(themeOption);
}
themeEl.value = themePref;
setTheme(themePref);

function setTheme(theme) {
	editor.setTheme('ace/theme/'+theme);
}

var updateTimeout = 100,
	lastUpdated = Date.now(), timeout = null;

function onCodeUpdate () {
	// var now  = Date.now();
	// // console.log('now - lastUpdated', now - lastUpdated, ' < ', updateTimeout, ' = ', now - lastUpdated < updateTimeout );
	// if (timeout) {
	// 	clearTimeout(timeout);
	// }
	// if (now - lastUpdated < updateTimeout) {
	// 	timeout = setTimeout(onCodeUpdate, updateTimeout);
	// } else {
	// 	lastUpdated = now;
		render();
	// }
	onStyleChanged();
}

function createProject(name, e) {
	if (e && e instanceof Event) {
		// console.log('EVENT stop', e);
		// e.stopPropagation();
		e.preventDefault();
	}

	// console.log('createProject', name.value, IO.create);
	$('#createProjectModal').modal('hide');
	if (!name || !name.value) {
		return;
	}
	IO.create(name.value, onProjectCreated);
}

function onProjectCreated(response) {
	console.log('onProjectCreated', response);

	var value;
	try {
		value = JSON.parse(response);
	} catch (e) {
		return;
	}

	// preparing new style
	var newStyle = _.extend({}, window.mvtStyles.empty, value);
	console.log('newStyle', newStyle);
	styleName = value.name;
	setProjectId(+value.id);
	newStyle.sprite =  '/projects/' + projectId + '/sprite';
	applyStyle(newStyle, true);
	onStyleChanged();
	openIO();
}

function saveProject () {
	if (!styleChanged) {
		return;
	}
	styleChanged = false;
	saveBtn.prop( "disabled", true );
	IO.update();
}

function addLayer(name, e) {
	console.log('Add layer: ', name);
	if (e && e instanceof Event) {
		e.preventDefault();
	}
	$('#createLayerModal').modal('hide');
	if (!name || !name.value) {
		return;
	}
	if (!('layers' in style)) {
		style.layers = [];
	}
	style.layers.push({id: name.value, layout: {}, paint: {}});
	onStyleChanged();
	openList();
}

function removeLayer(id, name, e) {
	if (e && e instanceof Event) {
		e.preventDefault();
	}
	if (!('layers' in style)) {
		return;
	}
	var layers = style.layers;
	if (confirm('Remove layer ' + name + '?') == true) {
		console.log('Remove layer: ', id);
		var lyr = layers[id];
		if (lyr.id !== name) {
			alert('Layer name does not match! (', name, ' != ', lyr.id, ')');
			return;
		}
		if (name in sessions) {
			delete sessions['name'];
		}
		layers.splice(id, 1);
		onStyleChanged();
		openList();
	}
}

function onStyleChanged() {
	console.log('onStyleChanged');
	if (!styleChanged) {
		styleChanged = true;
		saveBtn.prop( "disabled", false );
	}
}

var exposed = {
	setStyle: setStyle,
	render: render,
	setTheme: setTheme,
	openSettings: openSettings,
	openSource: openSource,
	openLayers: openLayers,
	openList: openList,
	openIO: openIO,
	openIcons: openIcons,
	createProject:createProject,
	saveProject: saveProject,
	addLayer: addLayer,
	removeLayer: removeLayer,
	showStatistic: showStatistic,
	IO: IO
};

function onTabClick(e) {
	if (!projectLoaded) {
		return;
	}

	$('#layers-container a').off('click');
	layerIndex = undefined;

	var role = $(e.currentTarget).attr('role');
	var cmd = 'open' + ('' + role).replace(/^tab/, '');
	$('.editor-switch li').removeClass('active');
	$('.editor-switch li[role=' + role + ']').addClass('active');

	if ('function' === typeof exposed[cmd]) {
		$('.content-pane').hide();
		exposed[cmd]();
	}
}

function showEditor() {
	editorVisible = true;
	$('.app-col-left').css('right', '50%');
	map.resize();
	$('#expandBtn').hide();
	$('.app-col-right').show();
}

function hideEditor() {
	editorVisible = false;
	$('.app-col-left').css('right', '0%');
	map.resize();
	$('#expandBtn').show();
	$('.app-col-right').hide();
}

map.on('click', function (e) {
		if (layersAtPointPopup && layersAtPointPopup.isOpen()) {
			layersAtPointPopup.remove();
			return;
		}

    var features = map.queryRenderedFeatures(e.point, {});

		console.log(features);
		var layers = new Set();
    var features_len = features.length;
		for (var i = 0; i < features_len; ++i) {
			layers.add(features[i].layer.id)
		}

		var popupHtml = ""
		layers.forEach(function(lyr) {
			popupHtml += '<p><span class="badge lyr-btn lyr-edit-btn">' + lyr + '</span><p>\n';
		});

    layersAtPointPopup = new mapboxgl.Popup({closeOnClick: true})
        .setLngLat(e.lngLat)
        .setHTML(popupHtml)
        .addTo(map);

		$('.lyr-edit-btn').on('click', function(e) {
			if (!editorVisible) {
				showEditor();
			}
			editLayer($(e.target).text());
		});
});

$('#collapseBtn').click(function () {
	hideEditor();
})

$('#expandBtn').click(function () {
	showEditor();
})

document.getElementById('boundaries-checkbox').onclick = function() {
    map.showTileBoundaries = !!this.checked;
};

$('.editor-tabs li').on('click', onTabClick);

$('#createLayerModal').on('hidden.bs.modal', function (e) {
	// console.log('hidden.bs.modal', e);
	$('[name=layerName]').val('');
});

$('#createProjectModal').on('hidden.bs.modal', function (e) {
	// console.log('hidden.bs.modal', e);
	$('[name=projectName]').val('');
});

/*
$('#myModal').on('show.bs.modal', function (e) {
	console.log('show.bs.modal', $('[name=projectName]').get(0));
	$('[name=projectName]').get(0).focus();
});
*/

if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	module.exports = exposed;
}
