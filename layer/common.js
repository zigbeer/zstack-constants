var COMMON = {};

COMMON.CMD_STATUS = {
    // Redefined Generic Status Return Values for code backwards compatibility
    'SUCCESS': 0x00,
    'FAILURE': 0x01,
    'INVALID_PARAM': 0x02,
    // ZStack status values must start at 0x10, after the generic status values (defined in comdef.h)
    'MEM_ERROR': 0x10,
    'BUFFER_FULL': 0x11,
    'UNSUPPORTED_MODE': 0x12,
    'MAC_MEM_ERROR': 0x13,
    'MAC_UNSUPPORTED_NOT_SPOORT': 0x18, // The operation is not supported in the current configuration 
    'MAC_BAD_STATE': 0x19,              // The operation could not be performed in the current state 
    'MAC_NO_RESOURCES': 0x1A,           // The operation could not be completed because no memory resources were available 
    'MAC_ACK_PENDING': 0x1B,            // For internal use only 
    'MAC_NO_TIME': 0x1C,                // For internal use only 
    'MAC_TX_ABORTED': 0x1D,             // For internal use only 
    'SAPI_IN_PROGRESS': 0x20,           //- Not specified in API guide
    'SAPI_TIMEOUT': 0x21,               //- Not specified in API guide
    'SAPI_INIT': 0x22,                  //- Not specified in API guide         
    'NOT_AUTHORIZED': 0x7E,             //- Not specified in API guide
    'MALFORMED_CMD': 0x80,              //- Not specified in API guide
    'UNSUP_CLUSTER_CMD': 0x81,          //- Not specified in API guide
    // OTA Status values                         
    'OTA_ABORT': 0x95,                  //- Not specified in API guide
    'OTA_IMAGE_INVALID': 0x96,          //- Not specified in API guide
    'OTA_WAIT_FOR_DATA': 0x97,          //- Not specified in API guide
    'OTA_NO_IMAGE_AVAILABLE': 0x98,     //- Not specified in API guide
    'OTA_REQUIRE_MORE_IMAGE': 0x99,     //- Not specified in API guide
    // APS status values
    'APS_FAIL': 0xb1,
    'APS_TABLE_FULL': 0xb2,
    'APS_ILLEGAL_REQUEST': 0xb3,
    'APS_INVALID_BINDING': 0xb4,
    'APS_UNSUPPORTED_ATTRIB': 0xb5,
    'APS_NOT_SUPPORTED': 0xb6,
    'APS_NO_ACK': 0xb7,
    'APS_DUPLICATE_ENTRY': 0xb8,
    'APS_NO_BOUND_DEVICE': 0xb9,
    'APS_NOT_ALLOWED': 0xba,
    'APS_NOT_AUTHENTICATED': 0xbb,
    // Security status values
    'SEC_NO_KEY': 0xa1,
    'SEC_OLD_FRM_COUNT': 0xa2,
    'SEC_MAX_FRM_COUNT': 0xa3,
    'SEC_CCM_FAIL': 0xa4,
    // NWK status values
    'NWK_INVALID_PARAM': 0xc1,
    'NWK_INVALID_REQUEST': 0xc2,
    'NWK_NOT_PERMITTED': 0xc3,
    'NWK_STARTUP_FAILURE': 0xc4,
    'NWK_ALREADY_PRESENT': 0xc5,
    'NWK_SYNC_FAILURE': 0xc6,
    'NWK_TABLE_FULL': 0xc7,
    'NWK_UNKNOWN_DEVICE': 0xc8,
    'NWK_UNSUPPORTED_ATTRIBUTE': 0xc9,
    'NWK_NO_NETWORKS': 0xca,
    'NWK_LEAVE_UNCONFIRMED': 0xcb,
    'NWK_NO_ACK': 0xcc,                 // not in spec
    'NWK_NO_ROUTE': 0xcd,
    // MAC status values
    'MAC_BEACON_LOSS': 0xe0,
    'MAC_CHANNEL_ACCESS_FAILURE': 0xe1,
    'MAC_DENIED': 0xe2,
    'MAC_DISABLE_TRX_FAILURE': 0xe3,
    'MAC_FAILED_SECURITY_CHECK': 0xe4,
    'MAC_FRAME_TOO_LONG': 0xe5,
    'MAC_INVALID_GTS': 0xe6,
    'MAC_INVALID_HANDLE': 0xe7,
    'MAC_INVALID_PARAMETER': 0xe8,
    'MAC_NO_ACK': 0xe9,
    'MAC_NO_BEACON': 0xea,
    'MAC_NO_DATA': 0xeb,
    'MAC_NO_SHORT_ADDR':    0xec,
    'MAC_OUT_OF_CAP': 0xed,
    'MAC_PANID_CONFLICT': 0xee,
    'MAC_REALIGNMENT': 0xef,
    'MAC_TRANSACTION_EXPIRED': 0xf0,
    'MAC_TRANSACTION_OVERFLOW': 0xf1,
    'MAC_TX_ACTIVE': 0xf2,
    'MAC_UNAVAILABLE_KEY': 0xf3,
    'MAC_UNSUPPORTED_ATTRIBUTE': 0xf4,
    'MAC_UNSUPPORTED': 0xf5,
    'MAC_ON_TIME_TOO_LING': 0xF6,       // Unused
    'MAC_PAST_TIME': 0xF7,              // Unused
    'MAC_TRACKING_OFF': 0xF8,           // The start request failed because the device is not tracking the beacon of its coordinator
    'MAC_SCAN_IN_PROGRESS': 0xFC,       // The scan request failed because a scan is already in progress
    'MAC_SRC_MATCH_INVALID_INDEX': 0xff
};

