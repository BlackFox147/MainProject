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
var Rx_1 = require("rxjs/Rx");
var router_1 = require("@angular/router");
var instruction_1 = require("../Model/instruction");
var user_1 = require("../Model/user");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var AccountComponent = (function () {
    function AccountComponent(http, _userService, router, slimLoader) {
        this.http = http;
        this._userService = _userService;
        this.router = router;
        this.slimLoader = slimLoader;
        this.isUploadBtn = true;
        this.LoginUserAccountData = new user_1.IUser("", "");
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.runSlimLoader();
        this.LoginUserAccountData = this.Stert();
        //this.LoadUsers();        
    };
    AccountComponent.prototype.runSlimLoader = function () {
        var _this = this;
        this.slimLoader.start();
        setTimeout(function () {
            _this.slimLoader.complete();
        }, 500);
    };
    AccountComponent.prototype.onChange = function () {
        var _this = this;
        this.slimLoader.start();
        this._userService.put(global_1.Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, this.LoginUserAccountData.Profile.Id, this.LoginUserAccountData.Profile).subscribe(function (data) {
            //if (data == 1) //Success
            //{
            //    //this.msg = "Data successfully updated.";         
            //    console.log("OK->");        
            //}
            //else {
            //    //this.msg = "There is some issue in saving records, please contact to system administrator!"
            //    console.log("NO->");
            //}
            console.log("OK->");
            _this.slimLoader.complete();
            //this.LoginUserAccountData.Profile = data;
        }, function (error) {
            console.log(error);
            _this.slimLoader.complete();
            //this.msg = error;
        });
    };
    AccountComponent.prototype.Stert = function () {
        this.LoginUserAccountData = global_1.LoginUserAccount.userData;
        this.LoadUserInstruction();
        return global_1.LoginUserAccount.userData;
    };
    AccountComponent.prototype.LoadUserInstruction = function () {
        var _this = this;
        this._userService.getItem(global_1.Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, global_1.LoginUserAccount.userData.Id)
            .subscribe(function (profile) {
            console.log(profile);
            _this.LoginUserAccountData.Profile = profile;
            //LoginUserAccount.userData.setProfile(profile);
            //LoginUserAccount.userData.setInstructions(profile.Instructions);
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
        this.slimLoader.start();
        this._userService.post(global_1.Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, new instruction_1.Instruction(0, 0, instructionName)).subscribe(function (data) {
            if (data == 1) {
                //this.msg = "Data successfully updated.";
                console.log("OK->Instruction");
                _this.LoadUserInstruction();
                _this.slimLoader.complete();
            }
            else {
                //this.msg = "There is some issue in saving records, please contact to system administrator!"
                console.log("NO->");
                _this.slimLoader.complete();
            }
        }, function (error) {
            console.log(error);
            _this.slimLoader.complete();
            //this.msg = error;
        });
        this.create = false;
    };
    AccountComponent.prototype.BuildInstruction = function (instructionId) {
        //BuildInstructionNow.buildInstruction = instructionId;
        //console.log(BuildInstructionNow.buildInstruction);
        //this.GetInstruction();
        this.router.navigate(['buildInstruction', instructionId]);
    };
    AccountComponent.prototype.fileChange = function (event) {
        var _this = this;
        this.slimLoader.start();
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
            this.http.post(apiUrl1, formData, options)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return Rx_1.Observable.throw(error); })
                .subscribe(function (data) {
                console.log('success');
                _this.LoginUserAccountData.Profile.UserImageName = file_1.name;
                _this.slimLoader.complete();
                //this.router.navigate(['account']);
            }, function (error) {
                console.log(error);
                _this.slimLoader.complete();
            });
        }
        else {
            this.slimLoader.complete();
        }
    };
    AccountComponent.prototype.Delete = function (instructionId) {
        var _this = this;
        this.slimLoader.start();
        this._userService.delete(global_1.Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, instructionId).subscribe(function (data) {
            if (data == 1) {
                console.log("Good del");
                _this.LoadUserInstruction();
                _this.slimLoader.complete();
            }
            else {
                console.log("No del");
                _this.slimLoader.complete();
            }
        }, function (error) {
            console.log(error);
            _this.slimLoader.complete();
        });
    };
    AccountComponent.prototype.Open = function (id) {
        this.router.navigate(['step', id]);
    };
    AccountComponent.prototype.OpenUser = function (id) {
        this.router.navigate(['viewUser', id]);
    };
    AccountComponent.prototype.onChangeUserName = function () {
        var _this = this;
        this.LoginUserAccountData.Profile.Instructions.forEach(function (instruction) {
            instruction.UserName = _this.LoginUserAccountData.Profile.UserName;
        });
        this.onChange();
    };
    AccountComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/account.component.html',
            styleUrls: ['./app/Components/account.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService, router_1.Router,
            ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map