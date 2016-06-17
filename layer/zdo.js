var fs = require('fs'),
    path = require('path'),
    COMMON = require('./common');

var ZDO = JSON.parse(fs.readFileSync(path.join(__dirname, 'defs', 'zdo.json')));

ZDO = Object.assign(ZDO, {
    cmdStatus: COMMON.cmdStatus,
    capabInfoMask: COMMON.capabInfoMask,
    devStates: COMMON.devStates,
    logicalChannels: COMMON.logicalChannels,
    channelMask: COMMON.channelMask,
    scanDuration: COMMON.scanDuration
});

module.exports = ZDO;
