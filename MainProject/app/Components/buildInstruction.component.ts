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
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Step } from '../Model/step';

@Component({
    templateUrl: 'app/Components/buildInstruction.component.html',
    viewProviders: [DragulaService],
    styleUrls: ['./app/Components/example.css']
    //styleUrls: ['./app/Components/account.component.css']
})
export class BuildInstructionComponent {

    constructor(private http: Http, private _userService: UserService, private router: Router,
        private dragulaService: DragulaService)
    {

        dragulaService.dropModel.subscribe((value: any) => {
            this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe((value: any) => {
            this.onRemoveModel(value.slice(1));
        });      
    }

    BuildInstructionData = LoginUserAccount.userData.getInstrustion();


    Test():void {
        console.log(this.BuildInstructionData);
        console.log(this.BuildInstructionData.Steps);
    }


    private onDropModel(args: any) {
        let [el, target, source] = args;
        // do something else
    }

    private onRemoveModel(args: any) {
        let [el, source] = args;
        // do something else
    }

    Create(): void {

        this._userService.post(Global.BASE_BUILDINSTRUCTION_ENDPOINT, new Step(0, this.BuildInstructionData.Id, this.BuildInstructionData.MaxCount)).subscribe(
            data => {
                if (data == 1) //Success
                {
                    //this.msg = "Data successfully updated.";
                    console.log("OK->Step");
                    this.LoadUserInstruction();

                }
                else {
                    //this.msg = "There is some issue in saving records, please contact to system administrator!"
                    console.log("NO->step");
                }


            },
            error => {
                console.log(error);
                //this.msg = error;
            }
        );
        
    }



    LoadUserInstruction(): void {
        this._userService.get(Global.BASE_BUILDINSTRUCTION_ENDPOINT)
            .subscribe(instruction => {
                this.BuildInstructionData = instruction;
                console.log("OK->Get_step");
                console.log(this.BuildInstructionData);
            },
            error =>
                console.log(error));
    }


    Save(): void {

        this.BuildInstructionData.Steps.forEach((step, index) => {
            step.Number = index + 1;
        });
       
        this._userService.put(Global.BASE_BUILDINSTRUCTION_ENDPOINT, this.BuildInstructionData.Id, this.BuildInstructionData).subscribe(
            data => {
                if (data == 1) //Success
                {
                    //this.msg = "Data successfully updated.";         
                    console.log("OK->");

                }
                else {
                    //this.msg = "There is some issue in saving records, please contact to system administrator!"
                    console.log("NO->");
                }


            },
            error => {
                console.log(error);
                //this.msg = error;
            }
        ); 
    }

}
