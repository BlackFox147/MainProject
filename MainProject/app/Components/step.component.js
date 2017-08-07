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
var ng2_dragula_1 = require("ng2-dragula/ng2-dragula");
var step_1 = require("../Model/step");
var element_1 = require("../Model/element");
var platform_browser_1 = require("@angular/platform-browser");
var router_2 = require("@angular/router");
var StepComponent = (function () {
    function StepComponent(http, _userService, router, dragulaService, sanit, activateRoute) {
        var _this = this;
        this.http = http;
        this._userService = _userService;
        this.router = router;
        this.dragulaService = dragulaService;
        this.sanit = sanit;
        this.activateRoute = activateRoute;
        this.BuildStepData = new step_1.Step(0, 0, 0, "");
        this.markdownContent = "## Markdown content data";
        //trackByIndex(index: number, value: number) {
        //    return index;
        //}
        this.develop = true;
        this.subscription = activateRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.Stert();
        });
        //this.id = activateRoute.snapshot.params['id'];
        console.log("id " + this.id);
        dragulaService.dropModel.subscribe(function (value) {
            _this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe(function (value) {
            _this.onRemoveModel(value.slice(1));
        });
        //this.BuildStepData.Elements[0].Materials[0].Data
        this.sanit = sanit;
    }
    StepComponent.prototype.onDropModel = function (args) {
        var el = args[0], target = args[1], source = args[2];
        // do something else
    };
    StepComponent.prototype.onRemoveModel = function (args) {
        var el = args[0], source = args[1];
        // do something else
    };
    //setStep(value: Step): void {
    //    value.Elements = value.Elements.sort((n1, n2) => n1.Number - n2.Number); 
    //    BuildStepNow.BuildStep.Id = value.Id;
    //    //BuildStepNow.BuildStep.ImageName = value.ImageName;
    //    BuildStepNow.BuildStep.Elements = value.Elements;
    //    BuildStepNow.BuildStep.DataTimeChange = value.DataTimeChange;
    //    BuildStepNow.BuildStep.InstructionId = value.InstructionId;
    //    BuildStepNow.BuildStep.Name = value.Name;
    //    BuildStepNow.BuildStep.Number = value.Number;
    //}
    StepComponent.prototype.GetStep = function () {
        var _this = this;
        this._userService.getItem(global_1.Global.BASE_BUILDSTEP_ENDPOINT, this.id)
            .subscribe(function (stepT) {
            _this.BuildStepData = stepT;
            _this.BuildStepData.Elements = _this.BuildStepData.Elements.sort(function (n1, n2) { return n1.Number - n2.Number; });
            //this.setStep(stepT);
            console.log("OK->Get_step");
            console.log(_this.BuildStepData);
        }, function (error) {
            return console.log(error);
        });
    };
    StepComponent.prototype.Stert = function () {
        //var temp: Instruction = new Instruction(0, 0, "");
        this.GetStep();
        return true;
    };
    StepComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    StepComponent.prototype.Test = function () {
        console.log(this.BuildStepData.Elements);
    };
    StepComponent.prototype.onChange = function (text, i) {
        console.log(text);
        this.BuildStepData.Elements[i].Data = text;
        this._userService.put(global_1.Global.BASE_BUILDELEMENT_ENDPOINT, this.BuildStepData.Elements[i].Id, this.BuildStepData.Elements[i]).subscribe(function (data) {
            if (data == 1) {
                //this.msg = "Data successfully updated.";         
                console.log("OK->textCange");
            }
            else {
                //this.msg = "There is some issue in saving records, please contact to system administrator!"
                console.log("NO->textCange");
            }
        }, function (error) {
            console.log(error);
            //this.msg = error;
        });
        console.log(this.BuildStepData.Elements[i]);
    };
    StepComponent.prototype.Develop = function () {
        this.develop = true;
        console.log(this.develop);
    };
    StepComponent.prototype.View = function () {
        this.develop = false;
        console.log(this.develop);
    };
    StepComponent.prototype.onChangeName = function () {
        this._userService.put(global_1.Global.BASE_BUILDSTEP_ENDPOINT, this.BuildStepData.Id, this.BuildStepData).subscribe(function (data) {
            if (data == 1) {
                //this.msg = "Data successfully updated.";         
                console.log("OK->S");
            }
            else {
                //this.msg = "There is some issue in saving records, please contact to system administrator!"
                console.log("NO->S");
            }
        }, function (error) {
            console.log(error);
            //this.msg = error;
        });
        console.log(this.BuildStepData.Name);
    };
    StepComponent.prototype.addElement = function () {
        this.modalTitle = "Create new Step";
        this.modalBtnTitle = "Create";
        this.create = true;
    };
    StepComponent.prototype.Cancel = function () {
        this.create = false;
    };
    StepComponent.prototype.Create = function (type) {
        var _this = this;
        this._userService.post(global_1.Global.BASE_BUILDSTEP_ENDPOINT, new element_1.Element(0, this.BuildStepData.Id, type, this.BuildStepData.Elements.length)).subscribe(function (data) {
            if (data == 1) {
                //this.msg = "Data successfully updated.";
                console.log("OK->Step");
            }
            else {
                //this.msg = "There is some issue in saving records, please contact to system administrator!"
                console.log("NO->step");
            }
            _this.GetStep();
        }, function (error) {
            console.log(error);
            //this.msg = error;
        });
        this.create = false;
    };
    StepComponent.prototype.Delete = function (elementId) {
        var _this = this;
        this._userService.delete(global_1.Global.BASE_BUILDSTEP_ENDPOINT, elementId).subscribe(function (data) {
            console.log("Good del");
            _this.GetStep();
        }, function (error) {
            console.log(error);
        });
    };
    StepComponent.prototype.Save = function () {
        this.BuildStepData.Elements.forEach(function (step, index) {
            step.Number = index + 1;
        });
        this._userService.put(global_1.Global.BASE_BUILDSTEP_ENDPOINT, this.BuildStepData.Id, this.BuildStepData).subscribe(function (data) {
            if (data == 1) {
                //this.msg = "Data successfully updated.";         
                console.log("OK->S");
            }
            else {
                //this.msg = "There is some issue in saving records, please contact to system administrator!"
                console.log("NO->S");
            }
        }, function (error) {
            console.log(error);
            //this.msg = error;
        });
    };
    //ImageChange(ImageName: string): void {
    //    this.BuildStepData.ImageName = ImageName;       
    //    this._userService.put(Global.BASE_BUILDSTEP_ENDPOINT, this.BuildStepData.Id, this.BuildStepData).subscribe(
    //        data => {
    //            if (data == 1) //Success
    //            {
    //                //this.msg = "Data successfully updated.";         
    //                console.log("OK->S");
    //            }
    //            else {
    //                //this.msg = "There is some issue in saving records, please contact to system administrator!"
    //                console.log("NO->S");
    //            }
    //        },
    //        error => {
    //            console.log(error);
    //            //this.msg = error;
    //        }
    //    );    
    //    console.log("image");
    //}
    StepComponent.prototype.AddImage = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            var headers = new http_1.Headers();
            //headers.append('Content-Type', 'json');  
            //headers.append('Accept', 'application/json');  
            var options = new http_1.RequestOptions({ headers: headers });
            // let apiUrl1 = "api/uploadfileapi/";
            this.http.post(global_1.Global.BASE_BUILDELEMENT_ENDPOINT, formData, options)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return Rx_1.Observable.throw(error); })
                .subscribe(function (data) {
                console.log('success');
                _this.BuildStepData = data;
                _this.BuildStepData.Elements = _this.BuildStepData.Elements.sort(function (n1, n2) { return n1.Number - n2.Number; });
                //this.setStep(data);
                //this.router.navigate(['account']);
            }, function (error) { return console.log(error); });
        }
    };
    StepComponent.prototype.videoURL = function (elem) {
        //return elem.Data
        return this.sanit.bypassSecurityTrustResourceUrl(elem.Data);
    };
    StepComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/step.component.html',
            viewProviders: [ng2_dragula_1.DragulaService],
            styleUrls: ['./app/Components/step.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService, router_1.Router,
            ng2_dragula_1.DragulaService, platform_browser_1.DomSanitizer, router_2.ActivatedRoute])
    ], StepComponent);
    return StepComponent;
}());
exports.StepComponent = StepComponent;
//# sourceMappingURL=step.component.js.map