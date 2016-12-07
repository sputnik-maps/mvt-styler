/**
 * aceJS themes settings
 * @type {string[]}
 */
var aceThemes = [
	'ambiance', 'chaos', 'chrome', 'clouds', 'clouds_midnight', 'cobalt', 'crimson_editor',
	'dawn', 'dreamweaver', 'eclipse', 'github', 'idle_fingers', 'iplastic', 'katzenmilch', 'kr_theme', 'kuroir',
	'merbivore', 'merbivore_soft', 'mono_industrial', 'monokai', 'pastel_on_dark', 'solarized_dark', 'solarized_light', 'sqlserver',
	'terminal', 'textmate', 'tomorrow', 'tomorrow_night', 'tomorrow_night_blue', 'tomorrow_night_bright',
	'tomorrow_night_eighties', 'twilight', 'vibrant_ink', 'xcode'
];

if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	module.exports = {
		list: aceThemes,
		value: 'monokai'
	};
}


