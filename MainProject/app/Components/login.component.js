"use strict";
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
var core_1 = require("@angular/core");
var user_service_1 = require("../Service/user.service");
var forms_1 = require("@angular/forms");
var global_1 = require("../Shared/global");
//import { LoginUser } from '../Model/login';
var LoginComponent = (function () {
    function LoginComponent(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.indLoading = false;
        this.info = "Start";
        //constructor(private loginUser: LoginUser) {
        //    console.log(loginUser.getParams());
        //}
        this.a = "a";
        this.qqq = global_1.Asd.Mabe.getparams();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userFrm = this.fb.group({
            Id: [''],
            UserName: ['', forms_1.Validators.required],
            Email: [''],
            Password: ['', forms_1.Validators.required]
        });
        //this.LoadUsers();        
    };
    LoginComponent.prototype.Show = function () {
        console.log(global_1.Asd.Mabe.getparams());
        global_1.Asd.Mabe.setemail("w");
    };
    LoginComponent.prototype.Add = function () {
        this.a += "a";
        global_1.Asd.Mabe.setemail(this.a);
        //this.qqq = Asd.Mabe.getparams();
    };
    LoginComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        //this.info = "Finish";
        //Asd.Mabe.setemail("Test");
        //console.log(Asd.Mabe.getparams());
        //this.msg = "Data successfully updated.";
        //Asd.Mabe.setemail(formData._value.Email);
        //console.log(Asd.Mabe.getparams());
        //        Asd.Mabe.setData(formData._value);
        global_1.Asd.Mabe.setemail(formData._value.Email);
        console.log(global_1.Asd.Mabe.getparams());
        this._userService.post(global_1.Global.BASE_USER_ENDPOINT, formData._value).subscribe(function (data) {
            if (data == 1) {
                _this.msg = "Data successfully added.";
                //this.LoadUsers();                                                      
            }
            else {
                _this.msg = "There is some issue in saving records, please contact to system administrator!";
            }
        }, function (error) {
            _this.msg = error;
        });
    };
    LoginComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/login.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map