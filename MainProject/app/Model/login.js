"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_1 = require("../Model/profile");
var ILogin = (function () {
    function ILogin(id, email, pass, prof) {
        this.Id = id;
        //this.UserName = name;
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
        this.userAccount = new ILogin(0, "", "", 0);
    }
    loginUser.prototype.logOff = function () {
        delete (this.userAccount);
        this.userAccount = new ILogin(0, "", "", 0);
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
    //public setName(em: string) {
    //    this.userAccount.UserName = em;
    //}
    loginUser.prototype.setPassord = function (em) {
        this.userAccount.Password = em;
    };
    //public getInstrustion() {
    //    var temp: Instruction = new Instruction(0, 0, "");
    //    this.userAccount.Profile.Instructions.forEach(instructin => {           
    //        if (instructin.Id == BuildInstructionNow.buildInstruction) {               
    //            temp = instructin;    
    //            return;            
    //        }            
    //    }) 
    //    temp.Steps = temp.Steps.sort((n1, n2) => n1.Number - n2.Number);         
    //    return temp;
    //}
    //public setInstrustion(temp: Instruction) {
    //    //var temp: Instruction = new Instruction(0, 0, "", 0, null);
    //    console.log(temp);
    //    temp.Steps = temp.Steps.sort((n1, n2) => n1.Number - n2.Number);
    //    this.userAccount.Profile.Instructions.forEach(instructin => {
    //        if (instructin.Id == BuildInstructionNow.buildInstruction) {
    //            instructin.DataTimeChange = temp.DataTimeChange;               
    //            instructin.Steps = temp.Steps;
    //            //instructin.ImageName = temp.ImageName;
    //            return;
    //        }
    //    })       
    //}
    loginUser.prototype.setInstructions = function (em) {
        this.userAccount.Profile.Instructions = em;
        //console.log(em);
        //console.log(this.userAccount.Profile.Instructions);
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