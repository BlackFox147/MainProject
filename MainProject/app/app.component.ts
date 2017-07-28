import { Component } from "@angular/core"
import { Global, LoginUserAccount } from './Shared/global';
import { ILogin } from './Model/login';

@Component({
    selector: "user-app",
    templateUrl: 'app/app.component.html'
})

export class AppComponent {

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
}