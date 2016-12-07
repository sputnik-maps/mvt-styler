/**
 * debug tools
 */
function dumpVFS (stream) {
	return stream.pipe(through(function(file, encoding, done) {
		console.log(' * ', file.path); //, file.inspect(), file.contents.toString());
		done(null, file);
	}));
}
