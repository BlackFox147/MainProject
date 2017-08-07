import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Global, LoginUserAccount } from '../Shared/global';
import { UserService } from '../Service/user.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Instruction } from '../Model/instruction';
import { Step } from '../Model/step';
import { Element } from '../Model/element';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: 'app/Components/viewStep.component.html',

    styleUrls: ['./app/Components/viewStep.component.css']
})
export class ViewStepComponent {

    BuildStepData: Step = new Step(0, 0, 0, "");

   
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

    GetStep(): void {
        this._userService.getItem(Global.BASE_BUILDSTEP_ENDPOINT, this.id)
            .subscribe(stepT => {
                this.BuildStepData = stepT;
                this.BuildStepData.Elements = this.BuildStepData.Elements.sort((n1, n2) => n1.Number - n2.Number);
                //this.setStep(stepT);
                console.log("OK->Get_step");
                console.log(this.BuildStepData);
            },
            error =>
                console.log(error));
    }

    Stert(): boolean {
        //var temp: Instruction = new Instruction(0, 0, "");
        this.GetStep();

        return true;
    }

    id: number;
    private subscription: Subscription;


    constructor(private http: Http, private _userService: UserService, private router: Router,
        private sanit: DomSanitizer, private activateRoute: ActivatedRoute) {

        this.subscription = activateRoute.params.subscribe(params => {
            this.id = params['id'];
            this.Stert();
        });

        this.sanit = sanit;
    }

    videoURL(elem: Element) {
        //return elem.Data
        return this.sanit.bypassSecurityTrustResourceUrl(elem.Data);
    }

}