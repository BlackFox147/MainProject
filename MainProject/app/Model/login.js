"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_1 = require("../Model/profile");
var ILogin = (function () {
    function ILogin(id, name, email, pass, prof) {
        this.Id = id;
        this.UserName = name;
        this.Email = email;
        this.Password = pass;
        this.Profile = new profile_1.UserProfile(prof, prof, "", "", "");
    }
    return ILogin;
}());
exports.ILogin = ILogin;
//import { Injectable } from '@angular/core';
//@Injectable()
var loginuser = (function () {
    function loginuser() {
        this.log = new ILogin(0, "", "Login1", "", 0);
    }
    loginuser.prototype.setemail = function (em) {
        this.log.Email = em;
    };
    loginuser.prototype.setProfile = function (em) {
        this.log.Profile = em;
    };
    loginuser.prototype.setProfileAge = function (em) {
        this.log.Profile.Age = em;
    };
    loginuser.prototype.setId = function (em) {
        this.log.Id = em;
    };
    loginuser.prototype.setName = function (em) {
        this.log.UserName = em;
    };
    loginuser.prototype.setPassord = function (em) {
        this.log.Password = em;
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
    loginuser.prototype.getProfile = function () {
        return this.log.Profile;
    };
    return loginuser;
}());
exports.loginuser = loginuser;
//# sourceMappingURL=login.js.map