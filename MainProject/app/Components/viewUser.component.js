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
var global_1 = require("../Shared/global");
var user_service_1 = require("../Service/user.service");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var profile_1 = require("../Model/profile");
var router_2 = require("@angular/router");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var ViewUserComponent = (function () {
    function ViewUserComponent(http, _userService, router, activateRoute, slimLoader) {
        var _this = this;
        this.http = http;
        this._userService = _userService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.slimLoader = slimLoader;
        this.isUploadBtn = true;
        this.UserProfileData = new profile_1.UserProfile(0, 0, "", "", "", null);
        this.subscription = activateRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.Stert();
        });
    }
    ViewUserComponent.prototype.Stert = function () {
        //var temp: Instruction = new Instruction(0, 0, "");
        this.slimLoader.start();
        this.GetInstruction();
        return true;
    };
    ViewUserComponent.prototype.GetInstruction = function () {
        var _this = this;
        var test = this.id;
        console.log("test1 " + test);
        this._userService.getItem(global_1.Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, test)
            .subscribe(function (profile) {
            console.log(profile);
            _this.UserProfileData = profile;
            console.log("OK->Get_Instruction");
            console.log(_this.UserProfileData.Instructions);
            _this.slimLoader.complete();
        }, function (error) {
            console.log(error);
            _this.slimLoader.complete();
        });
    };
    ViewUserComponent.prototype.OpenInstruction = function (instructionId) {
        this.router.navigate(['viewInstruction', instructionId]);
    };
    ViewUserComponent.prototype.Open = function (id) {
        this.router.navigate(['viewStep', id]);
    };
    ViewUserComponent.prototype.ngOnInit = function () {
        this.runSlimLoader();
        //this.LoadUsers();        
    };
    ViewUserComponent.prototype.runSlimLoader = function () {
        var _this = this;
        this.slimLoader.start();
        setTimeout(function () {
            _this.slimLoader.complete();
        }, 500);
    };
    ViewUserComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/viewUser.component.html',
            styleUrls: ['./app/Components/account.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService, router_1.Router,
            router_2.ActivatedRoute, ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], ViewUserComponent);
    return ViewUserComponent;
}());
exports.ViewUserComponent = ViewUserComponent;
//# sourceMappingURL=viewUser.component.js.map