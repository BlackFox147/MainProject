"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("../Model/login");
var Global = (function () {
    function Global() {
    }
    Global.BASE_USER_ENDPOINT = 'api/userapi/';
    Global.BASE_LOGIN_ENDPOINT = 'api/loginapi/';
    Global.BASE_REGISTER_ENDPOINT = 'api/registerapi/';
    Global.BASE_CHANGE_USER_PROFILE_ENDPOINT = 'api/changeuserprofileapi/';
    Global.BASE_BUILDINSTRUCTION_ENDPOINT = 'api/buildinstructionapi/';
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
    return BuildInstructionNow;
}());
exports.BuildInstructionNow = BuildInstructionNow;
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