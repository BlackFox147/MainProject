"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var global_1 = require("./Shared/global");
var AppComponent = (function () {
    function AppComponent() {
        this.asd = global_1.Asd.Mabe.getparams();
        this.a = "a";
    }
    AppComponent.prototype.ShowE = function () {
        console.log(this.asd);
    };
    AppComponent.prototype.Add = function () {
        this.a += "a";
        global_1.Asd.Mabe.setemail(this.a);
        console.log(this.asd);
        //this.qqq = Asd.Mabe.getparams();
    };
    AppComponent.prototype.isUserLoggedIn = function () {
        if (this.asd.Email != "w") {
            return false;
        }
        else
            return true;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "user-app",
            templateUrl: 'app/app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map