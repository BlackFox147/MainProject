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
var step_1 = require("../Model/step");
var platform_browser_1 = require("@angular/platform-browser");
var router_2 = require("@angular/router");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var ViewStepComponent = (function () {
    function ViewStepComponent(http, _userService, router, sanit, activateRoute, slimLoader) {
        var _this = this;
        this.http = http;
        this._userService = _userService;
        this.router = router;
        this.sanit = sanit;
        this.activateRoute = activateRoute;
        this.slimLoader = slimLoader;
        this.BuildStepData = new step_1.Step(0, 0, 0, "");
        this.subscription = activateRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.Stert();
        });
        this.sanit = sanit;
    }
    ViewStepComponent.prototype.GetStep = function () {
        var _this = this;
        this._userService.getItem(global_1.Global.BASE_BUILDSTEP_ENDPOINT, this.id)
            .subscribe(function (stepT) {
            _this.BuildStepData = stepT;
            _this.BuildStepData.Elements = _this.BuildStepData.Elements.sort(function (n1, n2) { return n1.Number - n2.Number; });
            //this.setStep(stepT);
            console.log("OK->Get_step");
            console.log(_this.BuildStepData);
            _this.slimLoader.complete();
        }, function (error) {
            console.log(error);
            _this.slimLoader.complete();
        });
    };
    ViewStepComponent.prototype.Stert = function () {
        //var temp: Instruction = new Instruction(0, 0, "");
        this.slimLoader.start();
        this.GetStep();
        return true;
    };
    ViewStepComponent.prototype.videoURL = function (elem) {
        //return elem.Data
        return this.sanit.bypassSecurityTrustResourceUrl(elem.Data);
    };
    ViewStepComponent.prototype.OpenInstruction = function (id) {
        this.router.navigate(['viewInstruction', id]);
    };
    ViewStepComponent.prototype.ngOnInit = function () {
        this.runSlimLoader();
        //this.LoadUsers();        
    };
    ViewStepComponent.prototype.runSlimLoader = function () {
        var _this = this;
        this.slimLoader.start();
        setTimeout(function () {
            _this.slimLoader.complete();
        }, 500);
    };
    ViewStepComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/viewStep.component.html',
            styleUrls: ['./app/Components/viewStep.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService, router_1.Router,
            platform_browser_1.DomSanitizer, router_2.ActivatedRoute, ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], ViewStepComponent);
    return ViewStepComponent;
}());
exports.ViewStepComponent = ViewStepComponent;
//# sourceMappingURL=viewStep.component.js.map