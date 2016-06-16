var expect = require('chai').expect,
    ZC = require('../index.js'),            // zstack-constants
    COMMON = require('../layer/common.js'); // common constants

describe('Iterate over constants-set in COMMON and compared to ZC', function() {
    describe('#.cmdStatus', function() {
        it('COMMON.cmdStatus should be identical to ZC.cmdStatus', function () {
            expect(COMMON.cmdStatus).to.deep.equal(ZC.cmdStatus);
        });

        it('Each element COMMON.cmdStatus should be identical to ZC.cmdStatus', function () {
            var allTheSame = true;
            for (var key in COMMON.cmdStatus) {
                if (ZC.cmdStatus[key] !== COMMON.cmdStatus[key])
                    allTheSame = false;
            }
            expect(allTheSame).to.be.true;
        });
    });

    describe('#.capabInfoMask', function() {
        it('COMMON.capabInfoMask should be identical to ZC.MAC.capabInfoMask and ZC.ZDO.capabInfoMask', function () {
            expect(COMMON.capabInfoMask).to.deep.equal(ZC.MAC.capabInfoMask);
            expect(COMMON.capabInfoMask).to.deep.equal(ZC.ZDO.capabInfoMask);
        });

        it('Each element COMMON.capabInfoMask should be identical to ZC.MAC.capabInfoMask and ZC.ZDO.capabInfoMask', function () {
            var allTheSame = true;
            for (var key in COMMON.capabInfoMask) {
                if (ZC.MAC.capabInfoMask[key] !== COMMON.capabInfoMask[key])
                    allTheSame = false;
            }

            for (key in COMMON.capabInfoMask) {
                if (ZC.ZDO.capabInfoMask[key] !== COMMON.capabInfoMask[key])
                    allTheSame = false;
            }
            expect(allTheSame).to.be.true;
        });
    });

    describe('#.devStates', function() {
        it('COMMON.devStates should be identical to ZC.UTIL.devStates and ZC.ZDO.devStates', function () {
            expect(COMMON.devStates).to.deep.equal(ZC.UTIL.devStates);
            expect(COMMON.devStates).to.deep.equal(ZC.ZDO.devStates);
        });

        it('Each element COMMON.devStates should be identical to ZC.UTIL.devStates and ZC.ZDO.devStates', function () {
            var allTheSame = true;
            for (var key in COMMON.devStates) {
                if (ZC.UTIL.devStates[key] !== COMMON.devStates[key])
                    allTheSame = false;
            }

            for (key in COMMON.devStates) {
                if (ZC.ZDO.devStates[key] !== COMMON.devStates[key])
                    allTheSame = false;
            }
            expect(allTheSame).to.be.true;
        });
    });

    describe('#.logicalChannels', function() {
        it('COMMON.logicalChannels should be identical to ZC.MAC.logicalChannels and ZC.ZDO.logicalChannels', function () {
            expect(COMMON.logicalChannels).to.deep.equal(ZC.MAC.logicalChannels);
            expect(COMMON.logicalChannels).to.deep.equal(ZC.ZDO.logicalChannels);
        });

        it('Each element COMMON.logicalChannels should be identical to ZC.MAC.logicalChannels and ZC.ZDO.logicalChannels', function () {
            var allTheSame = true;
            for (var key in COMMON.logicalChannels) {
                if (ZC.MAC.logicalChannels[key] !== COMMON.logicalChannels[key])
                    allTheSame = false;
            }

            for (key in COMMON.logicalChannels) {
                if (ZC.ZDO.logicalChannels[key] !== COMMON.logicalChannels[key])
                    allTheSame = false;
            }
            expect(allTheSame).to.be.true;
        });
    });

    describe('#.channelMask', function() {
        it('COMMON.channelMask should be identical to ZC.MAC.channelMask and ZC.ZDO.channelMask', function () {
            expect(COMMON.channelMask).to.deep.equal(ZC.MAC.channelMask);
            expect(COMMON.channelMask).to.deep.equal(ZC.ZDO.channelMask);
        });

        it('Each element COMMON.channelMask should be identical to ZC.MAC.channelMask and ZC.ZDO.channelMask', function () {
            var allTheSame = true;
            for (var key in COMMON.channelMask) {
                if (ZC.MAC.channelMask[key] !== COMMON.channelMask[key])
                    allTheSame = false;
            }

            for (key in COMMON.channelMask) {
                if (ZC.ZDO.channelMask[key] !== COMMON.channelMask[key])
                    allTheSame = false;
            }
            expect(allTheSame).to.be.true;
        });

        it('COMMON.channelMask should be identical to ZC.UTIL.channelMask and ZC.ZDO.channelMask', function () {
            expect(COMMON.channelMask).to.deep.equal(ZC.UTIL.channelMask);
            expect(COMMON.channelMask).to.deep.equal(ZC.ZDO.channelMask);
        });

        it('Each element COMMON.channelMask should be identical to ZC.UTIL.channelMask and ZC.ZDO.channelMask', function () {
            var allTheSame = true;
            for (var key in COMMON.channelMask) {
                if (ZC.UTIL.channelMask[key] !== COMMON.channelMask[key])
                    allTheSame = false;
            }

            for (key in COMMON.channelMask) {
                if (ZC.ZDO.channelMask[key] !== COMMON.channelMask[key])
                    allTheSame = false;
            }
            expect(allTheSame).to.be.true;
        });
    });

    describe('#.securityLevel', function() {
        it('COMMON.securityLevel should be identical to ZC.UTIL.securityLevel and ZC.MAC.securityLevel', function () {
            expect(COMMON.securityLevel).to.deep.equal(ZC.UTIL.securityLevel);
            expect(COMMON.securityLevel).to.deep.equal(ZC.MAC.securityLevel);
        });

        it('Each element COMMON.securityLevel should be identical to ZC.UTIL.securityLevel and ZC.MAC.securityLevel', function () {
            var allTheSame = true;
            for (var key in COMMON.securityLevel) {
                if (ZC.UTIL.securityLevel[key] !== COMMON.securityLevel[key])
                    allTheSame = false;
            }

            for (key in COMMON.securityLevel) {
                if (ZC.MAC.securityLevel[key] !== COMMON.securityLevel[key])
                    allTheSame = false;
            }
            expect(allTheSame).to.be.true;
        });
    });

    describe('#.addressMode', function() {
        it('COMMON.addressMode should be identical to ZC.MAC.addressMode and ZC.AF.addressMode', function () {
            expect(COMMON.addressMode).to.deep.equal(ZC.MAC.addressMode);
            expect(COMMON.addressMode).to.deep.equal(ZC.AF.addressMode);
        });

        it('Each element COMMON.addressMode should be identical to ZC.MAC.addressMode and ZC.AF.addressMode', function () {
            var allTheSame = true;
            for (var key in COMMON.addressMode) {
                if (ZC.MAC.addressMode[key] !== COMMON.addressMode[key])
                    allTheSame = false;
            }

            for (key in COMMON.addressMode) {
                if (ZC.AF.addressMode[key] !== COMMON.addressMode[key])
                    allTheSame = false;
            }
            expect(allTheSame).to.be.true;
        });

        it('COMMON.addressMode should be identical to ZC.UTIL.addressMode and ZC.MAC.addressMode', function () {
            expect(COMMON.addressMode).to.deep.equal(ZC.UTIL.addressMode);
            expect(COMMON.addressMode).to.deep.equal(ZC.MAC.addressMode);
        });

        it('Each element COMMON.addressMode should be identical to ZC.UTIL.addressMode and ZC.MAC.addressMode', function () {
            var allTheSame = true;
            for (var key in COMMON.addressMode) {
                if (ZC.UTIL.addressMode[key] !== COMMON.addressMode[key])
                    allTheSame = false;
            }

            for (key in COMMON.addressMode) {
                if (ZC.MAC.addressMode[key] !== COMMON.addressMode[key])
                    allTheSame = false;
            }
            expect(allTheSame).to.be.true;
        });
    });

    describe('#.scanDuration', function() {
        it('COMMON.scanDuration should be identical to ZC.MAC.scanDuration and ZC.ZDO.scanDuration', function () {
            expect(COMMON.scanDuration).to.deep.equal(ZC.MAC.scanDuration);
            expect(COMMON.scanDuration).to.deep.equal(ZC.ZDO.scanDuration);
        });

        it('Each element COMMON.scanDuration should be identical to ZC.MAC.scanDuration and ZC.ZDO.scanDuration', function () {
            var allTheSame = true;
            for (var key in COMMON.scanDuration) {
                if (ZC.MAC.scanDuration[key] !== COMMON.scanDuration[key])
                    allTheSame = false;
            }

            for (key in COMMON.scanDuration) {
                if (ZC.ZDO.scanDuration[key] !== COMMON.scanDuration[key])
                    allTheSame = false;
            }
            expect(allTheSame).to.be.true;
        });
    });

    describe('#.nvItemIds', function() {
        it('COMMON.nvItemIds should be identical to ZC.SAPI.nvItemIds and ZC.SYS.nvItemIds', function () {
            expect(COMMON.nvItemIds).to.deep.equal(ZC.SAPI.nvItemIds);
            expect(COMMON.nvItemIds).to.deep.equal(ZC.SYS.nvItemIds);
        });

        it('Each element COMMON.nvItemIds should be identical to ZC.SAPI.nvItemIds and ZC.SYS.nvItemIds', function () {
            var allTheSame = true;
            for (var key in COMMON.nvItemIds) {
                if (ZC.SAPI.nvItemIds[key] !== COMMON.nvItemIds[key])
                    allTheSame = false;
            }

            for (key in COMMON.nvItemIds) {
                if (ZC.SYS.nvItemIds[key] !== COMMON.nvItemIds[key])
                    allTheSame = false;
            }
            expect(allTheSame).to.be.true;
        });
    });
});

describe('getStatus API test', function() {
    var k;

    for (k in COMMON.cmdStatus) {
        expect(ZC.getStatus(k)).to.deep.equal({ key: k, value: COMMON.cmdStatus[k] });
    }

    for (k in COMMON.cmdStatus) {
        expect(ZC.getStatus(COMMON.cmdStatus[k])).to.deep.equal({ key: k, value: COMMON.cmdStatus[k] });
    }
});
