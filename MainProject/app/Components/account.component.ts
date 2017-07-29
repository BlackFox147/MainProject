//import { Component } from "@angular/core";

//@Component({
//   templateUrl: 'app/Components/account.component.html'
//})

//export class AccountComponent {

//    qqq: ILogin = Asd.Mabe.getparams();
//}

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


@Component({
    templateUrl: 'app/Components/account.component.html',
    styleUrls: ['./app/Components/account.component.css']
})
export class AccountComponent {

    @ViewChild('modal') modal: ModalComponent;
    modalTitle: string;
    modalBtnTitle: string;

    
    private isUploadBtn: boolean = true;
    constructor(private http: Http, private _userService: UserService, private router: Router) {
    }  

    
    LoginUserAccountData: ILogin = LoginUserAccount.userData.getparams();

    onChange(): void {
        this._userService.put(Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, this.LoginUserAccountData.Profile.Id, this.LoginUserAccountData.Profile).subscribe(
            data => {
                if (data == 1) //Success
                {
                    //this.msg = "Data successfully updated.";         
                    console.log("OK->");        

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

    }



    LoadUserInstruction(): void {       
        this._userService.get(Global.BASE_CHANGE_USER_PROFILE_ENDPOINT)
            .subscribe(instructions => {                
                LoginUserAccount.userData.setInstructions(instructions);
                console.log("OK->Get_Instruction"); 
                console.log(this.LoginUserAccountData.Profile.Instructions);
            },
            error => 
                console.log(error));                                   
    }

    addInstruction() {
        this.modalTitle = "Create new Instruction";
        this.modalBtnTitle = "Create";
        this.modal.open();
    }

    Create(instructionName: string): void {
        this._userService.post(Global.BASE_CHANGE_USER_PROFILE_ENDPOINT, new Instruction(0, 0, instructionName,0,null)).subscribe(
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
        this.modal.dismiss();
    }

    BuildInstruction(instructionId: number): void {
        BuildInstructionNow.buildInstruction = instructionId;
        console.log(BuildInstructionNow.buildInstruction);
        this.router.navigate(['buildInstruction']);
    }






    fileChange(event:any) {
        debugger;
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



}