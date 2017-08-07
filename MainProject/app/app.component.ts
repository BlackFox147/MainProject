import { Component } from "@angular/core"
import { Global, LoginUserAccount } from './Shared/global';

import { Router } from '@angular/router'; 
import { IUser } from './Model/user';
import { SlimLoadingBarComponent, SlimLoadingBarService } from 'ng2-slim-loading-bar';
@Component({
    selector: "user-app",
    templateUrl: 'app/app.component.html'
})

export class AppComponent {

    constructor(private router: Router,private slimLoader: SlimLoadingBarService) {       //!!!
        this.slimLoader.height = '4px';
        this.slimLoader.color = 'blue';
    }

    LoginUserAccountData: IUser = LoginUserAccount.userData;

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
        
        delete (LoginUserAccount.userData);
        LoginUserAccount.userData = new IUser("", "");
    
        this.LoginUserAccountData = LoginUserAccount.userData;
        this.router.navigate(['/']); 
        console.log(this.LoginUserAccountData);
    }

    ngOnInit(): any {
        this.runSlimLoader();       
    }
   
    runSlimLoader() {
        this.slimLoader.start();
        setTimeout(() => {
            this.slimLoader.complete();
        }, 500);
    }
}