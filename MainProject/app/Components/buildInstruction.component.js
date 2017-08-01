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
var ng2_dragula_1 = require("ng2-dragula/ng2-dragula");
var step_1 = require("../Model/step");
var BuildInstructionComponent = (function () {
    function BuildInstructionComponent(http, _userService, router, dragulaService) {
        var _this = this;
        this.http = http;
        this._userService = _userService;
        this.router = router;
        this.dragulaService = dragulaService;
        this.BuildInstructionData = global_1.BuildInstructionNow.BuildInstruction;
        dragulaService.dropModel.subscribe(function (value) {
            _this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe(function (value) {
            _this.onRemoveModel(value.slice(1));
        });
    }
    BuildInstructionComponent.prototype.setInstruction = function (value) {
        value.Steps = value.Steps.sort(function (n1, n2) { return n1.Number - n2.Number; });
        global_1.BuildInstructionNow.BuildInstruction.DataTimeChange = value.DataTimeChange;
        global_1.BuildInstructionNow.BuildInstruction.Steps = value.Steps;
    };
    BuildInstructionComponent.prototype.GetInstruction = function () {
        var _this = this;
        this._userService.getItem(global_1.Global.BASE_BUILDINSTRUCTION_ENDPOINT, global_1.BuildInstructionNow.buildInstruction)
            .subscribe(function (instruction) {
            _this.setInstruction(instruction);
            console.log("OK->Get_step");
            console.log(_this.BuildInstructionData);
        }, function (error) {
            return console.log(error);
        });
        return true;
    };
    BuildInstructionComponent.prototype.Test = function () {
        console.log(this.BuildInstructionData);
    };
    BuildInstructionComponent.prototype.onDropModel = function (args) {
        var el = args[0], target = args[1], source = args[2];
        // do something else
    };
    BuildInstructionComponent.prototype.onRemoveModel = function (args) {
        var el = args[0], source = args[1];
        console.log("remove");
        // do something else
    };
    BuildInstructionComponent.prototype.Create = function (stepName) {
        var _this = this;
        this._userService.post(global_1.Global.BASE_BUILDINSTRUCTION_ENDPOINT, new step_1.Step(0, this.BuildInstructionData.Id, this.BuildInstructionData.Steps.length, stepName)).subscribe(function (data) {
            if (data == 1) {
                //this.msg = "Data successfully updated.";
                console.log("OK->Step");
                _this.LoadUserInstruction();
            }
            else {
                //this.msg = "There is some issue in saving records, please contact to system administrator!"
                console.log("NO->step");
            }
        }, function (error) {
            console.log(error);
            //this.msg = error;
        });
        this.create = false;
    };
    BuildInstructionComponent.prototype.LoadUserInstruction = function () {
        var _this = this;
        this._userService.get(global_1.Global.BASE_BUILDINSTRUCTION_ENDPOINT)
            .subscribe(function (instruction) {
            _this.setInstruction(instruction);
            console.log("OK->Get_step");
            console.log(_this.BuildInstructionData);
        }, function (error) {
            return console.log(error);
        });
    };
    BuildInstructionComponent.prototype.Save = function () {
        var _this = this;
        this.BuildInstructionData.Steps.forEach(function (step, index) {
            step.Number = index + 1;
        });
        this._userService.put(global_1.Global.BASE_BUILDINSTRUCTION_ENDPOINT, this.BuildInstructionData.Id, this.BuildInstructionData).subscribe(function (data) {
            if (data == 1) {
                //this.msg = "Data successfully updated.";         
                console.log("OK->");
            }
            else {
                //this.msg = "There is some issue in saving records, please contact to system administrator!"
                console.log("NO->");
            }
            _this.LoadUserInstruction();
        }, function (error) {
            console.log(error);
            //this.msg = error;
        });
    };
    BuildInstructionComponent.prototype.Delete = function (stepId) {
        var _this = this;
        this._userService.delete(global_1.Global.BASE_BUILDINSTRUCTION_ENDPOINT, stepId).subscribe(function (data) {
            console.log("Good del");
            _this.LoadUserInstruction();
        }, function (error) {
            console.log(error);
        });
    };
    BuildInstructionComponent.prototype.addStep = function () {
        this.modalTitle = "Create new Step";
        this.modalBtnTitle = "Create";
        this.create = true;
    };
    BuildInstructionComponent.prototype.Cancel = function () {
        this.create = false;
    };
    BuildInstructionComponent.prototype.Open = function (id) {
        global_1.BuildStepNow.buildStep = id;
        console.log(global_1.BuildStepNow.buildStep);
        //this.GetStep();
        this.router.navigate(['step']);
    };
    BuildInstructionComponent.prototype.setStep = function (value) {
        console.log(value);
        global_1.BuildStepNow.BuildStep.Id = value.Id;
        global_1.BuildStepNow.BuildStep.Elements = value.Elements;
        global_1.BuildStepNow.BuildStep.DataTimeChange = value.DataTimeChange;
        global_1.BuildStepNow.BuildStep.InstructionId = value.InstructionId;
        global_1.BuildStepNow.BuildStep.Name = value.Name;
        global_1.BuildStepNow.BuildStep.Number = value.Number;
    };
    BuildInstructionComponent.prototype.GetStep = function () {
        var _this = this;
        this._userService.getItem(global_1.Global.BASE_BUILDSTEP_ENDPOINT, global_1.BuildStepNow.buildStep)
            .subscribe(function (stepT) {
            _this.setStep(stepT);
            console.log("OK->Get_step");
            console.log(global_1.BuildStepNow.BuildStep);
        }, function (error) {
            return console.log(error);
        });
    };
    BuildInstructionComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/buildInstruction.component.html',
            viewProviders: [ng2_dragula_1.DragulaService],
            styleUrls: ['./app/Components/example.css']
            //styleUrls: ['./app/Components/account.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService, router_1.Router,
            ng2_dragula_1.DragulaService])
    ], BuildInstructionComponent);
    return BuildInstructionComponent;
}());
exports.BuildInstructionComponent = BuildInstructionComponent;
//# sourceMappingURL=buildInstruction.component.js.map