mapboxgl.accessToken = '_';

var map = new mapboxgl.Map({
	container: 'map', // container id
	// style: style, // 'mapbox://styles/mapbox/streets-v8', //stylesheet location
	center: [37.4319, 55.6337], // starting position
	minZoom: 1,
	maxZoom: 20,
	zoom: 12, // starting zoom
	hash: true // display current zoom and coordinates as a part of URL
});

//
// map.on('mousemove', function(e) {
// 			 var features = map.queryRenderedFeatures(e.point, {
// 					 layers: ['admin_text.admin_level_5']
// 			 });
// 			 map.getCanvas().style.cursor = features.length ? 'pointer' : '';
// 			 if (features.length) {
// 				  console.log(features[0]);
//             map.setFilter("admin_text.admin_level_5_hover", ["==", "name_main", features[0].properties.name_main]);
// 						// map.setFilter("admin_text.admin_level_5", ["!=", "name_main", ""]);
// 				} else {
//             map.setFilter("admin_text.admin_level_5_hover", ["==", "name_main", ""]);
//         }
// 		 });
//
//  map.on("mouseout", function() {
//          map.setFilter("admin_text.admin_level_5_hover", ["==", "name_main", ""]);
//      });

if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	module.exports = map;
}
