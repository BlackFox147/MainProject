import { Component, ViewChild, OnDestroy } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Global, LoginUserAccount } from '../Shared/global';

import { UserService } from '../Service/user.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { Instruction } from '../Model/instruction';

import { Step } from '../Model/step';
import { Element } from '../Model/element';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SlimLoadingBarComponent, SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    templateUrl: 'app/Components/viewInstruction.component.html',
    styleUrls: ['./app/Components/example.css']
    //styleUrls: ['./app/Components/account.component.css']
})
export class ViewInstructionComponent {

    private id: number;
    private subscription: Subscription;

    constructor(private http: Http, private _userService: UserService, private router: Router,
        private activateRoute: ActivatedRoute, private slimLoader: SlimLoadingBarService) {
        this.subscription = activateRoute.params.subscribe(params => {
            this.id = params['id'];

            this.Stert();
        });
        console.log("id " + this.id);
       
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        this.runSlimLoader();        
        //this.LoadUsers();        
    }

    runSlimLoader() {
        this.slimLoader.start();
        setTimeout(() => {
            this.slimLoader.complete();
        }, 500);
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
        this.slimLoader.start();
        this.GetInstruction();

        return true;
    }

    GetInstruction(): void {
        var temp: Instruction = new Instruction(0, 0, "");
        var test = this.id;

        this._userService.getItem(Global.BASE_BUILDINSTRUCTION_ENDPOINT, test)
            .subscribe(instruction => {

                this.BuildInstructionData = instruction;
                this.BuildInstructionData.Steps = this.BuildInstructionData.Steps.sort((n1, n2) => n1.Number - n2.Number);
                //this.setInstruction(instruction);

                this.slimLoader.complete();
            },
            error => {
                this.slimLoader.complete();
                console.log(error);
            });

    }

    Open(id: number): void {
       
        this.router.navigate(['viewStep', id]);       
    }

    OpenUser(id: number): void {

        this.router.navigate(['viewUser', id]);
    }

}