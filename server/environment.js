"use strict";
exports.__esModule = true;
var environment_vars_1 = require("./environment-vars");
var Environment = /** @class */ (function () {
    function Environment() {
    }
    Environment.getEnvironmentVars = function () {
        if (this._vars === null) {
            this._vars = environment_vars_1.EnvironmentVars.fromProcessEnv();
        }
        return this._vars;
    };
    Environment.setEnvironmentVarsFromArguments = function (smartCabinetEnv, databaseUrl, encryptionKey) {
        this._vars = environment_vars_1.EnvironmentVars.fromArguments(smartCabinetEnv, databaseUrl, encryptionKey);
    };
    Environment.resetEnvironmentVars = function () {
        this._vars = null;
    };
    Environment._vars = null;
    return Environment;
}());
exports.Environment = Environment;
