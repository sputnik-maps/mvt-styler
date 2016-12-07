/**
 *
 * @title statistic
 */
function zoomStatistic(style) {
  var minzoom = 0;
  var maxzoom = 19;
  var zooms = new Array(maxzoom - minzoom + 1);
  for (var i = minzoom; i < maxzoom; ++i) {
    zooms[i] = new Set();
  }
  var layers = style.layers;
  var layers_length = layers.length;
	for (var i = 0; i < layers_length; i++) {
		layer = layers[i];
    if (!layer.hasOwnProperty('source-layer')) {
			continue;
		}
    lyr_name = layer['source-layer'];
    var lminzoom = minzoom;
    var lmaxzoom = maxzoom;
    if (layer.hasOwnProperty('maxzoom')) {
			lmaxzoom = layer.maxzoom;
		}
		if (layer.hasOwnProperty('minzoom')) {
			lminzoom = layer.minzoom;
		}
    for (var j = lminzoom; j < lmaxzoom; ++j) {
      zooms[j].add(lyr_name);
    }
  }

  var stat = new Array(maxzoom - minzoom + 1);
  stat[minzoom] = {added: Array.from(zooms[minzoom]), removed: []};
  for (var i = minzoom + 1; i < maxzoom; ++i) {
    stat[i] = {added: [], removed: []};
    stat[i].added = Array.from(zooms[i]).filter(function(x) {
      return !zooms[i-1].has(x);
    });
    stat[i].removed = Array.from(zooms[i-1]).filter(function(x) {
      return !zooms[i].has(x);
    });
  }

  return stat;
}

function layerStatistic(lyr_name, style) {
  console.log(lyr_name);
  var minzoom = 0;
  var maxzoom = 19;
  var stats = new Array(maxzoom - minzoom + 1);
  for (var i = minzoom; i < maxzoom; ++i) {
    stats[i] = new Set();
  }
  var layers = style.layers;
  var layers_length = layers.length;
	for (var i = 0; i < layers_length; ++i) {
    layer = layers[i];
    if (!layer.hasOwnProperty('source-layer') ||
     layer['source-layer'] !== lyr_name) {
			continue;
		}
    var lminzoom = minzoom;
    var lmaxzoom = maxzoom;
    if (layer.hasOwnProperty('maxzoom')) {
			lmaxzoom = layer.maxzoom;
		}
		if (layer.hasOwnProperty('minzoom')) {
			lminzoom = layer.minzoom;
		}
    var filter;
    if (layer.hasOwnProperty('filter')) {
      filter = layer.filter.toString();
    } else {
      filter = 'no_filter';
    }
    for (var j = lminzoom; j < lmaxzoom; ++j) {
      stats[j].add(filter);
    }
  }
  return stats;
}

if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	module.exports = {
    zoomStatistic: zoomStatistic,
    layerStatistic: layerStatistic
  };
}
