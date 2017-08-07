import { Component, ViewChild, OnDestroy } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Global, LoginUserAccount } from '../Shared/global';
import { ILogin } from '../Model/login';
import { UserService } from '../Service/user.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { Instruction } from '../Model/instruction';

import { Step } from '../Model/step';
import { Element } from '../Model/element';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: 'app/Components/viewInstruction.component.html',
    styleUrls: ['./app/Components/example.css']
    //styleUrls: ['./app/Components/account.component.css']
})
export class ViewInstructionComponent {

    private id: number;
    private subscription: Subscription;

    constructor(private http: Http, private _userService: UserService, private router: Router,
        private activateRoute: ActivatedRoute) {
        this.subscription = activateRoute.params.subscribe(params => {
            this.id = params['id'];
            this.Stert();
        });
        console.log("id " + this.id);
       
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    BuildInstructionData: Instruction = new Instruction(0, 0, "");

    setInstruction(value: Instruction): void {
        value.Steps = value.Steps.sort((n1, n2) => n1.Number - n2.Number);
        this.BuildInstructionData.DataTimeChange = value.DataTimeChange;
        this.BuildInstructionData.Steps = value.Steps;

        //BuildInstructionNow.BuildInstruction.ImageName = value.ImageName;
    }

    Stert(): boolean {
        //var temp: Instruction = new Instruction(0, 0, "");
        this.GetInstruction();

        return true;
    }

    GetInstruction(): void {
        var temp: Instruction = new Instruction(0, 0, "");
        var test = this.id;
        console.log("test1 " + test);
        this._userService.getItem(Global.BASE_BUILDINSTRUCTION_ENDPOINT, test)
            .subscribe(instruction => {
                console.log("test " + test);
                this.BuildInstructionData = instruction;
                this.BuildInstructionData.Steps = this.BuildInstructionData.Steps.sort((n1, n2) => n1.Number - n2.Number);
                //this.setInstruction(instruction);
                console.log("OK->Get_step");
                console.log(this.BuildInstructionData);
            },
            error =>
                console.log(error));

    }

    Open(id: number): void {
       
        this.router.navigate(['viewStep', id]);
       
    }
}