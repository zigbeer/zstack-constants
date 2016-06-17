var fs = require('fs'),
    path = require('path'),
    COMMON = require('./common');

var SYS = JSON.parse(fs.readFileSync(path.join(__dirname, 'defs', 'sys.json')));

SYS = Object.assign(SYS, {
    cmdStatus: COMMON.cmdStatus,
    nvItemIds: COMMON.nvItemIds,
});

module.exports = SYS;
