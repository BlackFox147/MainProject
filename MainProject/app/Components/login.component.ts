﻿import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IUser } from '../Model/user';
import { ILogin } from '../Model/login';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global, Asd } from '../Shared/global';
import { loginuser } from '../Model/login';
//import { LoginUser } from '../Model/login';

@Component({
    templateUrl: 'app/Components/login.component.html'
})

export class LoginComponent {
    a: string = "a";
    Show(): void {
        console.log(Asd.Mabe.getparams());
       
    }

    Add(): void {
        this.a += "a";
        Asd.Mabe.setemail(this.a);
        //this.qqq = Asd.Mabe.getparams();
    }
    qqq: ILogin = Asd.Mabe.getparams();
}

//export class LoginComponent implements OnInit {

//    users: IUser[];
//    user: IUser;
//    msg: string;
//    indLoading: boolean = false;
//    userFrm: FormGroup;
//    dbops: DBOperation;
//    modalTitle: string;
//    modalBtnTitle: string;
//    info: string = "Start";

//    constructor(private fb: FormBuilder, private _userService: UserService) {

//    }


//    ngOnInit(): void {
//        this.userFrm = this.fb.group({
//            Id: [''],
//            UserName: ['', Validators.required],
//            Email: [''],
//            Password: ['', Validators.required],
//            ConformPassword: ['']
//        });
//        //this.LoadUsers();        
//    }

//    LoadOneUsers(): void {
//        this.indLoading = true;
//        this._userService.get(Global.BASE_LOGIN_ENDPOINT)
//            .subscribe(user => { Asd.Mabe.setId(user.Id); },
//            error => this.msg = <any>error);
//        //Asd.Mabe.setId(this.user.Id);
//    }

//    //constructor(private loginUser: LoginUser) {
//    //    console.log(loginUser.getParams());
//    //}

//    a: string = "a";
//    Show(): void {
//        console.log(Asd.Mabe.getparams());
//        Asd.Mabe.setemail("w");
//    }

//    Add(): void {
//        this.a += "a";
//        Asd.Mabe.setemail(this.a);
//        //this.qqq = Asd.Mabe.getparams();
//    }
//    qqq: ILogin = Asd.Mabe.getparams();


//    onSubmit(formData: any) {
//        this.msg = "";


//        //this.info = "Finish";
//        //Asd.Mabe.setemail("Test");
//        //console.log(Asd.Mabe.getparams());
//        //this.msg = "Data successfully updated.";

//        //Asd.Mabe.setemail(formData._value.Email);
//        //console.log(Asd.Mabe.getparams());
//        //        Asd.Mabe.setData(formData._value);
//        Asd.Mabe.setemail(formData._value.Email);
//        console.log(Asd.Mabe.getparams());
//        this._userService.post(Global.BASE_LOGIN_ENDPOINT, formData._value).subscribe(
//            data => {
//                if (data == 1) //Success
//                {
//                    this.msg = "Data successfully added.";
//                    this.LoadOneUsers();                                                      
//                }
//                else {
//                    this.msg = "There is some issue in saving records, please contact to system administrator!"
//                }

//            },
//            error => {
//                this.msg = error;
//            }
//        );
//    }

//    SetControlsState(isEnable: boolean) {
//        isEnable ? this.userFrm.enable() : this.userFrm.disable();
//    }
//}
