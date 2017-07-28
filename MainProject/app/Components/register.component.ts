import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IUser } from '../Model/user';
import { ILogin } from '../Model/login';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global, LoginUserAccount } from '../Shared/global';
import { loginUser } from '../Model/login';
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
    userFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;
    info: string = "Start";
    activeUrl: string; 


    constructor(private fb: FormBuilder, private _userService: UserService, private router: Router) {       //!!!
    }


    ngOnInit(): void {
        this.userFrm = this.fb.group({
            Id: [''],
            UserName: [''],
            Email: [''],
            Password: [''],
            Profile:['']
        });
        //this.LoadUsers();        
    }

    LoadOneUsers(): void {
        this.indLoading = true;
        this._userService.get(this.activeUrl)
            .subscribe(user => {
                LoginUserAccount.userData.setId(user.Id);
                LoginUserAccount.userData.setemail(user.Email);
                LoginUserAccount.userData.setName(user.UserName);
                LoginUserAccount.userData.setPassord(user.Password);
                LoginUserAccount.userData.setProfile(user.Profile);
            },
            error => this.msg = <any>error);
        //Asd.Mabe.setId(this.user.Id);
    }

    onSubmit(register_username: string, register_email: string, register_password: string, register_cpassword: string) {

        this.msg = "";

        var required = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
        
        if (!required.test(register_email)) {
            this.msg = "Email isn't correct";
            console.log("wrong email");
            return;            
        }

        this.activeUrl = Global.BASE_REGISTER_ENDPOINT;
        if (register_password != register_cpassword) {
            this.msg = "ConformPassword isn't correct";
            console.log("No ConformPassword");
            return;
        }
        
        this._userService.post(this.activeUrl, new IUser(register_username, register_email, register_password)).subscribe(
            data => {
                if (data == 1) //Success
                {
                    this.msg = "Data successfully added.";
                    this.LoadOneUsers();
                    console.log(LoginUserAccount.userData.getparams());
                }                
                else {
                    this.msg = "There is some issue in saving records, please contact to system administrator!"
                }
            },
            error => {
                this.msg = error;
            }
        );
    }


    onSubmitLogin(email:string, password:string) {
        this.msg = "";

        this.activeUrl = Global.BASE_LOGIN_ENDPOINT;
               
        this._userService.post(Global.BASE_LOGIN_ENDPOINT, new IUser("", email, password)).subscribe(
            data => {
                if (data == 1) //Success
                {
                    this.msg = "Data successfully added.";
                    this.LoadOneUsers();
                    console.log(LoginUserAccount.userData.getparams());
                    this.router.navigate(['/']);       //!!!
                }
                if (data == 2) {
                    this.msg = "Wrong Email";
                }
                else {
                    this.msg = "There is some issue in saving records, please contact to system administrator!"
                }

            },
            error => {
                this.msg = error;
            }
        );
    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    }
}