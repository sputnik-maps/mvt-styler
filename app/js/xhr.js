/**
 * HTTP Request wrapper
 *
 * @param callback function(xhrResponse) {}
 * @returns {XMLHttpRequest}
 */

function createXHR(callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			callback(xhr);
		}
	};
	return xhr;
}

function xhr(url, data, callback, method) {
	var xhr = createXHR(callback);
	method = ('' + method).toUpperCase() || 'GET';
	xhr.open(method, url);

	if (method !== 'GET') {
		xhr.setRequestHeader('Content-Type', 'application/json');
	}

	xhr.send(data || null);
}

_.each(['GET','POST','PUT','DELETE'], function (method) {
	var lcMethod = method.toLowerCase();
	xhr[lcMethod] = xhr[method] = function (url, data, callback) {
		return xhr(url, data || '', callback, method);
	}
});

if (typeof module === "object" && module && typeof module.exports === "object") {
	module.exports = xhr;
}

window.xhr = xhr;
