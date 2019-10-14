"use strict";
exports.__esModule = true;
var express = require("express");
// import socketIO from "socket.io";
var server_1 = require("./server");
exports["default"] = (function (app, http) {
    app.use(express.json());
    app.use('/api', server_1.api);
});
