import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Global, LoginUserAccount } from '../Shared/global';

import { UserService } from '../Service/user.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { Instruction } from '../Model/instruction';
import { Step } from '../Model/step';
import { IUser } from '../Model/user';
import { SlimLoadingBarComponent, SlimLoadingBarService } from 'ng2-slim-loading-bar';
@Component({
    templateUrl: 'app/Components/account.component.html',
    styleUrls: ['./app/Components/account.component.css']
})
export class AccountComponent {


    modalTitle: string;
    modalBtnTitle: string;
    create: boolean;

    private isUploadBtn: boolean = true;
    constructor(private http: Http, private _userService: UserService, private router: Router,
        private slimLoader: SlimLoadingBarService) {

    }


    LoginUserAccountData: IUser = new IUser("", "");

    ngOnInit(): void {
        this.runSlimLoader();
        this.LoginUserAccountData = this.Stert();
        //this.LoadUsers();        
    }

    runSlimLoader() {
        this.slimLoader.start();
        setTimeout(() => {
            this.slimLoader.complete();
        }, 500);
    }

    onChange(): void {
        this.slimLoader.start();
        this._userService.put(Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, this.LoginUserAccountData.Profile.Id, this.LoginUserAccountData.Profile).subscribe(
            data => {
                //if (data == 1) //Success
                //{
                //    //this.msg = "Data successfully updated.";         
                //    console.log("OK->");        

                //}
                //else {
                //    //this.msg = "There is some issue in saving records, please contact to system administrator!"
                //    console.log("NO->");
                //}
                console.log("OK->");
                this.slimLoader.complete();
                //this.LoginUserAccountData.Profile = data;
            },
            error => {
                console.log(error);
                this.slimLoader.complete();
                //this.msg = error;
            }
        );

    }
    Stert(): IUser {
        this.LoginUserAccountData = LoginUserAccount.userData;
        this.LoadUserInstruction();
        return LoginUserAccount.userData;
    }





    LoadUserInstruction(): void {

        this._userService.getItem(Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, LoginUserAccount.userData.Id)
            .subscribe(profile => {

                console.log(profile);

                this.LoginUserAccountData.Profile = profile;
                //LoginUserAccount.userData.setProfile(profile);
                //LoginUserAccount.userData.setInstructions(profile.Instructions);
                console.log("OK->Get_Instruction");
                console.log(this.LoginUserAccountData.Profile.Instructions);
            },
            error =>
                console.log(error));
    }

    addInstruction() {
        this.modalTitle = "Create new Instruction";
        this.modalBtnTitle = "Create";
        this.create = true;
    }

    Cancel(): void {
        this.create = false;
    }

    Create(instructionName: string): void {
        this.slimLoader.start();
        this._userService.post(Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, new Instruction(0, 0, instructionName)).subscribe(
            data => {
                if (data == 1) //Success
                {
                    //this.msg = "Data successfully updated.";
                    console.log("OK->Instruction");
                    this.LoadUserInstruction();
                    this.slimLoader.complete();
                }
                else {
                    //this.msg = "There is some issue in saving records, please contact to system administrator!"
                    console.log("NO->");
                    this.slimLoader.complete();
                }


            },
            error => {
                console.log(error);
                this.slimLoader.complete();
                //this.msg = error;
            }
        );
        this.create = false;
    }

    BuildInstruction(instructionId: number): void {
        //BuildInstructionNow.buildInstruction = instructionId;
        //console.log(BuildInstructionNow.buildInstruction);
        //this.GetInstruction();
        this.router.navigate(['buildInstruction', instructionId]);
    }


    fileChange(event: any) {
        this.slimLoader.start();
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            let headers = new Headers()
            //headers.append('Content-Type', 'json');  
            //headers.append('Accept', 'application/json');  
            let options = new RequestOptions({ headers: headers });
            let apiUrl1 = "api/uploadfileapi/";



            this.http.post(apiUrl1, formData, options)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                data => {
                    console.log('success');
                    this.LoginUserAccountData.Profile.UserImageName = file.name;
                    this.slimLoader.complete();
                    //this.router.navigate(['account']);
                },
                error => {
                    console.log(error);
                    this.slimLoader.complete();
                }
                );
        }
        else {
            this.slimLoader.complete();
        }

    }


    Delete(instructionId: number): void {
        this.slimLoader.start();
        this._userService.delete(Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, instructionId).subscribe(
            data => {
                if (data == 1) //Success
                {
                    console.log("Good del");
                    this.LoadUserInstruction();
                    this.slimLoader.complete();
                }
                else {
                    console.log("No del");
                    this.slimLoader.complete();
                }

            },
            error => {
                console.log(error);
                this.slimLoader.complete();
            }
        );

    }

    Open(id: number): void {

        this.router.navigate(['step', id]);
    }

    OpenUser(id: number): void {

        this.router.navigate(['viewUser', id]);
    }

    onChangeUserName(): void {
        this.LoginUserAccountData.Profile.Instructions.forEach(instruction => {
            instruction.UserName = this.LoginUserAccountData.Profile.UserName;
        });
        this.onChange();
    }
}