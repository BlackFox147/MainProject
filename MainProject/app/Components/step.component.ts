import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Global, LoginUserAccount, BuildInstructionNow } from '../Shared/global';
import { ILogin } from '../Model/login';
import { UserService } from '../Service/user.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Instruction } from '../Model/instruction';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Step } from '../Model/step';


@Component({
    templateUrl: 'app/Components/step.component.html',
    viewProviders: [DragulaService],
    styleUrls: ['./app/Components/example.css']
   
    //styleUrls: ['./app/Components/account.component.css']
})
export class StepComponent {

    private onDropModel(args: any) {
        let [el, target, source] = args;
        // do something else
    }

    private onRemoveModel(args: any) {
        let [el, source] = args;
        // do something else
    }

    constructor(private http: Http, private _userService: UserService, private router: Router,
        private dragulaService: DragulaService) {

        dragulaService.dropModel.subscribe((value: any) => {
            this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe((value: any) => {
            this.onRemoveModel(value.slice(1));
        });
    
    }

    //BuildInstructionData: Instruction = BuildInstructionNow.BuildInstruction;
}