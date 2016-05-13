var COMMON = require('./COMMON');

var SYS = {
    CMD_STATUS: COMMON.CMD_STATUS,
    NV_ITEM_IDS: COMMON.NV_ITEM_IDS,
};

SYS.RESET_TYPE = {
    'HARD': 0x00,
    'SOFT': 0x01
};

SYS.CAPABILITIES = {
    'SYS': 0x0001,
    'MAC': 0x0002,
    'NWK': 0x0004,
    'AF': 0x0008,
    'ZDO': 0x0010,
    'SAPI': 0x0020,
    'UTIL': 0x0040,
    'DEBUG': 0x0080,
    'APP': 0x0100,
    'ZOAD': 0x1000
};

SYS.OSAL_TIMER_EVENT = {
    'EVENT_0': 0x00,
    'EVENT_1': 0x01,
    'EVENT_2': 0x02,
    'EVENT_3': 0x03
};

SYS.ADC_CHANNELS = {
    'AIN0': 0x00,
    'AIN1': 0x01,
    'AIN2': 0x02,
    'AIN3': 0x03,
    'AIN4': 0x04,
    'AIN5': 0x05,
    'AIN6': 0x06,
    'AIN7': 0x07,
    'TEMP_SENSOR': 0x0E,
    'VOLT_READ': 0x0F
};

SYS.ADC_RESOLUTION = {
    'BIT_8': 0x00,
    'BIT_10': 0x01,
    'BIT_12': 0x02,
    'BIT_14': 0x03
};

SYS.GPIO_OPERATION = {
    'SET_DIRECTION': 0x00,
    'SET_INPUT_MODE': 0x01,
    'SET': 0x02,
    'CLEAR': 0x03,
    'TOGGLE': 0x04,
    'READ': 0x05
};

SYS.SYS_STK_TUNE = {
    'TX_PWR': 0x00,        // tune power : SysStkTune = 0x00, Value = 0xFD – 0x16
    'RX_ON_IDLE': 0x01     // on/off RX  : SysStkTune = 0x01, Value = RxOnWhenIdle
};

SYS.RESET_REASON  = {
    'POWER_UP': 0,
    'EXTERNAL': 1,
    'WATCH_DOG': 2
};

SYS.NV_ITEM_INIT_STATUS = {
    'ALREADY_EXISTS': 0x00,
    'SUCCESS': 0x09,
    'FAILED': 0x0A
};

SYS.NV_ITEM_DELETE_STATUS = {
    'SUCCESS': 0x00,
    'NOT_EXISTS': 0x09,
    'FAILED': 0x0A,
    'BAD_LENGTH': 0x0C
};

module.exports = SYS;
