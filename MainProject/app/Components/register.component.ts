import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IUser } from '../Model/user';


import { Observable } from 'rxjs/Rx';
import { Global, LoginUserAccount } from '../Shared/global';
import { SlimLoadingBarComponent, SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { UserProfile } from '../Model/profile';
import { Router } from '@angular/router';       //!!!

@Component({
    templateUrl: 'app/Components/register.component.html',
    styleUrls: ['./app/Components/register.component.css']
})

export class RegisterComponent {

    users: IUser[];
    user: IUser;
    msg: string;
    indLoading: boolean = false;

    modalTitle: string;
    modalBtnTitle: string;
    info: string = "Start";
    activeUrl: string; 


    constructor( private _userService: UserService,
        private router: Router, private slimLoader: SlimLoadingBarService) {       //!!!
    }
    
    runSlimLoader() {
        this.slimLoader.start();
        setTimeout(() => {
            this.slimLoader.complete();
        }, 500);
    }


    ngOnInit(): void {
        this.runSlimLoader();       
        //this.LoadUsers();        
    }

    LoadOneUsers(): void {
        this.indLoading = true;
        this._userService.get(this.activeUrl)
            .subscribe(user => {
                console.log(user);

                LoginUserAccount.userData.Id = user.Id;
                LoginUserAccount.userData.Profile = user.Profile;
             
            },
            error => this.msg = <any>error);

    }

    onSubmit(register_email: string, register_password: string, register_cpassword: string) {

        this.slimLoader.start();
        this.msg = "";

        var required = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
        
        if (!required.test(register_email)) {
            this.msg = "Email isn't correct";
            console.log("wrong email");
            this.slimLoader.complete();
            return;            
        }

        this.activeUrl = Global.BASE_REGISTER_ENDPOINT;
        if (register_password != register_cpassword) {
            this.msg = "ConformPassword isn't correct";
            console.log("No ConformPassword");
            this.slimLoader.complete();
            return;
        }
        
        this._userService.post(this.activeUrl, new IUser(register_email, register_password)).subscribe(
            data => {
                if (data == 1) //Success
                {
                    this.msg = "Data successfully added.";
                    this.LoadOneUsers();
                    //console.log(LoginUserAccount.userData.getparams());
                    this.slimLoader.complete();
                    this.router.navigate(['/']); 
                }                
                else {
                    this.slimLoader.complete();
                    this.msg = "There is some issue in saving records, please contact to system administrator!"
                }
            },
            error => {
                this.slimLoader.complete();
                this.msg = error;
            }
        );
        
    }


    onSubmitLogin(email: string, password: string) {
        this.slimLoader.start();
        this.msg = "";

        this.activeUrl = Global.BASE_LOGIN_ENDPOINT;
               
        this._userService.post(Global.BASE_LOGIN_ENDPOINT, new IUser(email, password)).subscribe(
            data => {
                if (data == 1) //Success
                {
                    this.msg = "Data successfully added.";
                    this.LoadOneUsers();
                    console.log(LoginUserAccount.userData);
                    this.slimLoader.complete();
                    this.router.navigate(['/']);       //!!!
                }
                if (data == 2) {
                    this.slimLoader.complete();
                    this.msg = "Wrong Email or Password";
                }
                else {
                    this.slimLoader.complete();
                    this.msg = "There is some issue in saving records, please contact to system administrator!"
                }

            },
            error => {
                this.slimLoader.complete();
                this.msg = error;
            }
        );
        
    }

}