COMMON.CAPAB_INFO_MASK = {
    // 'DEVICETYPE_RFD': 0x00,
    'ALTPANCOORD': 0x01,
    'DEVICETYPE_FFD': 0x02,
    'POWER_AC': 0x04,
    'RCVR_ON_IDLE': 0x08,
    'SECURITY_CAPABLE': 0x40,
    'ALLOC_ADDR': 0x80,
};

COMMON.DEV_STATES = {
    'HOLD': 0x00,               // Initialized - not started automatically
    'INIT': 0x01,               // Initialized - not connected to anything
    'NWK_DISC': 0x02,           // Discovering PAN's to join
    'NWK_JOINING': 0x03,        // Joining a PAN
    'NWK_REJOIN': 0x04,         // ReJoining a PAN, only for end devices
    'END_DEVICE_UNAUTH': 0x05,  // Joined but not yet authenticated by trust center
    'END_DEVICE': 0x06,         // Started as device after authentication
    'ROUTER': 0x07,             // Device joined, authenticated and is a router
    'COORD_STARTING': 0x08,     // Started as Zigbee Coordinator
    'ZB_COORD': 0x09,           // Started as Zigbee Coordinator
    'NWK_ORPHAN': 0x0A,         // Device has lost information about its parent..
    // Below are ZdoStatus that are also used by ZDO_STATE_CHANGE_IND
    'INVALID_REQTYPE': 0x80,    // The supplied request type was invalid
    'DEVICE_NOT_FOUND': 0x81,   // Reserved
    'INVALID_EP': 0x82,         // Invalid endpoint value
    'NOT_ACTIVE': 0x83,         // Endpoint not described by a simple desc.
    'NOT_SUPPORTED': 0x84,      // Optional feature not supported
    'TIMEOUT': 0x85,            // Operation has timed out
    'NO_MATCH': 0x86,           // No match for end device bind
    'NO_ENTRY': 0x88,           // Unbind request failed, no entry
    'NO_DESCRIPTOR': 0x89,      // Child descriptor not available
    'INSUFFICIENT_SPACE': 0x8a, // Insufficient space to support operation
    'NOT_PERMITTED': 0x8b,      // Not in proper state to support operation
    'TABLE_FULL': 0x8c,         // No table space to support operation
    'NOT_AUTHORIZED': 0x8d,     // Permissions indicate request not authorized
    'BINDING_TABLE_FULL': 0x8e  // No binding table space to support operation
};

COMMON.LOGICAL_CHANNELS = {
    'NONE': 0,
    'CH11': 11,
    'CH12': 12,
    'CH13': 13,
    'CH14': 14,
    'CH15': 15,
    'CH16': 16,
    'CH17': 17,
    'CH18': 18,
    'CH19': 19,
    'CH20': 20,
    'CH21': 21,
    'CH22': 22,
    'CH23': 23,
    'CH24': 24,
    'CH25': 25,
    'CH26': 26
};

 COMMON.CHANNEL_MASK = {
    //'NONE': 0x00000000,
    'CH11': 0x00000800,
    'CH12': 0x00001000,
    'CH13': 0x00002000,
    'CH14': 0x00004000,
    'CH15': 0x00008000,
    'CH16': 0x00010000,
    'CH17': 0x00020000,
    'CH18': 0x00040000,
    'CH19': 0x00080000,
    'CH20': 0x00100000,
    'CH21': 0x00200000,
    'CH22': 0x00400000,
    'CH23': 0x00800000,
    'CH24': 0x01000000,
    'CH25': 0x02000000,
    'CH26': 0x04000000,
    'CH_ALL': 0x07FFF800
};

