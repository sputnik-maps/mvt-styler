/**
 * styles
 * @type {{mapbox, sputnik}}
 */
var styles = {
	empty: require('./empty.js')
};

// console.log('styles', styles);

window.mvtStyles = styles;
if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	module.exports = styles;
}


