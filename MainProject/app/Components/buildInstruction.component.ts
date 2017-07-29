import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Global, LoginUserAccount, BuildInstructionNow } from '../Shared/global';
import { ILogin } from '../Model/login';
import { UserService } from '../Service/user.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Instruction } from '../Model/instruction';


@Component({
    templateUrl: 'app/Components/buildInstruction.component.html',
    //styleUrls: ['./app/Components/account.component.css']
})
export class BuildInstructionComponent {

    constructor(private http: Http, private _userService: UserService, private router: Router) {
        //LoginUserAccount.userData.getProfile().Instructions.forEach(instructin => {
        //    if (instructin.Id == BuildInstructionNow.buildInstruction) {
        //        BuildInstructionData = instructin;
        //        console.log(BuildInstructionData);
        //    }
        //})
    }
    BuildInstructionData = LoginUserAccount.userData.getInstrustion();

    Test():void {
        console.log(this.BuildInstructionData);
        this.BuildInstructionData.Name = "Axaxaxa";
        console.log(LoginUserAccount.userData.getInstrustion());
    }

    
    
}
