#!/usr/bin/env node

// Load in dependencies
var util = require('util');
var fs = require('fs');
var glob = require('glob');
var Spritesmith = require('spritesmith');

function fixDesc(result, fName) {
	// Object mapping filename to {x, y, width, height} of image
	var res = {};
	for (var k in result.coordinates) {
		var newK = k.replace('png/', '').replace(/\.[a-zA-Z]{3}$/, '');
		if (newK === fName) {
			var svgSpElem = result.coordinates[k];
			var svgSpriteInfo = fs.readFileSync(fName + '.json');
			var svgSp = JSON.parse(svgSpriteInfo);
			for (var svgK in svgSp) {
				var elem = svgSp[svgK];
				elem.x += svgSpElem.x;
				elem.y += svgSpElem.y;
				res[svgK] = elem;
			}
		} else {
			var elem = result.coordinates[k];
			elem.pixelRatio = 1;
		res[newK] = elem;
		}
	}
	return res;
}

function run(pngFiles, svgSpriteJson, fName) {
	// console.log('pngFiles', util.inspect(pngFiles));
	Spritesmith.run({src: pngFiles}, function handleResult (err, result) {
		if (err) {
			throw err;
		}
		// console.log('result', util.inspect(result));
		
		fs.writeFileSync(fName + '.png', result.image); // Buffer representation of image
		// Object mapping filename to {x, y, width, height} of image
		var res = fixDesc(result, svgSpriteJson);
		fs.writeFileSync(fName + '.json', JSON.stringify(res));
		console.log(result.properties); // Object with metadata about spritesheet {width, height}
	});
}

// Generate our spritesheet
var pngFiles = glob.sync('png/*');
pngFiles.push('svg-sprite.png');
run(pngFiles, 'svg-sprite', 'sprite');

pngFiles2 = glob.sync('png/*');
pngFiles2.push('svg-sprite@2x.png');
run(pngFiles2, 'svg-sprite@2x', 'sprite@2x');
