import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Global, LoginUserAccount, BuildInstructionNow, BuildStepNow } from '../Shared/global';
import { ILogin } from '../Model/login';
import { UserService } from '../Service/user.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Instruction } from '../Model/instruction';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Step } from '../Model/step';
import { Element } from '../Model/element';

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

    BuildInstructionData: Instruction = BuildInstructionNow.BuildInstruction;

    setInstruction(value: Instruction): void {
        value.Steps = value.Steps.sort((n1, n2) => n1.Number - n2.Number); 
        BuildInstructionNow.BuildInstruction.DataTimeChange = value.DataTimeChange;
        BuildInstructionNow.BuildInstruction.Steps = value.Steps;
        //BuildInstructionNow.BuildInstruction.ImageName = value.ImageName;
    }



    GetInstruction(): boolean {
        this._userService.getItem(Global.BASE_BUILDINSTRUCTION_ENDPOINT, BuildInstructionNow.buildInstruction)
            .subscribe(instruction => {

                this.setInstruction(instruction);
                console.log("OK->Get_step");
                console.log(this.BuildInstructionData);
            },
            error =>
                console.log(error));
        return true;
    }
    //getItem: boolean = this.GetInstruction();

     
    //BuildInstructionData:Instruction = LoginUserAccount.userData.getInstrustion();




    modalTitle: string;
    modalBtnTitle: string;
    create: boolean;

    Test():void {
        console.log(this.BuildInstructionData);       
    }


    private onDropModel(args: any) {
        let [el, target, source] = args;
        // do something else
    }

    private onRemoveModel(args: any) {
        let [el, source] = args;
        console.log("remove");
        // do something else
    }

    Create(stepName: string): void {

        this._userService.post(Global.BASE_BUILDINSTRUCTION_ENDPOINT, new Step(0, this.BuildInstructionData.Id, this.BuildInstructionData.Steps.length, stepName)).subscribe(
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
        this.create = false;
    }



    LoadUserInstruction(): void {
        this._userService.get(Global.BASE_BUILDINSTRUCTION_ENDPOINT)
            .subscribe(instruction => {
                this.setInstruction(instruction);
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

                this.LoadUserInstruction();
            },
            error => {
                console.log(error);
                //this.msg = error;
            }
        ); 

    }

    Delete(stepId: number): void {
        this._userService.delete(Global.BASE_BUILDINSTRUCTION_ENDPOINT, stepId).subscribe(
            data => {
                console.log("Good del");
                this.LoadUserInstruction();
            },
            error => {
                console.log(error);
            }
        );
    }


    addStep() {
        this.modalTitle = "Create new Step";
        this.modalBtnTitle = "Create";
        this.create = true;
    }

    Cancel(): void {
        this.create = false;
    }


    Open(id: number): void {
        BuildStepNow.buildStep = id;
        console.log(BuildStepNow.buildStep);
        //this.GetStep();
        
        this.router.navigate(['step']);
    }

    setStep(value: Step): void {
        console.log(value);
        BuildStepNow.BuildStep.Id = value.Id;
        BuildStepNow.BuildStep.Elements = value.Elements;
        BuildStepNow.BuildStep.DataTimeChange = value.DataTimeChange;
        BuildStepNow.BuildStep.InstructionId = value.InstructionId;
        BuildStepNow.BuildStep.Name = value.Name;
        BuildStepNow.BuildStep.Number = value.Number; 
    }

    GetStep(): void {
        this._userService.getItem(Global.BASE_BUILDSTEP_ENDPOINT, BuildStepNow.buildStep)
            .subscribe(stepT => {

                this.setStep(stepT);
                console.log("OK->Get_step");   
                console.log(BuildStepNow.BuildStep);             
            },
            error =>
                console.log(error));

    }


    onChangeName() {
        console.log(this.BuildInstructionData.Name);
        this._userService.put(Global.BASE_BUILDINSTRUCTION_ENDPOINT, this.BuildInstructionData.Id, this.BuildInstructionData).subscribe(
            data => {
                if (data == 1) //Success
                {
                    //this.msg = "Data successfully updated.";         
                    console.log("OK->N");

                }
                else {
                    //this.msg = "There is some issue in saving records, please contact to system administrator!"
                    console.log("NO->N");
                }

                this.LoadUserInstruction();
            },
            error => {
                console.log(error);
                //this.msg = error;
            }
        ); 
    }

    //ImageChange(ImageName: string): void {
    //    this.BuildInstructionData.ImageName = ImageName;
    //    this._userService.put(Global.BASE_BUILDINSTRUCTION_ENDPOINT, this.BuildInstructionData.Id, this.BuildInstructionData).subscribe(
    //        data => {
    //            if (data == 1) //Success
    //            {
    //                //this.msg = "Data successfully updated.";         
    //                console.log("OK->Im");

    //            }
    //            else {
    //                //this.msg = "There is some issue in saving records, please contact to system administrator!"
    //                console.log("NO->Im");
    //            }
    //        },
    //        error => {
    //            console.log(error);
    //            //this.msg = error;
    //        }
    //    );
    //    console.log("image");
    //}
    
}
