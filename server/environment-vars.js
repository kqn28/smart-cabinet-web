"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var smart_cabinet_env_1 = require("../core/server/smart-cabinet-env");
var EnvironmentVars = /** @class */ (function () {
    function EnvironmentVars(smartCabinetEnv, databaseUri) {
        this.smartCabinetEnv = smartCabinetEnv;
        this.databaseUri = databaseUri;
    }
    EnvironmentVars.fromProcessEnv = function () {
        dotenv.config();
        var smartCabinetEnv = smart_cabinet_env_1.parseSmartCabinetEnv(process.env.SMART_CABINET_ENV);
        var databaseUri = process.env.DATABASE_URI;
        if (!databaseUri) {
            throw new Error('DATABASE_URI is not provided');
        }
        return new EnvironmentVars(smartCabinetEnv, databaseUri);
    };
    EnvironmentVars.fromArguments = function (smartCabinetEnv, databaseUri) {
        return new EnvironmentVars(smartCabinetEnv, databaseUri);
    };
    return EnvironmentVars;
}());
exports.EnvironmentVars = EnvironmentVars;
