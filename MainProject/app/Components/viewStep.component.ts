import { Component, ViewChild } from '@angular/core';
import { Global, LoginUserAccount, BuildInstructionNow, BuildStepNow } from '../Shared/global';
import { UserService } from '../Service/user.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Instruction } from '../Model/instruction';
import { Step } from '../Model/step';
import { Element } from '../Model/element';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: 'app/Components/viewStep.component.html',

    styleUrls: ['./app/Components/viewStep.component.css']
})
export class ViewStepComponent {

    BuildStepData: Step = this.GetStep();

   
    setStep(value: Step): void {
        value.Elements = value.Elements.sort((n1, n2) => n1.Number - n2.Number);
        
        BuildStepNow.BuildStep.Id = value.Id;
        //BuildStepNow.BuildStep.ImageName = value.ImageName;
        BuildStepNow.BuildStep.Elements = value.Elements;
        BuildStepNow.BuildStep.DataTimeChange = value.DataTimeChange;
        BuildStepNow.BuildStep.InstructionId = value.InstructionId;
        BuildStepNow.BuildStep.Name = value.Name;
        BuildStepNow.BuildStep.Number = value.Number;
    }

    GetStep(): Step {
        this._userService.getItem(Global.BASE_BUILDSTEP_ENDPOINT, BuildStepNow.buildStep)
            .subscribe(stepT => {

                this.setStep(stepT);
                console.log("OK->Get_step");
                console.log(BuildStepNow.BuildStep);
            },
            error =>
                console.log(error));

        return BuildStepNow.BuildStep;
    }


    constructor(private http: Http, private _userService: UserService, private router: Router,
        private sanit: DomSanitizer) {

        this.sanit = sanit;
    }

    videoURL(elem: Element) {
        //return elem.Data
        return this.sanit.bypassSecurityTrustResourceUrl(elem.Data);
    }

}