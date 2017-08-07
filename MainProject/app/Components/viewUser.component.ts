import { Component, ViewChild, OnDestroy } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Global, LoginUserAccount } from '../Shared/global';

import { UserService } from '../Service/user.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { Instruction } from '../Model/instruction';
import { UserProfile } from '../Model/profile';
import { Step } from '../Model/step';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SlimLoadingBarComponent, SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    templateUrl: 'app/Components/viewUser.component.html',
    styleUrls: ['./app/Components/account.component.css']
})
export class ViewUserComponent {

    private id: number;
    private subscription: Subscription;
   
    create: boolean;

    private isUploadBtn: boolean = true;
    constructor(private http: Http, private _userService: UserService, private router: Router,
        private activateRoute: ActivatedRoute, private slimLoader: SlimLoadingBarService) {
        this.subscription = activateRoute.params.subscribe(params => {
            this.id = params['id'];

            this.Stert();
        });
    }

    UserProfileData: UserProfile = new UserProfile(0, 0, "", "", "", null);

    Stert(): boolean {
        //var temp: Instruction = new Instruction(0, 0, "");
        this.slimLoader.start();
        this.GetInstruction();
        return true;
    }

    GetInstruction(): void {
       
        var test = this.id;
        console.log("test1 " + test);
        this._userService.getItem(Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, test)
            .subscribe(profile => {

                console.log(profile);

                this.UserProfileData = profile;

                console.log("OK->Get_Instruction");
                console.log(this.UserProfileData.Instructions);
                this.slimLoader.complete();
            },
            error => {
                console.log(error);
                this.slimLoader.complete();
            }
            );       

    }
  

    OpenInstruction(instructionId: number): void {
        this.router.navigate(['viewInstruction', instructionId]);
    }



    Open(id: number): void {
        this.router.navigate(['viewStep', id]);
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