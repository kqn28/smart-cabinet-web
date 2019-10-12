"use strict";
exports.__esModule = true;
var express = require("express");
// import socketIO from "socket.io";
exports["default"] = (function (app, http) {
    app.use(express.json());
    app.get('/foo', function (req, res) {
        res.json({ msg: 'foo' });
    });
    app.post('/bar', function (req, res) {
        res.json(req.body);
    });
});
