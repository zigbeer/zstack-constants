var fs = require('fs'),
    path = require('path'),
    COMMON = require('./common');

var AF = JSON.parse(fs.readFileSync(path.join(__dirname, 'defs', 'af.json')));

AF = Object.assign(AF, {
    cmdStatus: COMMON.cmdStatus,
    addressMode: COMMON.addressMode
});

module.exports = AF;
