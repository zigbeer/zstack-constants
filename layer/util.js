var fs = require('fs'),
    path = require('path'),
    COMMON = require('./common');

var UTIL = JSON.parse(fs.readFileSync(path.join(__dirname, 'defs', 'util.json')));

UTIL = Object.assign(UTIL, {
    cmdStatus: COMMON.cmdStatus,
    devStates: COMMON.devStates,
    channelMask: COMMON.channelMask,
    securityLevel: COMMON.securityLevel,
    addressMode: COMMON.addressMode
});

module.exports = UTIL;
