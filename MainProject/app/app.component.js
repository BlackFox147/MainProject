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
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.LoginUserAccountData = global_1.LoginUserAccount.userData.getparams();
        this.a = "a";
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
        global_1.LoginUserAccount.userData.logOff();
        this.LoginUserAccountData = global_1.LoginUserAccount.userData.getparams();
        this.router.navigate(['/']);
        console.log(this.LoginUserAccountData);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "user-app",
            templateUrl: 'app/app.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map