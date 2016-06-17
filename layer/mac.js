var fs = require('fs'),
    path = require('path'),
    COMMON = require('./common');

var MAC = JSON.parse(fs.readFileSync(path.join(__dirname, 'defs', 'mac.json')));

MAC = Object.assign(MAC, {
    cmdStatus: COMMON.cmdStatus,
    capabInfoMask: COMMON.capabInfoMask,
    logicalChannels: COMMON.logicalChannels,
    channelMask: COMMON.channelMask,
    securityLevel: COMMON.securityLevel,
    addressMode: COMMON.addressMode,
    scanDuration: COMMON.scanDuration
});

module.exports = MAC;
