"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var global_1 = require("../Shared/global");
//import { LoginUser } from '../Model/login';
var LoginComponent = (function () {
    function LoginComponent() {
        this.a = "a";
        this.qqq = global_1.Asd.Mabe.getparams();
    }
    LoginComponent.prototype.Show = function () {
        console.log(global_1.Asd.Mabe.getparams());
    };
    LoginComponent.prototype.Add = function () {
        this.a += "a";
        global_1.Asd.Mabe.setemail(this.a);
        //this.qqq = Asd.Mabe.getparams();
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/login.component.html'
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//export class LoginComponent implements OnInit {
//    users: IUser[];
//    user: IUser;
//    msg: string;
//    indLoading: boolean = false;
//    userFrm: FormGroup;
//    dbops: DBOperation;
//    modalTitle: string;
//    modalBtnTitle: string;
//    info: string = "Start";
//    constructor(private fb: FormBuilder, private _userService: UserService) {
//    }
//    ngOnInit(): void {
//        this.userFrm = this.fb.group({
//            Id: [''],
//            UserName: ['', Validators.required],
//            Email: [''],
//            Password: ['', Validators.required],
//            ConformPassword: ['']
//        });
//        //this.LoadUsers();        
//    }
//    LoadOneUsers(): void {
//        this.indLoading = true;
//        this._userService.get(Global.BASE_LOGIN_ENDPOINT)
//            .subscribe(user => { Asd.Mabe.setId(user.Id); },
//            error => this.msg = <any>error);
//        //Asd.Mabe.setId(this.user.Id);
//    }
//    //constructor(private loginUser: LoginUser) {
//    //    console.log(loginUser.getParams());
//    //}
//    a: string = "a";
//    Show(): void {
//        console.log(Asd.Mabe.getparams());
//        Asd.Mabe.setemail("w");
//    }
//    Add(): void {
//        this.a += "a";
//        Asd.Mabe.setemail(this.a);
//        //this.qqq = Asd.Mabe.getparams();
//    }
//    qqq: ILogin = Asd.Mabe.getparams();
//    onSubmit(formData: any) {
//        this.msg = "";
//        //this.info = "Finish";
//        //Asd.Mabe.setemail("Test");
//        //console.log(Asd.Mabe.getparams());
//        //this.msg = "Data successfully updated.";
//        //Asd.Mabe.setemail(formData._value.Email);
//        //console.log(Asd.Mabe.getparams());
//        //        Asd.Mabe.setData(formData._value);
//        Asd.Mabe.setemail(formData._value.Email);
//        console.log(Asd.Mabe.getparams());
//        this._userService.post(Global.BASE_LOGIN_ENDPOINT, formData._value).subscribe(
//            data => {
//                if (data == 1) //Success
//                {
//                    this.msg = "Data successfully added.";
//                    this.LoadOneUsers();                                                      
//                }
//                else {
//                    this.msg = "There is some issue in saving records, please contact to system administrator!"
//                }
//            },
//            error => {
//                this.msg = error;
//            }
//        );
//    }
//    SetControlsState(isEnable: boolean) {
//        isEnable ? this.userFrm.enable() : this.userFrm.disable();
//    }
//}
//# sourceMappingURL=login.component.js.map