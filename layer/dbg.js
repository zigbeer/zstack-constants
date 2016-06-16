var DBG = {};

DBG.debugThreshold = {
    'CRITICAL': 0x01,
    'ERROR': 0x02,
    'INFORMATION': 0x03,
    'TRACE': 0x04
};

DBG.componentId = {
    'OSAL': 0,
    'MTEL': 1,
    'MTSPCI': 2,
    'NWK': 3,
    'NWKIF': 4,
    'MACCB': 5,
    'MAC': 6,
    'APP': 7,
    'TEST': 8,
    'RTG': 9,
    'DATA': 11
};

module.exports = DBG;
