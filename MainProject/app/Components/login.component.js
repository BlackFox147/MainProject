"use strict";
//import { Component, OnInit, ViewChild } from '@angular/core';
//import { UserService } from '../Service/user.service';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
//import { IUser } from '../Model/user';
//import { ILogin } from '../Model/login';
//import { DBOperation } from '../Shared/enum';
//import { Observable } from 'rxjs/Rx';
//import { Global, LoginUserAccount, BuildInstructionNow } from '../Shared/global';
//import { loginUser } from '../Model/login';
//import { UserProfile } from '../Model/profile';
////import { LoginUser } from '../Model/login';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//@Component({
//    templateUrl: 'app/Components/login.component.html'
//})
//export class LoginComponent {
//    a: string = "a";
//    Show(): void {
//        console.log(LoginUserAccount.userData.getparams());
//        console.log(LoginUserAccount.userData.getProfile());
//        console.log(LoginUserAccount.userData.getInstructions());   
//        console.log(BuildInstructionNow.buildInstruction);    
//    }
//    Add(): void {
//        this.a += "a";
//        LoginUserAccount.userData.setemail(this.a);
//        //this.qqq = Asd.Mabe.getparams();
//    }
//    qqq: ILogin = LoginUserAccount.userData.getparams();
//}
/////////////////////////////////////////////
var core_1 = require("@angular/core");
var ng2_dragula_1 = require("ng2-dragula/ng2-dragula");
var LoginComponent = (function () {
    function LoginComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.numbers = [1, 2, 3, 4, 5];
        dragulaService.dropModel.subscribe(function (value) {
            _this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe(function (value) {
            _this.onRemoveModel(value.slice(1));
        });
    }
    LoginComponent.prototype.Show = function () {
        console.log(this.numbers);
    };
    LoginComponent.prototype.onDropModel = function (args) {
        var el = args[0], target = args[1], source = args[2];
        // do something else
    };
    LoginComponent.prototype.onRemoveModel = function (args) {
        var el = args[0], source = args[1];
        // do something else
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/login.component.html',
            viewProviders: [ng2_dragula_1.DragulaService],
            styleUrls: ['./app/Components/example.css']
        }),
        __metadata("design:paramtypes", [ng2_dragula_1.DragulaService])
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