"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var smart_cabinet_env_1 = require("../core/server/smart-cabinet-env");
var EnvironmentVars = /** @class */ (function () {
    function EnvironmentVars(smartCabinetEnv, databaseUrl) {
        this.smartCabinetEnv = smartCabinetEnv;
        this.databaseUrl = databaseUrl;
    }
    EnvironmentVars.fromProcessEnv = function () {
        dotenv.config();
        var smartCabinetEnv = smart_cabinet_env_1.parseSmartCabinetEnv(process.env.SMART_CABINET_ENV);
        var databaseUrl = process.env.DATABASE_URL;
        if (!databaseUrl) {
            throw new Error('DATABASE_URL is not provided');
        }
        return new EnvironmentVars(smartCabinetEnv, databaseUrl);
    };
    EnvironmentVars.fromArguments = function (smartCabinetEnv, databaseUrl) {
        return new EnvironmentVars(smartCabinetEnv, databaseUrl);
    };
    return EnvironmentVars;
}());
exports.EnvironmentVars = EnvironmentVars;
