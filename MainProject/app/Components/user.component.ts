import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IUser } from '../Model/user';
import { Instruction } from '../Model/instruction';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Global, LoginUserAccount, } from '../Shared/global';
//import { loginuser } from '../Model/login';
//import { LoginUser } from '../Model/login';

@Component({
    selector: "instruction-app",
    templateUrl: 'app/Components/user.component.html',
    styleUrls: ['./app/Components/user.component.css']
})

export class UserComponent implements OnInit {

    @ViewChild('modal') modal: ModalComponent;
    instructions: Instruction[] = null;
    instruction: Instruction;
    msg: string;
    indLoading: boolean = false;
    userFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;
    info: string = "Start";

    constructor(private fb: FormBuilder, private _userService: UserService,
        private router: Router) {

    }



    OpenStep(id: number): void {
        
        this.router.navigate(['viewStep',id]);
    }

    OpenInstruction(id: number): void {
       
        this.router.navigate(['viewInstruction', id]);
    }

    OpenUser(id: number): void {

        this.router.navigate(['viewUser', id]);
    }

    ngOnInit(): void {
        this.userFrm = this.fb.group({
            Id: [''],
            UserName: ['', Validators.required],
            Email: [''],
            Password: ['', Validators.required],

            UserProfile: ['']
        });
        this.LoadUsers();
        console.log("finish");

    }

    setInstructions(em: Instruction[]) {
        this.instructions = em;
        console.log(em);
        console.log(this.instructions);
        console.log("OK");
    }


    LoadUsers(): void {
        
        this.indLoading = true;
        this._userService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(instructions => {
                this.indLoading = false; 
                //this.instructions = instructions;
                               
                //console.log(instructions);
                this.setInstructions(instructions);
            },
            error => this.msg = <any>error);
        //this.instructions.push(new Instruction(0, 0, "test1"));
        //console.log(this.instructions);
    }


   
    

    SetControlsState(isEnable: boolean) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    }
}