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
var router_1 = require("@angular/router");
var global_1 = require("../Shared/global");
//import { loginuser } from '../Model/login';
//import { LoginUser } from '../Model/login';
var UserComponent = (function () {
    function UserComponent(fb, _userService, router) {
        this.fb = fb;
        this._userService = _userService;
        this.router = router;
        this.instructions = null;
        this.indLoading = false;
        this.info = "Start";
    }
    UserComponent.prototype.OpenStep = function (id) {
        this.router.navigate(['viewStep', id]);
    };
    UserComponent.prototype.OpenInstruction = function (id) {
        this.router.navigate(['viewInstruction', id]);
    };
    UserComponent.prototype.OpenUser = function (id) {
        this.router.navigate(['viewUser', id]);
    };
    UserComponent.prototype.ngOnInit = function () {
        this.userFrm = this.fb.group({
            Id: [''],
            UserName: ['', forms_1.Validators.required],
            Email: [''],
            Password: ['', forms_1.Validators.required],
            UserProfile: ['']
        });
        this.LoadUsers();
        console.log("finish");
    };
    UserComponent.prototype.setInstructions = function (em) {
        this.instructions = em;
        console.log(em);
        console.log(this.instructions);
        console.log("OK");
    };
    UserComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (instructions) {
            _this.indLoading = false;
            //this.instructions = instructions;
            //console.log(instructions);
            _this.setInstructions(instructions);
        }, function (error) { return _this.msg = error; });
        //this.instructions.push(new Instruction(0, 0, "test1"));
        //console.log(this.instructions);
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
            selector: "instruction-app",
            templateUrl: 'app/Components/user.component.html',
            styleUrls: ['./app/Components/user.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService,
            router_1.Router])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map