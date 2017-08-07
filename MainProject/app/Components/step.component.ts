import { Component, ViewChild, OnDestroy} from '@angular/core';
import { NgModel } from '@angular/forms';
import { Global, LoginUserAccount } from '../Shared/global';

import { UserService } from '../Service/user.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Instruction } from '../Model/instruction';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Step } from '../Model/step';
import { Element } from '../Model/element';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SlimLoadingBarComponent, SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    templateUrl: 'app/Components/step.component.html',
    viewProviders: [DragulaService],       
    styleUrls: ['./app/Components/step.component.css']
})
export class StepComponent {

    BuildStepData: Step = new Step(0,0,0,"");

    private onDropModel(args: any) {
        let [el, target, source] = args;
        // do something else
    }

    private onRemoveModel(args: any) {
        let [el, source] = args;
        
        // do something else
    }

 

    GetStep(): void {
        this._userService.getItem(Global.BASE_BUILDSTEP_ENDPOINT, this.id)
            .subscribe(stepT => {
                this.BuildStepData = stepT;
                this.BuildStepData.Elements = this.BuildStepData.Elements.sort((n1, n2) => n1.Number - n2.Number);
                //this.setStep(stepT);
                console.log("OK->Get_step");
                console.log(this.BuildStepData);
                this.slimLoader.complete();
            },
            error => {
                console.log(error);
                this.slimLoader.complete();
            }
            );         
    }

    Stert(): boolean {
        //var temp: Instruction = new Instruction(0, 0, "");
        this.slimLoader.start();
        this.GetStep();

        return true;
    }
   
    //getItem: boolean = this.Stert();

    ngOnInit(): void {
        this.runSlimLoader();        
        //this.LoadUsers();        
    }

    runSlimLoader() {
        this.slimLoader.start();
        setTimeout(() => {
            this.slimLoader.complete();
        }, 500);
    }


    id: number;
    private subscription: Subscription;

    constructor(private http: Http, private _userService: UserService, private router: Router,
        private dragulaService: DragulaService, private sanit: DomSanitizer,
        private activateRoute: ActivatedRoute, private slimLoader: SlimLoadingBarService) {


        this.subscription = activateRoute.params.subscribe(params => {
            this.id = params['id'];
            this.Stert();
        });
        //this.id = activateRoute.snapshot.params['id'];
        console.log("id " + this.id);

        dragulaService.dropModel.subscribe((value: any) => {
            this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe((value: any) => {
            this.onRemoveModel(value.slice(1));
        });
        //this.BuildStepData.Elements[0].Materials[0].Data
        this.sanit = sanit;    
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
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
        this.slimLoader.start();
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

                this.slimLoader.complete();
            },
            error => {
                console.log(error);
                this.slimLoader.complete();
                //this.msg = error;
            }
        );
        console.log(this.BuildStepData.Elements[i]);
    }


    Develop(): void {
        this.slimLoader.start();
        this.develop = true;
        console.log(this.develop);
        this.slimLoader.complete();
    }
    View(): void {
        this.slimLoader.start();
        this.develop = false;
        console.log(this.develop);
        this.slimLoader.complete();
    }

    onChangeName(): void {        
        this.slimLoader.start();
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

                this.slimLoader.complete();
            },
            error => {
                console.log(error);
                this.slimLoader.complete();
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
        this.slimLoader.start();
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
                this.GetStep();
                this.slimLoader.complete();

            },
            error => {
                console.log(error);
                this.slimLoader.complete();
                //this.msg = error;
            }
        );
        this.create = false;
    }

    Delete(elementId: number): void {
        this.slimLoader.start();
        this._userService.delete(Global.BASE_BUILDSTEP_ENDPOINT, elementId).subscribe(
            data => {
                console.log("Good del");
                this.GetStep();
                this.slimLoader.complete();
            },
            error => {
                console.log(error);
                this.slimLoader.complete();
            }
        );
    }

    Save(): void {
        this.slimLoader.start();
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
                this.slimLoader.complete();

            },
            error => {
                console.log(error);
                this.slimLoader.complete();
                //this.msg = error;
            }
        );    
       

    }

 
    
    AddImage(event: any) {
        this.slimLoader.start();
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            let headers = new Headers()
            //headers.append('Content-Type', 'json');  
            //headers.append('Accept', 'application/json');  
            let options = new RequestOptions({ headers: headers });
           // let apiUrl1 = "api/uploadfileapi/";


            this.http.post(Global.BASE_BUILDELEMENT_ENDPOINT, formData, options)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                data => {
                    console.log('success');
                    this.BuildStepData = data;
                    this.BuildStepData.Elements = this.BuildStepData.Elements.sort((n1, n2) => n1.Number - n2.Number);
                    this.slimLoader.complete();
                    //this.setStep(data);
                    //this.router.navigate(['account']);
                },
                error => {
                    console.log(error);
                    this.slimLoader.complete();
                }
                )
        }
        else {
            this.slimLoader.complete();
        }
        
    }  
    OpenInstruction(id:number): void {
        this.router.navigate(['buildInstruction', id]);
    }

  
    videoURL(elem: Element) {
        //return elem.Data
        return this.sanit.bypassSecurityTrustResourceUrl(elem.Data);
    }
}