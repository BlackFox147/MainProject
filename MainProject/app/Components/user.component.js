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
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var enum_1 = require("../Shared/enum");
var global_1 = require("../Shared/global");
//import { loginuser } from '../Model/login';
//import { LoginUser } from '../Model/login';
var UserComponent = (function () {
    function UserComponent(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.indLoading = false;
        this.info = "Start";
    }
    UserComponent.prototype.ngOnInit = function () {
        this.userFrm = this.fb.group({
            Id: [''],
            UserName: ['', forms_1.Validators.required],
            Email: [''],
            Password: ['', forms_1.Validators.required]
        });
        //this.LoadUsers();        
    };
    //LoadUsers(): void {
    //    this.indLoading = true;
    //    this._userService.get(Global.BASE_USER_ENDPOINT)
    //        .subscribe(users => { this.users = users; this.indLoading = false; },
    //        error => this.msg = <any>error);
    //}
    UserComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (users) { _this.users = users; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    UserComponent.prototype.addUser = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New User";
        this.modalBtnTitle = "Add";
        this.userFrm.reset();
        this.modal.open();
    };
    UserComponent.prototype.editUser = function (id) {
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit User";
        this.modalBtnTitle = "Update";
        this.user = this.users.filter(function (x) { return x.Id == id; })[0];
        this.userFrm.setValue(this.user);
        this.modal.open();
    };
    UserComponent.prototype.deleteUser = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.user = this.users.filter(function (x) { return x.Id == id; })[0];
        this.userFrm.setValue(this.user);
        this.modal.open();
    };
    UserComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this.info = "Finish";
                global_1.Asd.Mabe.setemail("Test");
                console.log(global_1.Asd.Mabe.getparams());
                this.msg = "Data successfully updated.";
                global_1.Asd.Mabe.setemail(formData._value.Email);
                console.log(global_1.Asd.Mabe.getparams());
                global_1.Asd.Mabe.setData(formData._value);
                console.log(global_1.Asd.Mabe.getparams());
                //this._userService.post(Global.BASE_USER_ENDPOINT, formData._value).subscribe(
                //    data => {
                //        if (data == 1) //Success
                //        {
                //            this.msg = "Data successfully added.";
                //            this.LoadUsers();                                                      
                //        }
                //        else
                //        {
                //            this.msg = "There is some issue in saving records, please contact to system administrator!"
                //        }
                //        this.modal.dismiss();
                //    },
                //    error => {
                //      this.msg = error;
                //    }
                //);
                break;
            case enum_1.DBOperation.update:
                this.info = "Finish";
                global_1.Asd.Mabe.setemail("Test");
                console.log(global_1.Asd.Mabe.getparams());
                this.msg = "Data successfully updated.";
                global_1.Asd.Mabe.setemail(formData._value.Email);
                console.log(global_1.Asd.Mabe.getparams());
                //this._userService.put(Global.BASE_USER_ENDPOINT, formData._value.Id, formData._value).subscribe(
                //    data => {
                //        if (data == 1) //Success
                //        {
                //            this.info = "Finish";
                //            Asd.Mabe.setemail("Test");
                //            console.log(Asd.Mabe.getparams());
                //            this.msg = "Data successfully updated.";
                //            this.LoadUsers();
                //            Asd.Mabe.setemail(formData._value.Email);
                //            console.log(Asd.Mabe.getparams());
                //            //LoginUser.Log.Email = "test";
                //            //this.info = LoginUser.Log.Email;
                //        }
                //        else {
                //            this.msg = "There is some issue in saving records, please contact to system administrator!"
                //        }
                //        this.modal.dismiss();
                //    },
                //    error => {
                //        this.msg = error;
                //    }
                //);
                break;
            case enum_1.DBOperation.delete:
                this._userService.delete(global_1.Global.BASE_USER_ENDPOINT, formData._value.Id).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully deleted.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
        }
    };
    UserComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], UserComponent.prototype, "modal", void 0);
    UserComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/user.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map