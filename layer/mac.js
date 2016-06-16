var COMMON = require('./common');

var MAC = {
    cmdStatus: COMMON.cmdStatus,
    capabInfoMask: COMMON.capabInfoMask,
    logicalChannels: COMMON.logicalChannels,
    channelMask: COMMON.channelMask,
    securityLevel: COMMON.securityLevel,
    addressMode: COMMON.addressMode,
    scanDuration: COMMON.scanDuration
};

MAC.assocStatus = {
    'SUCCESSFUL_ASSOCIATION': 0,
    'PAN_AT_CAPACITY': 1,
    'PAN_ACCESS_DENIED': 2
};

MAC.channelPage = {
    'PAGE_0': 0,                            // 2.4 GHz band using O-QPSK
    'PAGE_1': 1,                            // 868 and 915 MHz bands using ASK
    'PAGE_2': 2                             // 868 and 915 MHz bands using O-QPSK
};

MAC.txOpt = {
    'UNDEFINED': 0x00,
    'ACK_TRANS': 0x01,
    'GTS_TRANS': 0x02,
    'IND_TRANS': 0x04,
    'SEC_ENABLED_TRANS': 0x08,
    'NO_RE_TRANS': 0x10,
    'NO_CONFIRM_TRANS': 0x20,
    'USE_PIB_VALUE': 0x40,
    'USE_POWER_CHANNEL_VALUES': 0x80,
};

MAC.commReason = {
    'ASSOCIATE_RSP': 0,                     // Event sent in response to MAC_AssociateRsp()
    'ORPHAN_RSP': 1,                        // Event sent in response to MAC_OrphanRsp()
    'RX_SECURE': 2                          // Event sent as a result of receiving a secure frame
};

MAC.disassocReason = {
    'RESERVED': 0,
    'COOR_WISHES_DEV_LEAVE': 1,
    'DEV_WISHES_LEAVE': 2
};

MAC.keyIdMode = {
    // 'MODE_NONE': 0x00,                   // Key is is not used
    'MODE_NONE_OR_IMPLICIT': 0x00,          // Key is determined implicitly
    'MODE_1': 0x01,                         // Key is determined from the 1-byte key index
    'MODE_4': 0x02,                         // Key is determined from the 4-byte key index
    'MODE_8': 0x03                          // Key is determined from the 8-byte key index
};

MAC.beaconOrder = {
    'ORDER_NO_BEACONS': 15,
    'ORDER_4_MINUTES': 14,      // 245760 milliseconds
    'ORDER_2_MINUTES': 13,      // 122880 milliseconds
    'ORDER_1_MINUTE': 12,       //  61440 milliseconds
    'ORDER_31_SECONDS': 11,     //  30720 milliseconds
    'ORDER_15_SECONDS': 10,     //  15360 MSecs
    'ORDER_7_5_SECONDS': 9,     //   7680 MSecs
    'ORDER_4_SECONDS': 8,       //   3840 MSecs
    'ORDER_2_SECONDS': 7,       //   1920 MSecs
    'ORDER_1_SECOND': 6,        //    960 MSecs
    'ORDER_480_MSEC': 5,
    'ORDER_240_MSEC': 4,
    'ORDER_120_MSEC': 3,
    'ORDER_60_MSEC': 2,
    'ORDER_30_MSEC': 1,
    'ORDER_15_MSEC': 0
};

MAC.scanType = {
    'ENERGY_DETECT': 0,
    'ACTIVE': 1,
    'PASSIVE': 2,
    'ORPHAN': 3,
    'ENHANCED': 5
};

MAC.frontEndMode = {
    'PA_LNA_OFF': 0,
    'PA_LNA_ON': 1
};

