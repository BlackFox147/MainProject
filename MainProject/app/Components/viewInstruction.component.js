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
var instruction_1 = require("../Model/instruction");
var router_2 = require("@angular/router");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var ViewInstructionComponent = (function () {
    function ViewInstructionComponent(http, _userService, router, activateRoute, slimLoader) {
        var _this = this;
        this.http = http;
        this._userService = _userService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.slimLoader = slimLoader;
        this.BuildInstructionData = new instruction_1.Instruction(0, 0, "");
        this.subscription = activateRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.Stert();
        });
        console.log("id " + this.id);
    }
    ViewInstructionComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ViewInstructionComponent.prototype.ngOnInit = function () {
        this.runSlimLoader();
        //this.LoadUsers();        
    };
    ViewInstructionComponent.prototype.runSlimLoader = function () {
        var _this = this;
        this.slimLoader.start();
        setTimeout(function () {
            _this.slimLoader.complete();
        }, 500);
    };
    ViewInstructionComponent.prototype.setInstruction = function (value) {
        value.Steps = value.Steps.sort(function (n1, n2) { return n1.Number - n2.Number; });
        this.BuildInstructionData.DataTimeChange = value.DataTimeChange;
        this.BuildInstructionData.Steps = value.Steps;
        //BuildInstructionNow.BuildInstruction.ImageName = value.ImageName;
    };
    ViewInstructionComponent.prototype.Stert = function () {
        //var temp: Instruction = new Instruction(0, 0, "");
        this.slimLoader.start();
        this.GetInstruction();
        return true;
    };
    ViewInstructionComponent.prototype.GetInstruction = function () {
        var _this = this;
        var temp = new instruction_1.Instruction(0, 0, "");
        var test = this.id;
        this._userService.getItem(global_1.Global.BASE_BUILDINSTRUCTION_ENDPOINT, test)
            .subscribe(function (instruction) {
            _this.BuildInstructionData = instruction;
            _this.BuildInstructionData.Steps = _this.BuildInstructionData.Steps.sort(function (n1, n2) { return n1.Number - n2.Number; });
            //this.setInstruction(instruction);
            _this.slimLoader.complete();
        }, function (error) {
            _this.slimLoader.complete();
            console.log(error);
        });
    };
    ViewInstructionComponent.prototype.Open = function (id) {
        this.router.navigate(['viewStep', id]);
    };
    ViewInstructionComponent.prototype.OpenUser = function (id) {
        this.router.navigate(['viewUser', id]);
    };
    ViewInstructionComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/viewInstruction.component.html',
            styleUrls: ['./app/Components/example.css']
            //styleUrls: ['./app/Components/account.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService, router_1.Router,
            router_2.ActivatedRoute, ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], ViewInstructionComponent);
    return ViewInstructionComponent;
}());
exports.ViewInstructionComponent = ViewInstructionComponent;
//# sourceMappingURL=viewInstruction.component.js.map