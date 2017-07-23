"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("../Model/login");
var Global = (function () {
    function Global() {
    }
    Global.BASE_USER_ENDPOINT = 'api/userapi/';
    return Global;
}());
exports.Global = Global;
var Asd = (function () {
    function Asd() {
    }
    Asd.Mabe = new login_1.loginuser();
    return Asd;
}());
exports.Asd = Asd;
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