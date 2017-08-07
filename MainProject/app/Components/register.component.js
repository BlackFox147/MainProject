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
var user_1 = require("../Model/user");
var global_1 = require("../Shared/global");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var router_1 = require("@angular/router"); //!!!
var RegisterComponent = (function () {
    function RegisterComponent(_userService, router, slimLoader) {
        this._userService = _userService;
        this.router = router;
        this.slimLoader = slimLoader;
        this.indLoading = false;
        this.info = "Start";
    }
    RegisterComponent.prototype.runSlimLoader = function () {
        var _this = this;
        this.slimLoader.start();
        setTimeout(function () {
            _this.slimLoader.complete();
        }, 500);
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.runSlimLoader();
        //this.LoadUsers();        
    };
    RegisterComponent.prototype.LoadOneUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._userService.get(this.activeUrl)
            .subscribe(function (user) {
            console.log(user);
            global_1.LoginUserAccount.userData.Id = user.Id;
            global_1.LoginUserAccount.userData.Profile = user.Profile;
        }, function (error) { return _this.msg = error; });
    };
    RegisterComponent.prototype.onSubmit = function (register_email, register_password, register_cpassword) {
        var _this = this;
        this.slimLoader.start();
        this.msg = "";
        var required = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
        if (!required.test(register_email)) {
            this.msg = "Email isn't correct";
            console.log("wrong email");
            this.slimLoader.complete();
            return;
        }
        this.activeUrl = global_1.Global.BASE_REGISTER_ENDPOINT;
        if (register_password != register_cpassword) {
            this.msg = "ConformPassword isn't correct";
            console.log("No ConformPassword");
            this.slimLoader.complete();
            return;
        }
        this._userService.post(this.activeUrl, new user_1.IUser(register_email, register_password)).subscribe(function (data) {
            if (data == 1) {
                _this.msg = "Data successfully added.";
                _this.LoadOneUsers();
                //console.log(LoginUserAccount.userData.getparams());
                _this.slimLoader.complete();
                _this.router.navigate(['/']);
            }
            else {
                _this.slimLoader.complete();
                _this.msg = "There is some issue in saving records, please contact to system administrator!";
            }
        }, function (error) {
            _this.slimLoader.complete();
            _this.msg = error;
        });
    };
    RegisterComponent.prototype.onSubmitLogin = function (email, password) {
        var _this = this;
        this.slimLoader.start();
        this.msg = "";
        this.activeUrl = global_1.Global.BASE_LOGIN_ENDPOINT;
        this._userService.post(global_1.Global.BASE_LOGIN_ENDPOINT, new user_1.IUser(email, password)).subscribe(function (data) {
            if (data == 1) {
                _this.msg = "Data successfully added.";
                _this.LoadOneUsers();
                console.log(global_1.LoginUserAccount.userData);
                _this.slimLoader.complete();
                _this.router.navigate(['/']); //!!!
            }
            if (data == 2) {
                _this.slimLoader.complete();
                _this.msg = "Wrong Email or Password";
            }
            else {
                _this.slimLoader.complete();
                _this.msg = "There is some issue in saving records, please contact to system administrator!";
            }
        }, function (error) {
            _this.slimLoader.complete();
            _this.msg = error;
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/register.component.html',
            styleUrls: ['./app/Components/register.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router, ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map