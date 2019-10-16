"use strict";
exports.__esModule = true;
var crypto = require("crypto");
var Express = require("express");
var smart_cabinet_user_1 = require("../../core/smart-cabinet-user");
var environment_1 = require("../environment");
var pg_sql_1 = require("../pg-sql");
var usersApi = Express.Router();
exports.usersApi = usersApi;
usersApi.get('/CheckUserExist', function (req, res) {
    try {
        var client_1 = pg_sql_1.PgSql.getClient();
        client_1.connect().then(function (err) {
            if (err) {
                throw new Error(err);
            }
            var username = req.query.username;
            var email = req.query.email;
            client_1.query('SELECT * from sm.users__get_user($1, $2)', [username, email]).then(function (result) {
                res.send({ userExist: result.rows.length > 0 });
            });
        });
    }
    catch (error) {
        // tslint:disable-next-line: no-console
        console.error(error);
        res.sendStatus(500);
    }
});
usersApi.post('/CreateUser', function (req, res) {
    try {
        var client_2 = pg_sql_1.PgSql.getClient();
        client_2.connect().then(function (err) {
            if (err) {
                throw new Error(err);
            }
            var firstName = req.body.firstName;
            var lastName = req.body.lastName;
            var email = req.body.email;
            var username = req.body.username;
            var password = req.body.password;
            if (!firstName || !lastName || !email || !username || !password) {
                throw new Error('Missing input(s)');
            }
            // Encrypt password
            var hashedPassword = crypto.createHmac('sha256', environment_1.Environment.getEnvironmentVars().encryptionKey)
                .update(password)
                .digest('base64');
            client_2.query('SELECT * from sm.users__create_user($1, $2, $3, $4, $5)', [firstName, lastName, email, username, hashedPassword]).then(function (result) {
                if (result.rows.length > 1) {
                    throw Error('There are more than one rows returned');
                }
                var user = new smart_cabinet_user_1.SmartCabinetUser(result.rows[0].first_name, result.rows[0].last_name, result.rows[0].username, result.rows[0].email);
                res.send({ user: user });
            });
        });
    }
    catch (error) {
        // tslint:disable-next-line: no-console
        console.error(error);
        res.sendStatus(500);
    }
});
usersApi.post('/GetUser', function (req, res) {
    try {
        var client_3 = pg_sql_1.PgSql.getClient();
        client_3.connect().then(function (err) {
            if (err) {
                throw new Error(err);
            }
            var username = req.body.username;
            var password = req.body.password;
            var hashedPassword = crypto.createHmac('sha256', environment_1.Environment.getEnvironmentVars().encryptionKey)
                .update(password)
                .digest('base64');
            client_3.query('SELECT * from sm.users__get_user($1, $2)', [username, null]).then(function (result) {
                if (result.rows.length > 1) {
                    throw Error('There are more than one rows returned');
                }
                if (result.rows.length === 0) {
                    res.send({ invalidPassword: false, noUserExist: true, user: [] });
                }
                var user = new smart_cabinet_user_1.SmartCabinetUser(result.rows[0].first_name, result.rows[0].last_name, result.rows[0].username, result.rows[0].email);
                res.send({ invalidPassword: result.rows[0].password !== hashedPassword, noUserExist: false, user: user });
            });
        });
    }
    catch (error) {
        // tslint:disable-next-line: no-console
        console.error(error);
        res.sendStatus(500);
    }
});
