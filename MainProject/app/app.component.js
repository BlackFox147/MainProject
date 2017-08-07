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
var global_1 = require("./Shared/global");
var router_1 = require("@angular/router");
var user_1 = require("./Model/user");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var AppComponent = (function () {
    function AppComponent(router, slimLoader) {
        this.router = router;
        this.slimLoader = slimLoader;
        this.LoginUserAccountData = global_1.LoginUserAccount.userData;
        this.a = "a";
        this.slimLoader.height = '4px';
        this.slimLoader.color = 'blue';
    }
    AppComponent.prototype.ShowE = function () {
        console.log(this.LoginUserAccountData);
    };
    //Add(): void {
    //    this.a += "a";
    //    LoginUserAccountData.Mabe.setemail(this.a);
    //    console.log(this.LoginUserAccountData);
    //    //this.qqq = LoginUserAccountData.Mabe.getparams();
    //}
    AppComponent.prototype.isUserLoggedIn = function () {
        if (this.LoginUserAccountData.Id == 0) {
            return false;
        }
        else
            return true;
    };
    AppComponent.prototype.LogOff = function () {
        delete (global_1.LoginUserAccount.userData);
        global_1.LoginUserAccount.userData = new user_1.IUser("", "");
        this.LoginUserAccountData = global_1.LoginUserAccount.userData;
        this.router.navigate(['/']);
        console.log(this.LoginUserAccountData);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.runSlimLoader();
    };
    AppComponent.prototype.runSlimLoader = function () {
        var _this = this;
        this.slimLoader.start();
        setTimeout(function () {
            _this.slimLoader.complete();
        }, 500);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "user-app",
            templateUrl: 'app/app.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map