COMMON.SECURITY_LEVEL = {
    'NONE': 0x00,           // No security is used
    'MIC_32': 0x01,         // MIC-32 authentication is used
    'MIC_64': 0x02,         // MIC-64 authentication is used
    'MIC_128': 0x03,        // MIC-128 authentication is used
    'ENC': 0x04,            // AES encryption is used */
    'ENC_MIC_32': 0x05,     // AES encryption and MIC-32 authentication are used
    'ENC_MIC_64': 0x06,     // AES encryption and MIC-64 authentication are used
    'ENC_MIC_128': 0x07     // AES encryption and MIC-128 authentication are used
};

COMMON.ADDRESS_MODE = {
    'ADDR_NOT_PRESENT': 0,
    'ADDR_GROUP': 1,
    'ADDR_16BIT': 2,
    'ADDR_64BIT': 3,
    'ADDR_BROADCAST': 15
};

COMMON.SCAN_DURATION = {
    'CH_CHANGE_REQ': 0xFE,
    'CH_MASK_CHANGE_REQ': 0xFF,
    'T_NO_BEACONS': 15,
    'T_4_MINUTES': 14,      // 245760 milliseconds
    'T_2_MINUTES': 13,      // 122880 milliseconds
    'T_1_MINUTE': 12,       //  61440 milliseconds
    'T_31_SECONDS': 11,     //  30720 milliseconds
    'T_15_SECONDS': 10,     //  15360 MSecs
    'T_7_5_SECONDS': 9,     //   7680 MSecs
    'T_4_SECONDS': 8,       //   3840 MSecs
    'T_2_SECONDS': 7,       //   1920 MSecs
    'T_1_SECOND': 6,        //    960 MSecs
    'T_480_MSEC': 5,
    'T_240_MSEC': 4,
    'T_120_MSEC': 3,
    'T_60_MSEC': 2,
    'T_30_MSEC': 1,
    'T_15_MSEC': 0
};

