var COMMON = require('./COMMON');

var AF = {
    cmdStatus: COMMON.cmdStatus,
    addressMode: COMMON.addressMode
};

AF.interpanCtl = {
    'CTL': 0,
    'SET': 1,
    'REG': 2,
    'CHK': 3
};

AF.networkLatencyReq = {
    'NO_LATENCY_REQS': 0,
    'FAST_BEACONS': 1,
    'SLOW_BEACONS': 2
};

AF.options = {
    'PREPROCESS': 0x04,             // Will force APS to callback to preprocess before calling NWK layer
    'LIMIT_CONCENTRATOR': 0x08,
    'ACK_REQUEST': 0x10,
    'DISCV_ROUTE': 0x20,            // This option is no longer used, and will be taken out later
    'EN_SECURITY': 0x40,
    'SKIP_ROUTING': 0x80
};

module.exports = AF;