MAC.pidAttr = {
    'ACK_WAIT_DURATION': 0x40,              // Max symbols number to wait for an ack frame
    'ASSOCIATION_PERMIT': 0x41,             // TRUE if a coord is currently allowing association
    'AUTO_REQUEST': 0x42,                   // TRUE if a device auto sends a data req if its addr is listed in beacon frame
    'BATT_LIFE_EXT': 0x43,                  // TRUE if battery life extension is enabled
    'BATT_LIFE_EXT_PERIODS': 0x44,          // The num of backoff periods during which rx is enabled following a beacon in battery life extension mode
    'BEACON_PAYLOAD': 0x45,                 // The contents of the beacon payload
    'BEACON_PAYLOAD_LENGTH': 0x46,          // The length in bytes of the beacon payload
    'BEACON_ORDER': 0x47,                   // How often the coordinator transmits a beacon
    'BEACON_TX_TIME': 0x48,                 // The time the device transmitted its last beacon frame, in backoff period units
    'BSN': 0x49,                            // The beacon sequence number
    'COORD_EXTENDED_ADDRESS': 0x4A,         // The extended address of the coordinator with which the device is associated
    'COORD_SHORT_ADDRESS': 0x4B,            // The short addr assigned to coord with which the device is associated. MAC_ADDR_USE_EXT indicates coord is using its extended address
    'DSN': 0x4C,                            // The data or MAC command frame sequence number
    'GTS_PERMIT': 0x4D,                     // TRUE if the PAN coordinator accepts GTS requests
    'MAX_CSMA_BACKOFFS': 0x4E,              // The maximum number of backoffs the CSMA-CA algorithm will attempt before declaring a channel failure
    'MIN_BE': 0x4F,                         // The minimum value of the backoff exponent in the CSMA-CA algorithm. If this value is set to 0, collision avoidance is disabled during
                                            // the first iteration of the algorithm. Also for the slotted version of the CSMA-CA algorithm with the battery life extension enabled,
                                            // the minimum value of the backoff exponent will be at least 2
    'PAN_ID': 0x50,                         // The PAN identifier.  If this value is 0xffff, the device is not associated
    'PROMISCUOUS_MODE': 0x51,               // TRUE if the MAC is in promiscuous mode
    'RX_ON_WHEN_IDLE': 0x52,                // TRUE if the MAC enables its receiver during idle periods
    'SHORT_ADDRESS': 0x53,                  // The short address that the device uses to communicate in the PAN. If the device is a PAN coordinator, this value shall be set before
                                            // calling MAC_StartReq().  Otherwise the value is allocated during association.  Value MAC_ADDR_USE_EXT indicates that the device is
                                            // associated but not using a short address
    'SUPERFRAME_ORDER': 0x54,               // This specifies the length of the active portion of the superframe
    'TRANSACTION_PERSISTENCE_TIME': 0x55,   //  The maximum time in beacon intervals that a transaction is stored by a coordinator and indicated in the beacon
    'ASSOCIATED_PAN_COORD': 0x56,           // TRUE if the device is associated to the PAN coordinator
    'MAX_BE': 0x57,                         // The maximum value of the backoff exponent in the CSMA-CA algorithm
    'MAX_FRAME_TOTAL_WAIT_TIME': 0x58,      // The maximum number of CAP symbols in a beacon-enabled PAN, or symbols in a non beacon-enabled PAN, to wait for a frame intended as a response to a data request frame
    'MAX_FRAME_RETRIES': 0x59,              // The maximum number of retries allowed after a transmission failure
    'RESPONSE_WAIT_TIME': 0x5A,             // The maximum number of symbols a device shall wait for a response command to be available following a request command in multiples of aBaseSuperframeDuration
    'SYNC_SYMBOL_OFFSET': 0x5B,             // The timestamp offset from SFD in symbols
    'TIMESTAMP_SUPPORTED': 0x5C,            // TRUE if the MAC supports RX and TX timestamps
    'SECURITY_ENABLED': 0x5D,               // TRUE if security is enabled
    /* Security PIB Get and Set Attributes */
    'KEY_TABLE': 0x71,                      // A table of KeyDescriptor, entries, each containing keys and related information required for secured communications
    'KEY_TABLE_ENTRIES': 0x72,              // The number of entries in macKeyTable
    'DEVICE_TABLE': 0x73,                   // A table of Device-Descriptor entries, each indicating a remote device with which this device securely communicates
    'DEVICE_TABLE_ENTRIES': 0x74,           // The number of entries in macDeviceTable.
    'SECURITY_LEVEL_TABLE': 0x75,           // A table of SecurityLevel-Descriptor entries, each with information about the minimum security level expected depending on incoming frame type and subtype.
    'SECURITY_LEVEL_TABLE_ENTRIES': 0x76,   // The number of entries in macSecurityLevelTable.
    'FRAME_COUNTER': 0x77,                  // The outgoing frame counter for this device
    'AUTO_REQUEST_SECURITY_LEVEL': 0x78,    // The security level used for automatic data requests.
    'AUTO_REQUEST_KEY_ID_MODE': 0x79,       // The key identifier mode used for automatic data requests
    'AUTO_REQUEST_KEY_SOURCE': 0x7A,        // The originator of the key used for automatic data requests.
    'AUTO_REQUEST_KEY_INDEX': 0x7B,         // The index of the key used for automatic data requests.
    'DEFAULT_KEY_SOURCE': 0x7C,             // The originator of the default key used for key ID mode 0x01
    'PAN_COORD_EXTENDED_ADDRESS': 0x7D,     // The 64-bit address of the PAN coordinator.
    'PAN_COORD_SHORT_ADDRESS': 0x7E,        // The 16-bit short address assigned to the PAN coordinator.
    /* Proprietary Security PIB Get and Set Attributes */
    'KEY_ID_LOOKUP_ENTRY': 0xD0,            // The key lookup table entry, part of an entry of the key table
    'KEY_DEVICE_ENTRY': 0xD1,               // The key device entry, part of an entry of the key table
    'KEY_USAGE_ENTRY': 0xD2,                // The key usage entry, part of an entry of the key table
    'KEY_ENTRY': 0xD3,                      // The MAC key entry, an entry of the key table
    'DEVICE_ENTRY': 0xD4,                   // The MAC device entry, an entry of the device table
    'SECURITY_LEVEL_ENTRY': 0xD5,           // The AMC security level entry, an entry of the security level table
    /* Proprietary PIB Get and Set Attributes */
    'PHY_TRANSMIT_POWER': 0xE0,             // The transmit power in units of -1 dBm
    'LOGICAL_CHANNEL': 0xE1,                // The logical channel
    'EXTENDED_ADDRESS': 0xE2,               // The extended address of the device
    'ALT_BE': 0xE3,                         // alternate minimum backoff exponent
    'DEVICE_BEACON_ORDER': 0xE4,            // Device beacon order
    'PHY_TRANSMIT_POWER_SIGNED': 0xE5       // Duplicate transmit power attribute in signed (2's complement) dBm unit
};

module.exports = MAC;
