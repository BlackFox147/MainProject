"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ILogin = (function () {
    function ILogin(id, name, email, pass) {
        this.Id = id;
        this.UserName = name;
        this.Email = email;
        this.Password = pass;
    }
    return ILogin;
}());
exports.ILogin = ILogin;
//import { Injectable } from '@angular/core';
//@Injectable()
var loginuser = (function () {
    function loginuser() {
        this.log = new ILogin(0, "", "Login1", "");
    }
    loginuser.prototype.setemail = function (em) {
        this.log.Email = em;
    };
    loginuser.prototype.getparams = function () {
        return this.log;
    };
    loginuser.prototype.setData = function (data) {
        return this.log = data;
    };
    loginuser.prototype.getEmail = function () {
        return this.log.Email;
    };
    return loginuser;
}());
exports.loginuser = loginuser;
//# sourceMappingURL=login.js.map