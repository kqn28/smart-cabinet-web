"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var smart_cabinet_env_1 = require("../core/server/smart-cabinet-env");
var EnvironmentVars = /** @class */ (function () {
    function EnvironmentVars(smartCabinetEnv, databaseUrl, encryptionKey) {
        this.smartCabinetEnv = smartCabinetEnv;
        this.databaseUrl = databaseUrl;
        this.encryptionKey = encryptionKey;
    }
    EnvironmentVars.fromProcessEnv = function () {
        dotenv.config();
        var smartCabinetEnv = smart_cabinet_env_1.parseSmartCabinetEnv(process.env.SMART_CABINET_ENV);
        var databaseUrl = process.env.DATABASE_URL;
        var encryptionKey = process.env.ENCRYPTION_KEY;
        if (!databaseUrl) {
            throw new Error('DATABASE_URL is not provided');
        }
        if (!encryptionKey) {
            throw new Error('ENCRYPTION_KEY is not provided');
        }
        return new EnvironmentVars(smartCabinetEnv, databaseUrl, encryptionKey);
    };
    EnvironmentVars.fromArguments = function (smartCabinetEnv, databaseUrl, encryptionKey) {
        return new EnvironmentVars(smartCabinetEnv, databaseUrl, encryptionKey);
    };
    return EnvironmentVars;
}());
exports.EnvironmentVars = EnvironmentVars;
