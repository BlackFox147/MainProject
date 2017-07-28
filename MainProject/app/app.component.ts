import { Component } from "@angular/core"
import { Global, LoginUserAccount } from './Shared/global';
import { ILogin } from './Model/login';
import { Router } from '@angular/router'; 

@Component({
    selector: "user-app",
    templateUrl: 'app/app.component.html'
})

export class AppComponent {

    constructor(private router: Router) {       //!!!
    }

    LoginUserAccountData: ILogin = LoginUserAccount.userData.getparams();

    ShowE(): void {
        console.log(this.LoginUserAccountData);
    }


    a: string = "a";

    //Add(): void {
    //    this.a += "a";
    //    LoginUserAccountData.Mabe.setemail(this.a);
    //    console.log(this.LoginUserAccountData);
    //    //this.qqq = LoginUserAccountData.Mabe.getparams();
    //}

    isUserLoggedIn(): boolean {
        if (this.LoginUserAccountData.Id == 0) {
            return false;
        }
        else
            return true;
    }

    LogOff(): void {
        LoginUserAccount.userData.logOff();
        this.LoginUserAccountData = LoginUserAccount.userData.getparams();
        this.router.navigate(['/']); 
        console.log(this.LoginUserAccountData);
    }
}