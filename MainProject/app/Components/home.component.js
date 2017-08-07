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
var router_1 = require("@angular/router");
var global_1 = require("../Shared/global");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var HomeComponent = (function () {
    function HomeComponent(_userService, router, slimLoader) {
        this._userService = _userService;
        this.router = router;
        this.slimLoader = slimLoader;
        this.instructions = null;
        this.info = "Start";
        this.slimLoader.height = '4px';
        this.slimLoader.color = 'blue';
    }
    HomeComponent.prototype.OpenStep = function (id) {
        this.router.navigate(['viewStep', id]);
    };
    HomeComponent.prototype.OpenInstruction = function (id) {
        this.router.navigate(['viewInstruction', id]);
    };
    HomeComponent.prototype.OpenUser = function (id) {
        this.router.navigate(['viewUser', id]);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.runSlimLoader();
        this.LoadUsers();
        console.log("finish");
    };
    HomeComponent.prototype.runSlimLoader = function () {
        var _this = this;
        this.slimLoader.start();
        setTimeout(function () {
            _this.slimLoader.complete();
        }, 500);
    };
    HomeComponent.prototype.setInstructions = function (em) {
        this.instructions = em;
        console.log(em);
        console.log(this.instructions);
        console.log("OK");
    };
    HomeComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.slimLoader.start();
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (instructions) {
            //this.instructions = instructions;
            //console.log(instructions);
            _this.setInstructions(instructions);
            _this.slimLoader.complete();
        }, function (error) {
            _this.msg = error;
            _this.slimLoader.complete();
        });
        //this.instructions.push(new Instruction(0, 0, "test1"));
        //console.log(this.instructions);
    };
    HomeComponent = __decorate([
        core_1.Component({
            //template: `<img src="../../images/users.png" style="text-align:center"/>`
            templateUrl: 'app/Components/home.component.html',
            styleUrls: ['./app/Components/home.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router, ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map