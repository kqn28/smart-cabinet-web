"use strict";
exports.__esModule = true;
var pg = require("pg");
var environment_1 = require("./environment");
var PgSql = /** @class */ (function () {
    function PgSql() {
    }
    PgSql.getClient = function () {
        return new pg.Client({
            connectionString: environment_1.Environment.getEnvironmentVars().databaseUrl,
            ssl: true
        });
    };
    return PgSql;
}());
exports.PgSql = PgSql;
