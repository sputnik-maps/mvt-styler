#!/usr/bin/env node
/**
 * @author Max L Dolgov <plugn@github.com>
 * @description Utility open SVG files
 * scales them to given ICON_HEIGHT with respect to ratio then put to destination directory
*/

// Load in dependencies
var util = require('util');
var fs = require('fs');
var glob = require('glob');
var cheerio = require('cheerio');

// TARGET ICON HEIGHT
var ICON_HEIGHT = 34;

// Directory with source SVGs
var sourcesPath = 'svg-ico_src/';

// Destination directory
var destPath = 'svg-metros/';

// `sing_m6.svg` excluded 
var svgSources = [
	'SU_3.svg', 'S.svg', 'U1.svg', 'U.svg', 'metro_spb_dark.svg', 'metro_spb_white.svg', 'metro_ek.svg', 'NNMetro_white3.svg', 'metro_samara.svg', 'Minsk_metro_white.svg', 'metro_khar1.svg',
	'mos_logo6.svg', 'mos_logo6_kontur.svg', 'metro_roma.svg', 'metro_prag.svg', 'metro_lisbon.svg', 'metro_wien.svg', 'metro_sidney.svg', 'metro_vash.svg', 'underground_L.svg',
	'overground_L.svg', 'NR.svg', 'DLR_roundel2.svg', 'LU_LO.svg', 'LU_NR1.svg', 'LO_NR.svg', 'DLR_NR.svg', 'DLR_LU.svg', 'metro_novosib.svg', 'metro_kiev.svg', 'metro_paris.svg',
	'RER.svg', 'metro_baku.svg', 'metro_tbilisi.svg', 'metro_erevan.svg', 'Kazan-metro-small4.svg', 'Metro_Catania_small_2.svg', 'MTR.svg', 'Warsaw5.svg', 'amster.svg',
	'M_Madrid.svg', 'BKV_small.svg', 'BKV2.svg', 'Helsinki_m.svg', 'Stockholm_metro.svg', 'mosmet.svg', 'volgo3.svg'
];

function cleanup(s) {
	// s.replace(/^[^<]+/, '')
	return s.replace(/<!--.*?-->/g,'');
}

function replaceAttr(s) {
	return s.replace(/(id|(?:xml|xmlns|sodipodi|inkscape):[\w-]+)\s?=\s?["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/mg, '');
}

function transform(src) {
	var svgSrc = cleanup(replaceAttr(fs.readFileSync(src).toString()));
	// console.log('\n--------------- [src] -----------------\n', svgSrc);
	var $ = cheerio.load(svgSrc, {
		// normalizeWhitespace: true,
		xmlMode: true
	});
	$('metadata').remove();
	$('defs').remove();
	$('sodipodi\\:namedview').remove();
	// $('svg').removeAttr('xmlns\\:sodipodi');
	var w = + $('svg').attr('width'),
		h = + $('svg').attr('height'), ratio;
	if (w && h) {
		ratio = ICON_HEIGHT / h;
		console.log('w', w, 'h',h, 'ratio', ratio);
		$('svg').attr('width', w * ratio);
		$('svg').attr('height', h * ratio);
		var viewBox = $('svg').attr('viewBox') || '';
		if (!viewBox)
			$('svg').attr('viewBox', '0 0 '+ (w * ratio) + ' ' + (h * ratio));
		else {
			var viewBoxList = viewBox.replace(/^\s+|\s+$/g, '').split(/\s+/);
			if (viewBoxList.length === 4) {
				var scaledBox = viewBoxList.map(function(v) { return +v * ratio; }).join(' ');
				$('svg').attr('viewBox', scaledBox);
			}
		}
	}

	var content = $('svg').html();
	$('svg').html('<g transform="scale('+ratio+')">'+content+'</g>');



	console.log('\n--------------- [doc] -----------------\n');
	var ret = $.html();
	console.log(ret);
	return ret;
}


function saveFile(path, code) {
	fs.writeFile(path, code, function (err) {
		if (err) throw err;
		console.log('saved: ', path);
	});
}

function run (sources) {
	sources.forEach(function (fileName) {
		var code = transform(sourcesPath + fileName);
		if (code) {
			saveFile(destPath+fileName, code);
		}
	});
}

// run(['SU_3.svg']);
// run(svgSources);
