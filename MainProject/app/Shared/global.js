"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("../Model/login");
var Global = (function () {
    function Global() {
    }
    Global.BASE_USER_ENDPOINT = 'api/userapi/';
    Global.BASE_LOGIN_ENDPOINT = 'api/loginapi/';
    Global.BASE_REGISTER_ENDPOINT = 'api/registerapi/';
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