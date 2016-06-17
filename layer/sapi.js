var fs = require('fs'),
    path = require('path'),
    COMMON = require('./common');

var SAPI = JSON.parse(fs.readFileSync(path.join(__dirname, 'defs', 'sapi.json')));

SAPI = Object.assign(SAPI, {
    cmdStatus: COMMON.cmdStatus,
    nvItemIds: COMMON.nvItemIds
});

module.exports = SAPI;
