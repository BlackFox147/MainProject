import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IUser } from '../Model/user';
import { Instruction } from '../Model/instruction';

import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Global, LoginUserAccount, } from '../Shared/global';
import { SlimLoadingBarComponent, SlimLoadingBarService } from 'ng2-slim-loading-bar';
@Component({
    //template: `<img src="../../images/users.png" style="text-align:center"/>`
    templateUrl: 'app/Components/home.component.html',
    styleUrls: ['./app/Components/home.component.css']

    
})

export class HomeComponent{
    constructor(private _userService: UserService,
        private router: Router,private slimLoader: SlimLoadingBarService) {       //!!!
        this.slimLoader.height = '4px';
        this.slimLoader.color = 'blue';
    }

   
    instructions: Instruction[] = null;
    instruction: Instruction;
    msg: string;


    modalTitle: string;
    modalBtnTitle: string;
    info: string = "Start";

  
    OpenStep(id: number): void {

        this.router.navigate(['viewStep', id]);
    }

    OpenInstruction(id: number): void {

        this.router.navigate(['viewInstruction', id]);
    }

    OpenUser(id: number): void {

        this.router.navigate(['viewUser', id]);
    }

    ngOnInit(): void {
        this.runSlimLoader();
        this.LoadUsers();
        console.log("finish");
    }


    runSlimLoader() {
        this.slimLoader.start();
        setTimeout(() => {
            this.slimLoader.complete();
        }, 500);
    }


    setInstructions(em: Instruction[]) {
        this.instructions = em;
        console.log(em);
        console.log(this.instructions);
        console.log("OK");
    }


    LoadUsers(): void {
        this.slimLoader.start();
       
        this._userService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(instructions => {
               
                //this.instructions = instructions;

                //console.log(instructions);
                this.setInstructions(instructions);
                this.slimLoader.complete();
            },
            error => {
                this.msg = <any>error;
                this.slimLoader.complete();
            });

        //this.instructions.push(new Instruction(0, 0, "test1"));
        //console.log(this.instructions);
    }


}