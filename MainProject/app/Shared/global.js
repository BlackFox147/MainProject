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
//export class BuildInstructionNow {
//    public static buildInstruction: number = 0;   
//    public static BuildInstruction: Instruction = new Instruction(0, 0, "");
//}
//export class BuildStepNow {
//    public static buildStep: number = 0;
//    public static BuildStep: Step = new Step(0,0,0,"");
//}
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