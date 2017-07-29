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
var BuildInstructionComponent = (function () {
    function BuildInstructionComponent(http, _userService, router) {
        this.http = http;
        this._userService = _userService;
        this.router = router;
        this.BuildInstructionData = global_1.LoginUserAccount.userData.getInstrustion();
        //LoginUserAccount.userData.getProfile().Instructions.forEach(instructin => {
        //    if (instructin.Id == BuildInstructionNow.buildInstruction) {
        //        BuildInstructionData = instructin;
        //        console.log(BuildInstructionData);
        //    }
        //})
    }
    BuildInstructionComponent.prototype.Test = function () {
        console.log(this.BuildInstructionData);
        this.BuildInstructionData.Name = "Axaxaxa";
        console.log(global_1.LoginUserAccount.userData.getInstrustion());
    };
    BuildInstructionComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/buildInstruction.component.html',
        }),
        __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService, router_1.Router])
    ], BuildInstructionComponent);
    return BuildInstructionComponent;
}());
exports.BuildInstructionComponent = BuildInstructionComponent;
//# sourceMappingURL=buildInstruction.component.js.map