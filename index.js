var path = require('path');
var silentlyRun = require('silently-run');

if(process.argv[2]){
	silentlyRun.stop();
	return;
}

var appPath = path.resolve(__dirname, 'lib/server.js')
silentlyRun.start(appPath);