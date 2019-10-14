"use strict";
exports.__esModule = true;
var Express = require("express");
var smart_cabinet_client_env_vars_1 = require("../../core/server/smart-cabinet-client-env-vars");
var environment_1 = require("../environment");
exports.appApi = Express.Router();
exports.appApi.get('/AppData', function (req, res) {
    try {
        var environmentVars = environment_1.Environment.getEnvironmentVars();
        var clientEnvVars = new smart_cabinet_client_env_vars_1.SmartCabinetClientEnvVars(environmentVars.smartCabinetEnv);
        res.send(clientEnvVars);
    }
    catch (err) {
        // tslint:disable-next-line: no-console
        console.error(err);
        res.sendStatus(500);
    }
});
