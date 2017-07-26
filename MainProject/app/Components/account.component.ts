//import { Component } from "@angular/core";

//@Component({
//   templateUrl: 'app/Components/account.component.html'
//})

//export class AccountComponent {

//    qqq: ILogin = Asd.Mabe.getparams();
//}

import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Global, Asd } from '../Shared/global';
import { ILogin } from '../Model/login';


@Component({
    templateUrl: 'app/Components/account.component.html'
})
export class AccountComponent {

    qqq: ILogin = Asd.Mabe.getparams();

    onChange(): void {
        console.log("OK->"+Asd.Mabe.getparams());
    }

}