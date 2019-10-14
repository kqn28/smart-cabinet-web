"use strict";
exports.__esModule = true;
var Express = require("express");
var app_endpoint_1 = require("./api/app-endpoint");
var users_endpoint_1 = require("./api/users-endpoint");
var api = Express.Router();
exports.api = api;
api.use('/App', app_endpoint_1.appApi);
api.use('/Users', users_endpoint_1.usersApi);
