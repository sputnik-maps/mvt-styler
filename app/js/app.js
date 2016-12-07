/**
 *
 * app.js
 * application entry point
 */
var editor = require('./editor.js');
window.codeEditor = editor;
require('./map.js');

editor.openIO();
