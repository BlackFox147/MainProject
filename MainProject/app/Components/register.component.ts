import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IUser } from '../Model/user';
import { ILogin } from '../Model/login';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global, Asd } from '../Shared/global';
import { loginuser } from '../Model/login';
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
            ConformPassword: [''],
            Profile:['']
        });
        //this.LoadUsers();        
    }

    LoadOneUsers(): void {
        this.indLoading = true;
        this._userService.get(this.activeUrl)
            .subscribe(user => {
                Asd.Mabe.setId(user.Id);
                Asd.Mabe.setemail(user.Email);
                Asd.Mabe.setName(user.UserName);
                Asd.Mabe.setPassord(user.Password);
                Asd.Mabe.setProfile(user.Profile);
            },
            error => this.msg = <any>error);
        //Asd.Mabe.setId(this.user.Id);
    }

    onSubmit(formData: any) {

        this.msg = "";
        this.activeUrl = Global.BASE_REGISTER_ENDPOINT;
        if (formData._value.Password != formData._value.ConformPassword) {
            console.log("No");
            return;
        }
        Asd.Mabe.setemail(formData._value.Email);
        this._userService.post(this.activeUrl, formData._value).subscribe(
            data => {
                if (data == 1) //Success
                {
                    this.msg = "Data successfully added.";
                    this.LoadOneUsers();
                    console.log(Asd.Mabe.getparams());
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


    onSubmitLogin(formData: any) {
        this.msg = "";

        this.activeUrl = Global.BASE_LOGIN_ENDPOINT;

       
        this._userService.post(Global.BASE_LOGIN_ENDPOINT, formData._value).subscribe(
            data => {
                if (data == 1) //Success
                {
                    this.msg = "Data successfully added.";
                    this.LoadOneUsers();
                    console.log(Asd.Mabe.getparams());
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