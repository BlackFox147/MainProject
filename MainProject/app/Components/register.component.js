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
var router_1 = require("@angular/router"); //!!!
var RegisterComponent = (function () {
    function RegisterComponent(fb, _userService, router) {
        this.fb = fb;
        this._userService = _userService;
        this.router = router;
        this.indLoading = false;
        this.info = "Start";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.userFrm = this.fb.group({
            Id: [''],
            UserName: [''],
            Email: [''],
            Password: [''],
            ConformPassword: [''],
            Profile: ['']
        });
        //this.LoadUsers();        
    };
    RegisterComponent.prototype.LoadOneUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._userService.get(this.activeUrl)
            .subscribe(function (user) {
            global_1.Asd.Mabe.setId(user.Id);
            global_1.Asd.Mabe.setemail(user.Email);
            global_1.Asd.Mabe.setName(user.UserName);
            global_1.Asd.Mabe.setPassord(user.Password);
            global_1.Asd.Mabe.setProfile(user.Profile);
        }, function (error) { return _this.msg = error; });
        //Asd.Mabe.setId(this.user.Id);
    };
    RegisterComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        this.activeUrl = global_1.Global.BASE_REGISTER_ENDPOINT;
        if (formData._value.Password != formData._value.ConformPassword) {
            console.log("No");
            return;
        }
        global_1.Asd.Mabe.setemail(formData._value.Email);
        this._userService.post(this.activeUrl, formData._value).subscribe(function (data) {
            if (data == 1) {
                _this.msg = "Data successfully added.";
                _this.LoadOneUsers();
                console.log(global_1.Asd.Mabe.getparams());
            }
            else {
                _this.msg = "There is some issue in saving records, please contact to system administrator!";
            }
        }, function (error) {
            _this.msg = error;
        });
    };
    RegisterComponent.prototype.onSubmitLogin = function (formData) {
        var _this = this;
        this.msg = "";
        this.activeUrl = global_1.Global.BASE_LOGIN_ENDPOINT;
        this._userService.post(global_1.Global.BASE_LOGIN_ENDPOINT, formData._value).subscribe(function (data) {
            if (data == 1) {
                _this.msg = "Data successfully added.";
                _this.LoadOneUsers();
                console.log(global_1.Asd.Mabe.getparams());
                _this.router.navigate(['/']); //!!!
            }
            if (data == 2) {
                _this.msg = "Wrong Email";
            }
            else {
                _this.msg = "There is some issue in saving records, please contact to system administrator!";
            }
        }, function (error) {
            _this.msg = error;
        });
    };
    RegisterComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    };
    RegisterComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/register.component.html',
            styleUrls: ['./app/Components/register.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map