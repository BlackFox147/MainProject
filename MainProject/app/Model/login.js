"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_1 = require("../Model/profile");
var instruction_1 = require("../Model/instruction");
var global_1 = require("../Shared/global");
var ILogin = (function () {
    function ILogin(id, name, email, pass, prof) {
        this.Id = id;
        this.UserName = name;
        this.Email = email;
        this.Password = pass;
        this.Profile = new profile_1.UserProfile(prof, prof, "", "", "", null);
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
    loginUser.prototype.getInstrustion = function () {
        var temp = new instruction_1.Instruction(0, 0, "", 0, null);
        this.userAccount.Profile.Instructions.forEach(function (instructin) {
            if (instructin.Id == global_1.BuildInstructionNow.buildInstruction) {
                temp = instructin;
                return;
            }
        });
        temp.Steps = temp.Steps.sort(function (n1, n2) { return n1.Number - n2.Number; });
        console.log("sort");
        console.log(temp.Steps);
        return temp;
    };
    loginUser.prototype.setInstructions = function (em) {
        this.userAccount.Profile.Instructions = em;
    };
    loginUser.prototype.getparams = function () {
        return this.userAccount;
    };
    loginUser.prototype.getInstructions = function () {
        return this.userAccount.Profile.Instructions;
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