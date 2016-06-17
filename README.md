# zstack-constants
TI Z-Stack Constants of AF, SYS, ZDO, ... layers.  

[![Travis branch](https://img.shields.io/travis/zigbeer/zstack-constants/master.svg?maxAge=2592000)](https://travis-ci.org/zigbeer/zstack-constants)
[![npm](https://img.shields.io/npm/v/zstack-constants.svg?maxAge=2592000)](https://www.npmjs.com/package/zstack-constants)
[![npm](https://img.shields.io/npm/l/zstack-constants.svg?maxAge=2592000)](https://www.npmjs.com/package/zstack-constants)


<br />

## Table of Contents

1. [Overiew](#Overiew)  
2. [Installation](#Installation)  
3. [Usage](#Usage)  
4. [Status Getter](#Status)  
5. [Table of Constants](#Table)  

<br />

<a name="Overiew"></a>  
## 1. Overview  

**zstack-constants** exports all constants used in TI's zigbee z-stack.  
  
<br />

<a name="Installation"></a>
## 2. Installation

> $ npm install zstack-constants --save
  
<br />

<a name="Usage"></a>
## 3. Usage

To use a constant, just access it within the correct layer, namespace, and the property name. Here is a quick example to access the constant ACK_REQUEST of AF options:  

```js
var ZCS = require('zstack-constants');

// Access properties under root space  
console.log(ZCS.BEACON_MAX_DEPTH);          // 15
console.log(ZCS.DEF_NWK_RADIUS);            // 30
console.log(ZCS.AF_DEFAULT_RADIUS);         // 30

// Access constants in config and cmdStatus namespaces  
console.log(ZCS.config.NWK_MAX_DEVICES);    // 21
console.log(ZCS.cmdStatus.BUFFER_FULL);     // 17

// Access constants in options and interpanCtl namespaces under AF layer
console.log(ZCS.AF.options.ACK_REQUEST);    // 16
console.log(ZCS.AF.interpanCtl.SET);        // 1

// Access constants in adcResolution and gpioOperation namespaces under SYS layer
console.log(ZCS.SYS.adcResolution.BIT_10);  // 1
console.log(ZCS.SYS.gpioOperation.TOGGLE);  // 4

// Access constants in stackProfileId and deviceLogicalType namespaces under ZDO layer
console.log(ZCS.ZDO.stackProfileId.ZIGBEEPRO_PROFILE);  // 2
console.log(ZCS.ZDO.deviceLogicalType.ROUTER);          // 1
```
  
<br />

<a name="Status"></a>
## 4. Status Getter

**zstack-constants** provides you with an API `getStatus()` to get the defintion of a status code. This may help in showing error message when a bad status code coming back.  

*************************************************

### ZCS.getStatus(code)  
Get the definition of a status code. This method accepts an input code in string or in number, and it will return an object like `{ key: 'BUFFER_FULL', value: 17 }` to tell the status definition. This method will return `undefined` if the given status code is not found.  

**Arguments:**  

1. `code` (_Number_ | _String_): Status code in string or in number.  

**Returns:**  

 * (_Object_): Status definition  

**Examples:** 

```js
var ZCS = require('zstack-constants');

ZCS.getStatus(16);              // { key: 'MEM_ERROR', value: 16 }
ZCS.getStatus(183);             // { key: 'APS_NO_ACK', value: 183 }
ZCS.getStatus('APS_NO_ACK');    // { key: 'APS_NO_ACK', value: 183 }

```
*************************************************
  
<br />
  
<a name="Table"></a>
## 5. Table of Constants

* The following table lists the layers and namespaces that **zstack-constants** exports.  

| Layer     | Namespace                                                                                                                    |
|-----------|------------------------------------------------------------------------------------------------------------------------------|
| -         | Root space, acces constants with `ZCS.fooNamespace` or `ZCS.barProperty`. The exported properties include `BEACON_MAX_DEPTH`, `DEF_NWK_RADIUS`, and `AF_DEFAULT_RADIUS`. The exported namespaces include `cmdStatus` and `config`.      |
| AF        | The exported namespaces of AF layer include `interpanCtl`, `networkLatencyReq`, and `options`.                               |
| MAC       | The exported namespaces of MAC layer include `cmdStatus`, `capabInfoMask`, `logicalChannels`, `channelMask`, `securityLevel`, `addressMode`, `scanDuration`, `assocStatus`, `channelPage`, `txOpt`, `commReason`, `disassocReason`, `keyIdMode`, `beaconOrder`, `scanType`, `frontEndMode`, and `pidAttr`.     |
| SYS       | The exported namespaces of SYS layer include `cmdStatus`, `nvItemIds`, `resetType`, `capabilities`, `osalTimerEvent`, `adcChannels`, `adcResolution`, `gpioOperation`, `sysStkTune`, `resetReason`, `nvItemInitStatus`, and `nvItemDeleteStatus`.                                      |
| UTIL      | The exported namespaces of UTIL layer include `cmdStatus`, `devStates`, `channelMask`, `securityLevel`, `addressMode`, `getNvStatus`, `subsystemId`, `deviceType`, `keyEvent`, `keyValue`, `ledMode`, `ledNum`, `subsAction`, `ackPendingOption`, and `nodeRelation`.      |
| ZDO       | The exported namespaces of ZDO layer include `cmdStatus`, `capabInfoMask`, `devStates`, `logicalChannels`, `channelMask`, `scanDuration`, `status`, `initDev`, `serverCapability`, `appDevVer`, `stackProfileId`, `deviceLogicalType`, `addrReqType`, `leaveAndRemoveChild`, `leaveIndRequest`, `leaveIndRemove`, `leaveIndRejoin`, and `descCapability`.    |
| SAPI      | The exported namespaces of SAPI layer include `cmdStatus`, `nvItemIds`, `zbDeviceInfo`, `bindAction`, `searchType`, `txOptAck`, and `nvItemIdsUint8`.                    |
| DBG       | The exported namespaces of DBG layer include `debugThreshold` and `componentId`.                            |


<br />

* Common Properties  (For more common properties, see [common.json](https://github.com/zigbeer/zstack-constants/blob/master/layer/defs/common.json))
    * config
    ```js
        {
            'ZDO_MGMT_MAX_NWKDISC_ITEMS': 5,
            'ZDO_MGMT_MAX_RTG_ITEMS': 10,
            'ZDO_MGMT_MAX_BIND_ITEMS': 3,
            'ZDO_MGMT_MAX_LQI_ITEMS': 2,
            'ZDO_MGMT_MAX_LQI_FRAG_NOSECURE_ITEMS': 3,
            'NWK_MAX_DEVICE_LIST': 20,
            'NWK_MAX_DEVICES': 21
        }
    ```
    * cmdStatus
    ```js
        {
            "SUCCESS": 0,
            "FAILURE": 1,
            "INVALID_PARAM": 2,
            "MEM_ERROR": 16,
            "BUFFER_FULL": 17,
            "UNSUPPORTED_MODE": 18,
            "MAC_MEM_ERROR": 19,
            "MAC_UNSUPPORTED_NOT_SPOORT": 24,
            "MAC_BAD_STATE": 25,
            "MAC_NO_RESOURCES": 26,
            "MAC_ACK_PENDING": 27,
            "MAC_NO_TIME": 28,
            "MAC_TX_ABORTED": 29,
            "SAPI_IN_PROGRESS": 32,
            "SAPI_TIMEOUT": 33,
            "SAPI_INIT": 34,
            "NOT_AUTHORIZED": 126,
            "MALFORMED_CMD": 128,
            // please see common.json for more information
        }
    ```
  
<br />

* AF Layer Namespace and Properties: [af.json](https://github.com/zigbeer/zstack-constants/blob/master/layer/defs/af.json)  
* MAC Layer Namespace and Properties: [mac.json](https://github.com/zigbeer/zstack-constants/blob/master/layer/defs/mac.json)  
* SYS Layer Namespace and Properties: [sys.json](https://github.com/zigbeer/zstack-constants/blob/master/layer/defs/sys.json)  
* UTIL Layer Namespace and Properties: [util.json](https://github.com/zigbeer/zstack-constants/blob/master/layer/defs/util.json)  
* ZDO Layer Namespace and Properties: [zdo.json](https://github.com/zigbeer/zstack-constants/blob/master/layer/defs/zdo.json)  
* SAPI Layer Namespace and Properties: [sapi.json](https://github.com/zigbeer/zstack-constants/blob/master/layer/defs/sapi.json)  
* DBG Layer Namespace and Properties: [dbg.json](https://github.com/zigbeer/zstack-constants/blob/master/layer/defs/dbg.json)  
  

<br />
