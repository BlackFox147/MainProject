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
var loginUser = (function () {
    function loginUser() {
        this.userAccount = new ILogin(0, "", "Login1", "", 0);
    }
    loginUser.prototype.logOff = function () {
        delete (this.userAccount);
        this.userAccount = new ILogin(0, "", "Login1", "", 0);
    };
    loginUser.prototype.setemail = function (em) {
        this.userAccount.Email = em;
    };
    loginUser.prototype.setProfile = function (em) {
        this.userAccount.Profile = em;
    };
    loginUser.prototype.setProfileAge = function (em) {
        this.userAccount.Profile.Age = em;
    };
    loginUser.prototype.setId = function (em) {
        this.userAccount.Id = em;
    };
    loginUser.prototype.setName = function (em) {
        this.userAccount.UserName = em;
    };
    loginUser.prototype.setPassord = function (em) {
        this.userAccount.Password = em;
    };
    loginUser.prototype.getparams = function () {
        return this.userAccount;
    };
    loginUser.prototype.setData = function (data) {
        return this.userAccount = data;
    };
    loginUser.prototype.getEmail = function () {
        return this.userAccount.Email;
    };
    loginUser.prototype.getProfile = function () {
        return this.userAccount.Profile;
    };
    return loginUser;
}());
exports.loginUser = loginUser;
//# sourceMappingURL=login.js.map