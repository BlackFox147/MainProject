import { Component } from "@angular/core"
import { Global, Asd } from './Shared/global';
import { ILogin } from './Model/login';

@Component({
    selector: "user-app",
    templateUrl: 'app/app.component.html'
})

export class AppComponent {

    asd: ILogin = Asd.Mabe.getparams();

    ShowE(): void {
        console.log(this.asd);
    }


    a: string = "a";

    Add(): void {
        this.a += "a";
        Asd.Mabe.setemail(this.a);
        console.log(this.asd);
        //this.qqq = Asd.Mabe.getparams();
    }

    isUserLoggedIn(): boolean {
        if (this.asd.Email != "w") {
            return false;
        }
        else
            return true;
    }
}