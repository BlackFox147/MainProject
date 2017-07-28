//import { Component } from "@angular/core";

//@Component({
//   templateUrl: 'app/Components/account.component.html'
//})

//export class AccountComponent {

//    qqq: ILogin = Asd.Mabe.getparams();
//}

import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Global, LoginUserAccount } from '../Shared/global';
import { ILogin } from '../Model/login';
import { UserService } from '../Service/user.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';  
import { Router } from '@angular/router'; 


@Component({
    templateUrl: 'app/Components/account.component.html',
    styleUrls: ['./app/Components/account.component.css']
})
export class AccountComponent {

    private isUploadBtn: boolean = true;
    constructor(private http: Http, private _userService: UserService, private router: Router) {
    }  

    
    LoginUserAccountData: ILogin = LoginUserAccount.userData.getparams();

    onChange(): void {
        console.log("OK->" + LoginUserAccount.userData.getparams());
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