COMMON.NV_ITEM_IDS = {
    // OSAL NV item IDs
    'EXTADDR': 0x0001,
    'BOOTCOUNTER': 0x0002,
    'STARTUP_OPTION': 0x0003,
    'START_DELAY': 0x0004,
    // NWK Layer NV item IDs
    'NIB': 0x0021,
    'DEVICE_LIST': 0x0022,
    'ADDRMGR': 0x0023,
    'POLL_RATE': 0x0024,
    'QUEUED_POLL_RATE': 0x0025,
    'RESPONSE_POLL_RATE': 0x0026,
    'REJOIN_POLL_RATE': 0x0027,
    'DATA_RETRIES': 0x0028,
    'POLL_FAILURE_RETRIES': 0x0029,
    'STACK_PROFILE': 0x002A,
    'INDIRECT_MSG_TIMEOUT': 0x002B,
    'ROUTE_EXPIRY_TIME': 0x002C,
    'EXTENDED_PAN_ID': 0x002D,
    'BCAST_RETRIES': 0x002E,
    'PASSIVE_ACK_TIMEOUT': 0x002F,
    'BCAST_DELIVERY_TIME': 0x0030,
    'NWK_MODE': 0x0031,
    'CONCENTRATOR_ENABLE': 0x0032,
    'CONCENTRATOR_DISCOVERY': 0x0033,
    'CONCENTRATOR_RADIUS': 0x0034,
    'CONCENTRATOR_RC': 0x0036,
    'NWK_MGR_MODE': 0x0037,
    'SRC_RTG_EXPIRY_TIME': 0x0038,
    'ROUTE_DISCOVERY_TIME': 0x0039,
    'NWK_ACTIVE_KEY_INFO': 0x003A,
    'NWK_ALTERN_KEY_INFO': 0x003B,
    'ROUTER_OFF_ASSOC_CLEANUP': 0x003C,
    'NWK_LEAVE_REQ_ALLOWED': 0x003D,
    'NWK_CHILD_AGE_ENABLE': 0x003E,
    'DEVICE_LIST_KA_TIMEOUT': 0x003F,
    // APS Layer NV item IDs
    'BINDING_TABLE': 0x0041,
    'GROUP_TABLE': 0x0042,
    'APS_FRAME_RETRIES': 0x0043,
    'APS_ACK_WAIT_DURATION': 0x0044,
    'APS_ACK_WAIT_MULTIPLIER': 0x0045,
    'BINDING_TIME': 0x0046,
    'APS_USE_EXT_PANID': 0x0047,
    'APS_USE_INSECURE_JOIN': 0x0048,
    'COMMISSIONED_NWK_ADDR': 0x0049,
    'APS_NONMEMBER_RADIUS': 0x004B,     // Multicast non_member radius
    'APS_LINK_KEY_TABLE': 0x004C,
    'APS_DUPREJ_TIMEOUT_INC': 0x004D,
    'APS_DUPREJ_TIMEOUT_COUNT': 0x004E,
    'APS_DUPREJ_TABLE_SIZE': 0x004F,
    // System statistics and metrics NV ID
    'DIAGNOSTIC_STATS': 0x0050,
    // Security NV Item IDs
    'SECURITY_LEVEL': 0x0061,
    'PRECFGKEY': 0x0062,
    'PRECFGKEYS_ENABLE': 0x0063,
    'SECURITY_MODE': 0x0064,
    'SECURE_PERMIT_JOIN': 0x0065,
    'APS_LINK_KEY_TYPE': 0x0066,
    'APS_ALLOW_R19_SECURITY': 0x0067,

    'IMPLICIT_CERTIFICATE': 0x0069,
    'DEVICE_PRIVATE_KEY': 0x006A,
    'CA_PUBLIC_KEY': 0x006B,
    'KE_MAX_DEVICES': 0x006C,
    'USE_DEFAULT_TCLK': 0x006D,
    // 'TRUSTCENTER_ADDR': 0x006E,      // deprecated
    'RNG_COUNTER': 0x006F,
    'RANDOM_SEED': 0x0070,
    'TRUSTCENTER_ADDR': 0x0071,
    // ZDO NV Item IDs
    'USERDESC': 0x0081,
    'NWKKEY': 0x0082,
    'PANID': 0x0083,
    'CHANLIST': 0x0084,
    'LEAVE_CTRL': 0x0085,
    'SCAN_DURATION': 0x0086,
    'LOGICAL_TYPE': 0x0087,
    'NWKMGR_MIN_TX': 0x0088,
    'NWKMGR_ADDR': 0x0089,
    'ZDO_DIRECT_CB': 0x008F,
    // ZCL NV item IDs
    'SCENE_TABLE': 0x0091,
    'MIN_FREE_NWK_ADDR': 0x0092,
    'MAX_FREE_NWK_ADDR': 0x0093,
    'MIN_FREE_GRP_ID': 0x0094,
    'MAX_FREE_GRP_ID': 0x0095,
    'MIN_GRP_IDS': 0x0096,
    'MAX_GRP_IDS': 0x0097,
    'OTA_BLOCK_REQ_DELAY': 0x0098,
    // Non-standard NV item IDs
    'SAPI_ENDPOINT': 0x00A1,
    // NV Items Reserved for Commissioning Cluster Startup Attribute Set (SAS):
    // 0x00B1 - 0x00BF: Parameters related to APS and NWK layers
    // 0x00C1 - 0x00CF: Parameters related to Security
    // 0x00D1 - 0x00DF: Current key parameters
    'SAS_SHORT_ADDR': 0x00B1,
    'SAS_EXT_PANID': 0x00B2,
    'SAS_PANID': 0x00B3,
    'SAS_CHANNEL_MASK': 0x00B4,
    'SAS_PROTOCOL_VER': 0x00B5,
    'SAS_STACK_PROFILE': 0x00B6,
    'SAS_STARTUP_CTRL': 0x00B7,
    'SAS_TC_ADDR': 0x00C1,
    'SAS_TC_MASTER_KEY': 0x00C2,
    'SAS_NWK_KEY': 0x00C3,
    'SAS_USE_INSEC_JOIN': 0x00C4,
    'SAS_PRECFG_LINK_KEY': 0x00C5,
    'SAS_NWK_KEY_SEQ_NUM': 0x00C6,
    'SAS_NWK_KEY_TYPE': 0x00C7,
    'SAS_NWK_MGR_ADDR': 0x00C8,
    'SAS_CURR_TC_MASTER_KEY': 0x00D1,
    'SAS_CURR_NWK_KEY': 0x00D2,
    'SAS_CURR_PRECFG_LINK_KEY': 0x00D3,
    // NV Items Reserved for Trust Center Link Key Table entries
    // 0x0101 - 0x01FF
    'TCLK_TABLE_START': 0x0101,
    'TCLK_TABLE_END': 0x01FF,
    // NV Items Reserved for APS Link Key Table entries
    // 0x0201 - 0x02FF
    'APS_LINK_KEY_DATA_START': 0x0201,  // APS key data
    'APS_LINK_KEY_DATA_END': 0x02FF,

    'DUPLICATE_BINDING_TABLE': 0x0300,
    'DUPLICATE_DEVICE_LIST': 0x0301,
    'DUPLICATE_DEVICE_LIST_KA_TIMEOUT': 0x0302,
    // NV Items Reserved for Master Key Table entries
    // 0x0301 - 0x03FF
    // 'MASTER_KEY_DATA_START': 0x0301, // Master key data, deprecated
    // 'MASTER_KEY_DATA_END': 0x03FF    // deprecated
    // NV Items Reserved for applications (user applications)
    // 0x0401 ?0x0FFF
    'ZNP_HAS_CONFIGURED': 0x0F00
};

module.exports = COMMON;
