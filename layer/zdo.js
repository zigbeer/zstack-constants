var COMMON = require('./COMMON');

var ZDO = {
    CMD_STATUS: COMMON.CMD_STATUS,
    CAPAB_INFO_MASK: COMMON.CAPAB_INFO_MASK,
    DEV_STATES: COMMON.DEV_STATES,
    LOGICAL_CHANNELS: COMMON.LOGICAL_CHANNELS,
    CHANNEL_MASK: COMMON.CHANNEL_MASK,
    SCAN_DURATION: COMMON.SCAN_DURATION
};

ZDO.STATUS = {
    'SUCCESS': 0x00,                // Operation completed successfully
    'INVALID_REQTYPE': 0x80,        // The supplied request type was invalid
    'DEVICE_NOT_FOUND': 0x81,       // Reserved
    'INVALID_EP': 0x82,             // Invalid endpoint value
    'NOT_ACTIVE': 0x83,             // Endpoint not described by a simple desc.
    'NOT_SUPPORTED': 0x84,          // Optional feature not supported
    'TIMEOUT': 0x85,                // Operation has timed out
    'NO_MATCH': 0x86,               // No match for end device bind
    'NO_ENTRY': 0x88,               // Unbind request failed, no entry
    'NO_DESCRIPTOR': 0x89,          // Child descriptor not available
    'INSUFFICIENT_SPACE': 0x8a,     // Insufficient space to support operation
    'NOT_PERMITTED': 0x8b,          // Not in proper state to support operation
    'TABLE_FULL': 0x8c,             // No table space to support operation
    'NOT_AUTHORIZED': 0x8d,         // Permissions indicate request not authorized
    'BINDING_TABLE_FULL': 0x8e      // No binding table space to support operation
};

ZDO.INIT_DEV = {
    'RESTORED_NETWORK_STATE': 0x00,
    'NEW_NETWORK_STATE': 0x01,
    'LEAVE_NOT_STARTED': 0x02
};

ZDO.SERVER_CAPABILITY = {
    'NOT_SUPPORTED': 0x00,
    'PRIM_TRUST_CENTER': 0x01,
    'BKUP_TRUST_CENTER': 0x02,
    'PRIM_BIND_TABLE': 0x04,
    'BKUP_BIND_TABLE': 0x08,
    'PRIM_DISC_TABLE': 0x10,
    'BKUP_DISC_TABLE': 0x20,
    'NETWORK_MANAGER': 0x40
};

ZDO.APP_DEV_VER = {
    'VER_100': 0x00,
    'RESERVE01': 0x01,
    'RESERVE02': 0x02,
    'RESERVE03': 0x03,
    'RESERVE04': 0x04,
    'RESERVE05': 0x05,
    'RESERVE06': 0x06,
    'RESERVE07': 0x07,
    'RESERVE08': 0x08,
    'RESERVE09': 0x09,
    'RESERVE10': 0x0A,
    'RESERVE11': 0x0B,
    'RESERVE12': 0x0C,
    'RESERVE13': 0x0D,
    'RESERVE14': 0x0E,
    'RESERVE15': 0x0F
};

ZDO.STACK_PROFILE_ID = {
    'NETWORK_SPECIFIC':0,
    'HOME_CONTROLS': 1,
    'ZIGBEEPRO_PROFILE': 2,
    'GENERIC_STAR': 3,
    'GENERIC_TREE': 4
};

ZDO.DEVICE_LOGICAL_TYPE = {
    'COORDINATOR': 0x00,
    'ROUTER': 0x01,
    'ENDDEVICE': 0x02,
    'COMPLEX_DESC_AVAIL': 0x04,
    'USER_DESC_AVAIL': 0x08,
    'RESERVED1': 0x10,
    'RESERVED2': 0x20,
    'RESERVED3': 0x40,
    'RESERVED4': 0x80
};

ZDO.ADDR_REQ_TYPE = {
    'SINGLE': 0,
    'EXTENDED': 1
};

ZDO.LEAVE_AND_REMOVE_CHILD = { 
    'NONE': 0x00,
    'LEAVE_REMOVE_CHILDREN': 0x01
};

ZDO.LEAVE_IND_REQUEST = {
    'INDICATION': 0x00,
    'REQUEST': 0x01
};

ZDO.LEAVE_IND_REMOVE = {
    'NONE': 0x00,
    'REMOVE_CHILDREN': 0x01
};

ZDO.LEAVE_IND_REJOIN = {
    'NONE': 0x00,
    'REJOIN': 0x01
};

ZDO.DESC_CAPABILITY = {
    'EXT_LIST_NOT_SUPPORTED': 0x00,
    'EXT_ACTIVE_EP_LIST_AVAIL': 0x01,
    'EXT_SIMPLE_DESC_LIST_AVAIL': 0x02,
    'RESERVED1': 0x04,
    'RESERVED2': 0x08,
    'RESERVED3': 0x10,
    'RESERVED4': 0x20,
    'RESERVED5': 0x40,
    'RESERVED6': 0x80
};

module.exports = ZDO;
