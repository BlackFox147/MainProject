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
    viewProviders: [DragulaService],  
    styles: [
        `
    #textbox {
      width: 100%;
      height: 150px;
    }
    table.table2 {
      font-size: 14px;
      color: #212121;
      margin: 0 auto;
      border-collapse: collapse;
    }
    table.table2 thead th {
      font-size: 20px;
      color: #212121;
      height: 40px;
      border: 1px solid #e6e6e6;
      border-top: 0;
      border-right: 0;
      border-left: 0;
    }
    table.table2 tbody tr:nth-child(odd) {
      background-color: #f6f6f6;
    }
    table.table2 td {
      height: 40px;
      width: 230px;
      border-bottom: 1px solid #e6e6e6;
      border-right: 1px solid #e6e6e6;
    }
    table.table2 td:last-of-type {
      border-right: 0;
    }
    /* From https://codepen.io/maxds/pen/DcveB */
    blockquote.king-quote {
      display:block;
      background: #fff;
      padding: 15px 20px 15px 45px;
      margin: 0 0 20px;
      position: relative;
      /*Font*/
      font-family: Georgia, serif;
      font-size: 16px;
      line-height: 1.2;
      color: #666;
      text-align: justify;
      /*Borders - (Optional)*/
      border-left: 15px solid #c76c0c;
      border-right: 2px solid #c76c0c;
      /*Box Shadow - (Optional)*/
      -moz-box-shadow: 2px 2px 15px #ccc;
      -webkit-box-shadow: 2px 2px 15px #ccc;
      box-shadow: 2px 2px 15px #ccc;
    }
    blockquote.king-quote::before {
      content: "\\201C"; /*Unicode for Left Double Quote*/
      /*Font*/
      font-family: Georgia, serif;
      font-size: 60px;
      font-weight: bold;
      color: #999;
      /*Positioning*/
      position: absolute;
      left: 10px;
      top:5px;
    }
    blockquote.king-quote::after{
      /*Reset to make sure*/
      content: "";
    }
    blockquote.king-quote a{
      text-decoration: none;
      background: #eee;
      cursor: pointer;
      padding: 0 3px;
      color: #c76c0c;
    }
    blockquote.king-quote a:hover{
      color: #666;
    }
    blockquote.king-quote em{
      font-style: italic;
    }
  `]
})

export class LoginComponent {

    numbers: string[] = ["## hello", "## Markdown content data"];

    constructor(private dragulaService: DragulaService) {

        dragulaService.dropModel.subscribe((value: any) => {
            this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe((value: any) => {
            this.onRemoveModel(value.slice(1));
        });
        //this.BuildStepData.Elements[0].Materials[0].Data
    }

    private onDropModel(args: any) {
        let [el, target, source] = args;
        // do something else
    }

    private onRemoveModel(args: any) {
        let [el, source] = args;

        // do something else
    }

    develop: boolean = true;

    Show(): void {        
        console.log(LoginUserAccount.userData.getparams());
        this.develop = !this.develop;
    }

    public Content = `## Markdown content data`;

    onChange(text: string,i:number) {
        console.log(text);
        this.numbers[i] = text;
        console.log(this.numbers);
    }
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

