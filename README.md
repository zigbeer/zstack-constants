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

<a name="Overiew"></a>  
## 1. Overview  

**zstack-constants** exports all constants used in TI's zigbee z-stack.  
  
<a name="Installation"></a>
## 2. Installation

> $ npm install zstack-constants --save
  
<a name="Usage"></a>
## 3. Usage

To use a constant, just access it within the correct layer, namespace, and the property name. Here is a quick example to access the constant ACK_REQUEST of AF options:  

```js
var ZCS = require('zstack-constants');

console.log(ZCS.AF.options.ACK_REQUEST);    // 16
```
<a name="Status"></a>
## 4. Status Getter

**zstack-constants** provides you with an API `getStatus()` to get the defintion of a status code. This may help in showing error message when a bad status code coming back.  

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


* Common Properties  



* AF Layer Namespace and Properties  


* MAC Layer Namespace and Properties  



* SYS Layer Namespace and Properties  



* UTIL Layer Namespace and Properties  


* ZDO Layer Namespace and Properties  


* SAPI Layer Namespace and Properties  


* DBG Layer Namespace and Properties  
