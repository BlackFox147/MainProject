"use strict";
//import { Component, ViewChild } from '@angular/core';
//import { NgModel } from '@angular/forms';
//import { Global, LoginUserAccount, BuildInstructionNow } from '../Shared/global';
//import { ILogin } from '../Model/login';
//import { UserService } from '../Service/user.service';
//import { Http, RequestOptions, Headers, Response } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
//import { Router } from '@angular/router';
//import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
//import { Instruction } from '../Model/instruction';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//@Component({
//    templateUrl: 'app/Components/buildInstruction.component.html',
//    //styleUrls: ['./app/Components/account.component.css']
//})
//export class BuildInstructionComponent {
//    constructor(private http: Http, private _userService: UserService, private router: Router) {
//        //LoginUserAccount.userData.getProfile().Instructions.forEach(instructin => {
//        //    if (instructin.Id == BuildInstructionNow.buildInstruction) {
//        //        BuildInstructionData = instructin;
//        //        console.log(BuildInstructionData);
//        //    }
//        //})
//    }
//    BuildInstructionData = LoginUserAccount.userData.getInstrustion();
//    Test():void {
//        console.log(this.BuildInstructionData);
//        this.BuildInstructionData.Name = "Axaxaxa";
//        console.log(LoginUserAccount.userData.getInstrustion());
//    }
//}
var core_1 = require("@angular/core");
var ng2_dragula_1 = require("ng2-dragula/ng2-dragula");
var BuildInstructionComponent = (function () {
    function BuildInstructionComponent() {
    }
    BuildInstructionComponent = __decorate([
        core_1.Component({
            template: "<label for=\"hy\">There are plenty of events along the lifetime of a drag event. all of them in the docs!</label>\n    <div class=\"wrapper\">\n        <div class=\"container\" [dragula]=\"'second-bag'\">\n            <div>As soon as you start dragging an element, a <code>drag</code> event is fired</div>\n            <div>Whenever an element is cloned because <code>copy: true</code>, a <code>cloned</code> event fires</div>\n            <div>The <code>shadow</code> event fires whenever the placeholder showing where an element would be dropped is moved to a different container or position</div>\n            <div>A <code>drop</code> event is fired whenever an element is dropped anywhere other than its origin <em>(where it was initially dragged from)</em></div>\n        </div>\n        <div class=\"container\" [dragula]=\"'second-bag'\">\n            <div>If the element gets removed from the DOM as a result of dropping outside of any containers, a <code>remove</code> event gets fired</div>\n            <div>A <code>cancel</code> event is fired when an element would be dropped onto an invalid target, but retains its original placement instead</div>\n            <div>The <code>over</code> event fires when you drag something over a container, and <code>out</code> fires when you drag it away from the container</div>\n            <div>Lastly, a <code>dragend</code> event is fired whenever a drag operation ends, regardless of whether it ends in a cancellation, removal, or drop</div>\n        </div>\n    </div>\n    ",
            viewProviders: [ng2_dragula_1.DragulaService],
            styles: ["\n    .wrapper {\n      display: table;\n    }\n    .container {\n      display: table-cell;\n      background-color: rgba(255, 255, 255, 0.2);\n      width: 50%;\n    }\n    .container:nth-child(odd) {\n      background-color: rgba(0, 0, 0, 0.2);\n    }\n    .container div,\n    .gu-mirror {\n      margin: 10px;\n      padding: 10px;\n      background-color: rgba(0, 0, 0, 0.2);\n      transition: opacity 0.4s ease-in-out;\n    }\n    .container div {\n      cursor: move;\n      cursor: grab;\n      cursor: -moz-grab;\n      cursor: -webkit-grab;\n    }\n    .gu-mirror {\n      cursor: grabbing;\n      cursor: -moz-grabbing;\n      cursor: -webkit-grabbing;\n    }\n    "]
        })
    ], BuildInstructionComponent);
    return BuildInstructionComponent;
}());
exports.BuildInstructionComponent = BuildInstructionComponent;
//# sourceMappingURL=buildInstruction.component.js.map