# zstack-constants
Exports TI Z-Stack Constants of AF, SYS, ZDO, MAC, UTIL, SAPI, and DBG layers.  

[![Travis branch](https://img.shields.io/travis/zigbeer/zstack-constants/master.svg?maxAge=2592000)](https://travis-ci.org/zigbeer/zstack-constants)
[![npm](https://img.shields.io/npm/v/zstack-constants.svg?maxAge=2592000)](https://www.npmjs.com/package/zstack-constants)
[![npm](https://img.shields.io/npm/l/zstack-constants.svg?maxAge=2592000)](https://www.npmjs.com/package/zstack-constants)

<br />
  
## Documentation  

Please visit the [Wiki](https://github.com/zigbeer/zstack-constants/wiki).  


## Overview  

**zstack-constants** exports all constants used in TI's zigbee z-stack.  
  

## Installation  

> $ npm install zstack-constants --save
  
## Usage  

Here is an example. See [Usage](https://github.com/zigbeer/zstack-constants/wiki#Usage) on the Wiki for details.  


```js
// Access constants in adcResolution and gpioOperation namespaces under SYS layer
console.log(ZSC.SYS.adcResolution.BIT_10);  // 1
console.log(ZSC.SYS.gpioOperation.TOGGLE);  // 4
```

## License  

Licensed under [MIT](https://github.com/zigbeer/zstack-constants/blob/master/LICENSE).

