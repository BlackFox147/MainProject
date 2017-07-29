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

import { Component } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
   
    template: `<label for="hy">There are plenty of events along the lifetime of a drag event. all of them in the docs!</label>
    <div class="wrapper">
        <div class="container" [dragula]="'second-bag'">
            <div>As soon as you start dragging an element, a <code>drag</code> event is fired</div>
            <div>Whenever an element is cloned because <code>copy: true</code>, a <code>cloned</code> event fires</div>
            <div>The <code>shadow</code> event fires whenever the placeholder showing where an element would be dropped is moved to a different container or position</div>
            <div>A <code>drop</code> event is fired whenever an element is dropped anywhere other than its origin <em>(where it was initially dragged from)</em></div>
        </div>
        <div class="container" [dragula]="'second-bag'">
            <div>If the element gets removed from the DOM as a result of dropping outside of any containers, a <code>remove</code> event gets fired</div>
            <div>A <code>cancel</code> event is fired when an element would be dropped onto an invalid target, but retains its original placement instead</div>
            <div>The <code>over</code> event fires when you drag something over a container, and <code>out</code> fires when you drag it away from the container</div>
            <div>Lastly, a <code>dragend</code> event is fired whenever a drag operation ends, regardless of whether it ends in a cancellation, removal, or drop</div>
        </div>
    </div>
    `,
    viewProviders: [DragulaService],
    styles: [`
    .wrapper {
      display: table;
    }
    .container {
      display: table-cell;
      background-color: rgba(255, 255, 255, 0.2);
      width: 50%;
    }
    .container:nth-child(odd) {
      background-color: rgba(0, 0, 0, 0.2);
    }
    .container div,
    .gu-mirror {
      margin: 10px;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      transition: opacity 0.4s ease-in-out;
    }
    .container div {
      cursor: move;
      cursor: grab;
      cursor: -moz-grab;
      cursor: -webkit-grab;
    }
    .gu-mirror {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }
    `]
})

export class BuildInstructionComponent { }