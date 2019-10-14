"use strict";
exports.__esModule = true;
var SmartCabinetEnv;
(function (SmartCabinetEnv) {
    SmartCabinetEnv["Production"] = "production";
    SmartCabinetEnv["Staging"] = "staging";
    SmartCabinetEnv["Development"] = "development";
})(SmartCabinetEnv = exports.SmartCabinetEnv || (exports.SmartCabinetEnv = {}));
exports.SmartCabinetEnvs = [
    SmartCabinetEnv.Production,
    SmartCabinetEnv.Staging,
    SmartCabinetEnv.Development,
];
function parseSmartCabinetEnv(str) {
    switch (str) {
        case SmartCabinetEnv.Production:
            return SmartCabinetEnv.Production;
        case SmartCabinetEnv.Staging:
            return SmartCabinetEnv.Staging;
        case SmartCabinetEnv.Development:
            return SmartCabinetEnv.Development;
        default:
            throw Error("Invalid SmartCabinetEnv value: " + str);
    }
}
exports.parseSmartCabinetEnv = parseSmartCabinetEnv;
