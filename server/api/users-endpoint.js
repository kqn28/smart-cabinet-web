"use strict";
exports.__esModule = true;
var Express = require("express");
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
            client_1.query('SELECT sm.users__check_user_exist($1, $2)', [username, email]).then(function (result) {
                res.send(result.rows[0]);
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
            client_2.query('SELECT sm.users__create_user($1, $2, $3, $4, $5)', [firstName, lastName, email, username, password])
                .then(function (result) {
                res.sendStatus(200);
            });
        });
    }
    catch (error) {
        // tslint:disable-next-line: no-console
        console.error(error);
        res.sendStatus(500);
    }
});
