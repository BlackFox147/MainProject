import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Global, LoginUserAccount} from '../Shared/global';
import { ILogin } from '../Model/login';
import { UserService } from '../Service/user.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';  
import { Router } from '@angular/router'; 

import { Instruction } from '../Model/instruction';
import { Step } from '../Model/step';


@Component({
    templateUrl: 'app/Components/account.component.html',
    styleUrls: ['./app/Components/account.component.css']
})
export class AccountComponent {


    modalTitle: string;
    modalBtnTitle: string;
    create: boolean;
    
    private isUploadBtn: boolean = true;
    constructor(private http: Http, private _userService: UserService, private router: Router) {
    }  

    
    LoginUserAccountData: ILogin = this.Stert();


    onChange(): void {
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
                //this.LoginUserAccountData.Profile = data;
            },
            error => {
                console.log(error);
                //this.msg = error;
            }
        );    

    }
    Stert(): ILogin{
        this.LoginUserAccountData = LoginUserAccount.userData.getparams();
        this.LoadUserInstruction();
        return LoginUserAccount.userData.getparams();
    }


    
    

    LoadUserInstruction():void {       
       
        this._userService.getItem(Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, LoginUserAccount.userData.getProfile().Id)
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
        this._userService.post(Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, new Instruction(0, 0, instructionName)).subscribe(
            data => {
                if (data == 1) //Success
                {
                    //this.msg = "Data successfully updated.";
                    console.log("OK->Instruction"); 
                    this.LoadUserInstruction();                   

                }
                else {
                    //this.msg = "There is some issue in saving records, please contact to system administrator!"
                    console.log("NO->");
                }


            },
            error => {
                console.log(error);
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



    //setInstruction(value: Instruction): void {
    //    value.Steps = value.Steps.sort((n1, n2) => n1.Number - n2.Number);
    //    BuildInstructionNow.BuildInstruction.DataTimeChange = value.DataTimeChange;
    //    BuildInstructionNow.BuildInstruction.Steps = value.Steps;
    //    BuildInstructionNow.BuildInstruction.Id = value.Id;
    //    BuildInstructionNow.BuildInstruction.Name = value.Name;
    //    BuildInstructionNow.BuildInstruction.UserProfileId = value.UserProfileId;
    //    //BuildInstructionNow.BuildInstruction.ImageName = value.ImageName;
    //}

    //GetInstruction(): void {
    //    this._userService.getItem(Global.BASE_BUILDINSTRUCTION_ENDPOINT, BuildInstructionNow.buildInstruction)
    //        .subscribe(instruction => {

    //            this.setInstruction(instruction);
    //            console.log("OK->Get_step");
    //            console.log(BuildInstructionNow.BuildInstruction);
    //        },
    //        error =>
    //            console.log(error));      
    //}


    fileChange(event:any) {

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

            //this._userService.post(apiUrl1, formData).subscribe(
            //    data => {
            //        if (data == 1) //Success
            //        {
            //            console.log('success');                        
            //            console.log(LoginUserAccountData.Mabe.getparams());
            //        }
            //        else {
            //            console.log('error');  
            //        }
            //    },
            //    error => {
            //        console.log(error);
            //    }
            //);

            this.http.post(apiUrl1, formData, options)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                data => {
                    console.log('success');
                    this.LoginUserAccountData.Profile.UserImageName = file.name;
                    this.router.navigate(['account']);
                },
                error => console.log(error)
                )
        }
       // window.location.reload();
    }  


    Delete(instructionId: number): void {
        this._userService.delete(Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, instructionId).subscribe(
            data => {
                if (data == 1) //Success
                {
                    console.log("Good del");
                    this.LoadUserInstruction();  
                    
                }
                else {
                    console.log("No del");
                }
            
            },
            error => {
                console.log(error);
            }
        );
    }

    Open(id: number): void {

        this.router.navigate(['step', id]);
    }

    onChangeUserName(): void {
        this.LoginUserAccountData.Profile.Instructions.forEach(instruction => {
            instruction.UserName = this.LoginUserAccountData.Profile.UserName;
        });
        this.onChange();
    }
}