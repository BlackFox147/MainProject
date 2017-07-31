"use strict";
//import { Component } from "@angular/core";
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
//@Component({
//   templateUrl: 'app/Components/account.component.html'
//})
//export class AccountComponent {
//    qqq: ILogin = Asd.Mabe.getparams();
//}
var core_1 = require("@angular/core");
var global_1 = require("../Shared/global");
var user_service_1 = require("../Service/user.service");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var router_1 = require("@angular/router");
var instruction_1 = require("../Model/instruction");
var AccountComponent = (function () {
    function AccountComponent(http, _userService, router) {
        this.http = http;
        this._userService = _userService;
        this.router = router;
        this.isUploadBtn = true;
        this.LoginUserAccountData = global_1.LoginUserAccount.userData.getparams();
    }
    AccountComponent.prototype.onChange = function () {
        this._userService.put(global_1.Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, this.LoginUserAccountData.Profile.Id, this.LoginUserAccountData.Profile).subscribe(function (data) {
            if (data == 1) {
                //this.msg = "Data successfully updated.";         
                console.log("OK->");
            }
            else {
                //this.msg = "There is some issue in saving records, please contact to system administrator!"
                console.log("NO->");
            }
        }, function (error) {
            console.log(error);
            //this.msg = error;
        });
    };
    AccountComponent.prototype.LoadUserInstruction = function () {
        var _this = this;
        this._userService.get(global_1.Global.BASE_CHANGE_USER_PROFILE_ENDPOINT)
            .subscribe(function (instructions) {
            global_1.LoginUserAccount.userData.setInstructions(instructions);
            console.log("OK->Get_Instruction");
            console.log(_this.LoginUserAccountData.Profile.Instructions);
        }, function (error) {
            return console.log(error);
        });
    };
    AccountComponent.prototype.addInstruction = function () {
        this.modalTitle = "Create new Instruction";
        this.modalBtnTitle = "Create";
        this.create = true;
    };
    AccountComponent.prototype.Cancel = function () {
        this.create = false;
    };
    AccountComponent.prototype.Create = function (instructionName) {
        var _this = this;
        this._userService.post(global_1.Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, new instruction_1.Instruction(0, 0, instructionName, null)).subscribe(function (data) {
            if (data == 1) {
                //this.msg = "Data successfully updated.";
                console.log("OK->Instruction");
                _this.LoadUserInstruction();
            }
            else {
                //this.msg = "There is some issue in saving records, please contact to system administrator!"
                console.log("NO->");
            }
        }, function (error) {
            console.log(error);
            //this.msg = error;
        });
        this.create = false;
    };
    AccountComponent.prototype.BuildInstruction = function (instructionId) {
        global_1.BuildInstructionNow.buildInstruction = instructionId;
        console.log(global_1.BuildInstructionNow.buildInstruction);
        this.router.navigate(['buildInstruction']);
    };
    AccountComponent.prototype.fileChange = function (event) {
        var _this = this;
        debugger;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file_1 = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file_1, file_1.name);
            var headers = new http_1.Headers();
            //headers.append('Content-Type', 'json');  
            //headers.append('Accept', 'application/json');  
            var options = new http_1.RequestOptions({ headers: headers });
            var apiUrl1 = "api/uploadfileapi/";
            //this._userService.post(apiUrl1, formData).subscribe(
            //    data => {
            //        if (data == 1) //Success
            //        {
            //            console.log('success');                        
            //            console.log(LoginUserAccountData.Mabe.getparams());
            //        }
            //        else {
            //            console.log('error');  
            //        }
            //    },
            //    error => {
            //        console.log(error);
            //    }
            //);
            this.http.post(apiUrl1, formData, options)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return Rx_1.Observable.throw(error); })
                .subscribe(function (data) {
                console.log('success');
                _this.LoginUserAccountData.Profile.UserImageName = file_1.name;
                _this.router.navigate(['account']);
            }, function (error) { return console.log(error); });
        }
        // window.location.reload();
    };
    AccountComponent.prototype.Delete = function (instructionId) {
        var _this = this;
        this._userService.delete(global_1.Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, instructionId).subscribe(function (data) {
            if (data == 1) {
                console.log("Good del");
                _this.LoadUserInstruction();
            }
            else {
                console.log("No del");
            }
        }, function (error) {
            console.log(error);
        });
    };
    AccountComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/account.component.html',
            styleUrls: ['./app/Components/account.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService, router_1.Router])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map