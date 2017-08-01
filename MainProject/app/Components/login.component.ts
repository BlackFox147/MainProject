//import { Component, OnInit, ViewChild } from '@angular/core';
//import { UserService } from '../Service/user.service';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
//import { IUser } from '../Model/user';
//import { ILogin } from '../Model/login';
//import { DBOperation } from '../Shared/enum';
//import { Observable } from 'rxjs/Rx';
//import { Global, LoginUserAccount, BuildInstructionNow } from '../Shared/global';
//import { loginUser } from '../Model/login';
//import { UserProfile } from '../Model/profile';
////import { LoginUser } from '../Model/login';

//@Component({
//    templateUrl: 'app/Components/login.component.html'
//})

//export class LoginComponent {
//    a: string = "a";
//    Show(): void {
//        console.log(LoginUserAccount.userData.getparams());
//        console.log(LoginUserAccount.userData.getProfile());
//        console.log(LoginUserAccount.userData.getInstructions());   
//        console.log(BuildInstructionNow.buildInstruction);    
//    }

//    Add(): void {
//        this.a += "a";
//        LoginUserAccount.userData.setemail(this.a);

//        //this.qqq = Asd.Mabe.getparams();
//    }
//    qqq: ILogin = LoginUserAccount.userData.getparams();
//}
/////////////////////////////////////////////


import { NgModel } from '@angular/forms';
import { Component } from '@angular/core';
import { Global, LoginUserAccount, BuildInstructionNow } from '../Shared/global';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { MarkdownModule } from 'angular2-markdown';

@Component({

    templateUrl: 'app/Components/login.component.html',

    styleUrls: ['./app/Components/example.css']
})

export class LoginComponent {

    numbers: number[] = [1, 2, 3, 4, 5];

    Show(): void {        
        console.log(LoginUserAccount.userData.getparams());
    }

    public textData = `## Markdown content data`;
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

