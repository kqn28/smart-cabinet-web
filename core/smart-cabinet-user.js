"use strict";
exports.__esModule = true;
var SmartCabinetUser = /** @class */ (function () {
    function SmartCabinetUser(firstName, lastName, username, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
    }
    SmartCabinetUser.fromApi = function (user) {
        return new SmartCabinetUser(user.firstName, user.lastName, user.username, user.email);
    };
    return SmartCabinetUser;
}());
exports.SmartCabinetUser = SmartCabinetUser;
