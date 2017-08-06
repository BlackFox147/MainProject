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
var platform_browser_1 = require("@angular/platform-browser");
var ViewStepComponent = (function () {
    function ViewStepComponent(http, _userService, router, sanit) {
        this.http = http;
        this._userService = _userService;
        this.router = router;
        this.sanit = sanit;
        this.BuildStepData = this.GetStep();
        this.sanit = sanit;
    }
    ViewStepComponent.prototype.setStep = function (value) {
        value.Elements = value.Elements.sort(function (n1, n2) { return n1.Number - n2.Number; });
        global_1.BuildStepNow.BuildStep.Id = value.Id;
        //BuildStepNow.BuildStep.ImageName = value.ImageName;
        global_1.BuildStepNow.BuildStep.Elements = value.Elements;
        global_1.BuildStepNow.BuildStep.DataTimeChange = value.DataTimeChange;
        global_1.BuildStepNow.BuildStep.InstructionId = value.InstructionId;
        global_1.BuildStepNow.BuildStep.Name = value.Name;
        global_1.BuildStepNow.BuildStep.Number = value.Number;
    };
    ViewStepComponent.prototype.GetStep = function () {
        var _this = this;
        this._userService.getItem(global_1.Global.BASE_BUILDSTEP_ENDPOINT, global_1.BuildStepNow.buildStep)
            .subscribe(function (stepT) {
            _this.setStep(stepT);
            console.log("OK->Get_step");
            console.log(global_1.BuildStepNow.BuildStep);
        }, function (error) {
            return console.log(error);
        });
        return global_1.BuildStepNow.BuildStep;
    };
    ViewStepComponent.prototype.videoURL = function (elem) {
        //return elem.Data
        return this.sanit.bypassSecurityTrustResourceUrl(elem.Data);
    };
    ViewStepComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/viewStep.component.html',
            styleUrls: ['./app/Components/viewStep.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService, router_1.Router,
            platform_browser_1.DomSanitizer])
    ], ViewStepComponent);
    return ViewStepComponent;
}());
exports.ViewStepComponent = ViewStepComponent;
//# sourceMappingURL=viewStep.component.js.map