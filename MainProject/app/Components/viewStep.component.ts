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
import { SlimLoadingBarComponent, SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    templateUrl: 'app/Components/viewStep.component.html',

    styleUrls: ['./app/Components/viewStep.component.css']
})
export class ViewStepComponent {

    BuildStepData: Step = new Step(0, 0, 0, "");

  
    GetStep(): void {
        this._userService.getItem(Global.BASE_BUILDSTEP_ENDPOINT, this.id)
            .subscribe(stepT => {
                this.BuildStepData = stepT;
                this.BuildStepData.Elements = this.BuildStepData.Elements.sort((n1, n2) => n1.Number - n2.Number);
                //this.setStep(stepT);
                console.log("OK->Get_step");
                console.log(this.BuildStepData);
                this.slimLoader.complete();
            },
            error => {
                console.log(error);
                this.slimLoader.complete();
            }
            );
    }

    Stert(): boolean {
        //var temp: Instruction = new Instruction(0, 0, "");
        this.slimLoader.start();
        this.GetStep();

        return true;
    }

    id: number;
    private subscription: Subscription;


    constructor(private http: Http, private _userService: UserService, private router: Router,
        private sanit: DomSanitizer, private activateRoute: ActivatedRoute, private slimLoader: SlimLoadingBarService) {

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
        
    OpenInstruction(id: number): void {

        this.router.navigate(['viewInstruction', id]);
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


}