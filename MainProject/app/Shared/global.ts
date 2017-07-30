import { loginUser } from '../Model/login';
import { IUser } from '../Model/user';
import { Instruction } from '../Model/instruction';

export class Global {
    public static BASE_USER_ENDPOINT = 'api/userapi/';
    public static BASE_LOGIN_ENDPOINT = 'api/loginapi/';
    public static BASE_REGISTER_ENDPOINT = 'api/registerapi/';
    public static BASE_CHANGE_USER_PROFILE_ENDPOINT = 'api/changeuserprofileapi/';
    public static BASE_BUILDINSTRUCTION_ENDPOINT = 'api/buildinstructionapi/';
}


export class LoginUserAccount {
    public static userData: loginUser = new loginUser();
}

export class BuildInstructionNow {
    public static buildInstruction:number = 0;   
}


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