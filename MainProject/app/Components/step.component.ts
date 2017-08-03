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
    templateUrl: 'app/Components/step.component.html',
    viewProviders: [DragulaService],       
    styleUrls: ['./app/Components/step.component.css']
})
export class StepComponent {

    BuildStepData: Step = this.GetStep();

    private onDropModel(args: any) {
        let [el, target, source] = args;
        // do something else
    }

    private onRemoveModel(args: any) {
        let [el, source] = args;
        
        // do something else
    }

    setStep(value: Step): void {
        value.Elements = value.Elements.sort((n1, n2) => n1.Number - n2.Number); 

        BuildStepNow.BuildStep.Id = value.Id;
        BuildStepNow.BuildStep.ImageName = value.ImageName;
        BuildStepNow.BuildStep.Elements = value.Elements;
        BuildStepNow.BuildStep.DataTimeChange = value.DataTimeChange;
        BuildStepNow.BuildStep.InstructionId = value.InstructionId;
        BuildStepNow.BuildStep.Name = value.Name;
        BuildStepNow.BuildStep.Number = value.Number;
    }

    GetStep(): Step {
        this._userService.getItem(Global.BASE_BUILDSTEP_ENDPOINT, BuildStepNow.buildStep)
            .subscribe(stepT => {

                this.setStep(stepT);
                console.log("OK->Get_step");
                console.log(BuildStepNow.BuildStep);
            },
            error =>
                console.log(error));

        return BuildStepNow.BuildStep;
    }


    constructor(private http: Http, private _userService: UserService, private router: Router,
        private dragulaService: DragulaService) {

        dragulaService.dropModel.subscribe((value: any) => {
            this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe((value: any) => {
            this.onRemoveModel(value.slice(1));
        });
        //this.BuildStepData.Elements[0].Materials[0].Data
    }

   

    public markdownContent = `## Markdown content data`;

    //trackByIndex(index: number, value: number) {
    //    return index;
    //}

    develop: boolean = true;

    Test(): void {
        console.log(this.BuildStepData.Elements);
    }

    onChange(text: string, i: number) {
        console.log(text);
        this.BuildStepData.Elements[i].Data = text;
        this._userService.put(Global.BASE_BUILDELEMENT_ENDPOINT, this.BuildStepData.Elements[i].Id, this.BuildStepData.Elements[i]).subscribe(
            data => {
                if (data == 1) //Success
                {
                    //this.msg = "Data successfully updated.";         
                    console.log("OK->textCange");

                }
                else {
                    //this.msg = "There is some issue in saving records, please contact to system administrator!"
                    console.log("NO->textCange");
                }


            },
            error => {
                console.log(error);
                //this.msg = error;
            }
        );
        console.log(this.BuildStepData.Elements[i]);
    }


    Develop(): void {
        this.develop = true;
        console.log(this.develop);
    }
    View(): void {
        this.develop = false;
        console.log(this.develop);
    }

    onChangeName(): void {        
        this._userService.put(Global.BASE_BUILDSTEP_ENDPOINT, this.BuildStepData.Id, this.BuildStepData).subscribe(
            data => {
                if (data == 1) //Success
                {
                    //this.msg = "Data successfully updated.";         
                    console.log("OK->S");

                }
                else {
                    //this.msg = "There is some issue in saving records, please contact to system administrator!"
                    console.log("NO->S");
                }


            },
            error => {
                console.log(error);
                //this.msg = error;
            }
        );    
        console.log(this.BuildStepData.Name);
    }

    modalTitle: string;
    modalBtnTitle: string;
    create: boolean;


    addElement() {
        this.modalTitle = "Create new Step";
        this.modalBtnTitle = "Create";
        this.create = true;
    }

    Cancel(): void {
        this.create = false;
    }

    Create(type: number): void {

        this._userService.post(Global.BASE_BUILDSTEP_ENDPOINT, new Element(0, this.BuildStepData.Id, type , this.BuildStepData.Elements.length)).subscribe(
            data => {
                if (data == 1) //Success
                {
                    //this.msg = "Data successfully updated.";
                    console.log("OK->Step");
                    

                }
                else {
                    //this.msg = "There is some issue in saving records, please contact to system administrator!"
                    console.log("NO->step");
                }
                this.BuildStepData = this.GetStep();

            },
            error => {
                console.log(error);
                //this.msg = error;
            }
        );
        this.create = false;
    }

    Delete(elementId: number): void {
        this._userService.delete(Global.BASE_BUILDSTEP_ENDPOINT, elementId).subscribe(
            data => {
                console.log("Good del");
                this.BuildStepData= this.GetStep();
            },
            error => {
                console.log(error);
            }
        );
    }

    Save(): void {

        this.BuildStepData.Elements.forEach((step, index) => {
            step.Number = index + 1;
        });



        this._userService.put(Global.BASE_BUILDSTEP_ENDPOINT, this.BuildStepData.Id, this.BuildStepData).subscribe(
            data => {
                if (data == 1) //Success
                {
                    //this.msg = "Data successfully updated.";         
                    console.log("OK->S");

                }
                else {
                    //this.msg = "There is some issue in saving records, please contact to system administrator!"
                    console.log("NO->S");
                }


            },
            error => {
                console.log(error);
                //this.msg = error;
            }
        );    
       

    }

    ImageChange(ImageName: string): void {
        this.BuildStepData.ImageName = ImageName;       
        this._userService.put(Global.BASE_BUILDSTEP_ENDPOINT, this.BuildStepData.Id, this.BuildStepData).subscribe(
            data => {
                if (data == 1) //Success
                {
                    //this.msg = "Data successfully updated.";         
                    console.log("OK->S");

                }
                else {
                    //this.msg = "There is some issue in saving records, please contact to system administrator!"
                    console.log("NO->S");
                }


            },
            error => {
                console.log(error);
                //this.msg = error;
            }
        );    
        console.log("image");
    }
}