"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("../Model/login");
var instruction_1 = require("../Model/instruction");
var step_1 = require("../Model/step");
var Global = (function () {
    function Global() {
    }
    Global.BASE_USER_ENDPOINT = 'api/userapi/';
    Global.BASE_LOGIN_ENDPOINT = 'api/loginapi/';
    Global.BASE_REGISTER_ENDPOINT = 'api/registerapi/';
    Global.BASE_CHANGE_USER_PROFILE_ENDPOINT = 'api/changeuserprofileapi/';
    Global.BASE_BUILDINSTRUCTION_ENDPOINT = 'api/buildinstructionapi/';
    Global.BASE_BUILDSTEP_ENDPOINT = 'api/buildstepapi/';
    Global.BASE_BUILDELEMENT_ENDPOINT = 'api/buildelementapi/';
    return Global;
}());
exports.Global = Global;
var LoginUserAccount = (function () {
    function LoginUserAccount() {
    }
    LoginUserAccount.userData = new login_1.loginUser();
    return LoginUserAccount;
}());
exports.LoginUserAccount = LoginUserAccount;
var BuildInstructionNow = (function () {
    function BuildInstructionNow() {
    }
    BuildInstructionNow.buildInstruction = 0;
    BuildInstructionNow.BuildInstruction = new instruction_1.Instruction(0, 0, "");
    return BuildInstructionNow;
}());
exports.BuildInstructionNow = BuildInstructionNow;
var BuildStepNow = (function () {
    function BuildStepNow() {
    }
    BuildStepNow.buildStep = 0;
    BuildStepNow.BuildStep = new step_1.Step(0, 0, 0, "");
    return BuildStepNow;
}());
exports.BuildStepNow = BuildStepNow;
//public static Log: ILogin = new ILogin(0, "", "", "");  
//export class LoginUser {
//    private Log: ILogin = new ILogin(0, "", "", "");   
//    public setEmail(em: string) {
//        this. = em;
//    }
//    public getParams() {
//        return this.Log;
//    }
//} 
//# sourceMappingURL=global.js.map