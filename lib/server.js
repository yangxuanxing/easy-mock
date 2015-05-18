var path = require('path');
var easyServer = require('easy-node-server');

var config = require('../config.json') || {};
var entryPath = path.dirname(__dirname);
config.assetPath = config.assetPath?path.resolve(entryPath, config.assetPath):entryPath;
easyServer.start(config);