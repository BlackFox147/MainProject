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
var AccountComponent = (function () {
    function AccountComponent(http, _userService) {
        this.http = http;
        this._userService = _userService;
        this.isUploadBtn = true;
        this.qqq = global_1.Asd.Mabe.getparams();
    }
    AccountComponent.prototype.onChange = function () {
        console.log("OK->" + global_1.Asd.Mabe.getparams());
    };
    AccountComponent.prototype.fileChange = function (event) {
        debugger;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
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
            //            console.log(Asd.Mabe.getparams());
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
                .subscribe(function (data) { return console.log('success'); }, function (error) { return console.log(error); });
        }
        // window.location.reload();
    };
    AccountComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/account.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map