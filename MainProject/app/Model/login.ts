import { IUser } from '../Model/user';
import { UserProfile } from '../Model/profile';
import { Instruction } from '../Model/instruction';
import { BuildInstructionNow } from '../Shared/global';

export class ILogin{
    Id: number;
    UserName: string;
    Email: string;
    Password: string;
    Profile: UserProfile;

    constructor(id: number, name: string, email: string, pass: string, prof:number) {
        this.Id = id;
        this.UserName = name;
        this.Email = email;
        this.Password = pass;
        this.Profile = new UserProfile(prof, prof,"","","",null);
    }

}

//import { Injectable } from '@angular/core';

//@Injectable()

export class loginUser {
    private userAccount: ILogin = new ILogin(0, "", "Login1", "", 0);

    constructor() { }
    
    public logOff(): void {
        delete (this.userAccount);
        this.userAccount = new ILogin(0, "", "Login1", "", 0);
    }

    public setemail(em:string) {
        this.userAccount.Email = em;
    }

    public setProfile(em: UserProfile) {
        this.userAccount.Profile = em;
    }

    public setProfileAge(em: number) {
        this.userAccount.Profile.Age = em;
    }

    public setId(em: number) {
        this.userAccount.Id = em;
    }
    public setName(em: string) {
        this.userAccount.UserName = em;
    }
    public setPassord(em: string) {
        this.userAccount.Password = em;
    }

    public getInstrustion() {
        var temp: Instruction = new Instruction(0, 0, "",0,null);
        this.userAccount.Profile.Instructions.forEach(instructin => {           
            if (instructin.Id == BuildInstructionNow.buildInstruction) {               
                temp = instructin;    
                return;            
            }            
        }) 

        temp.Steps = temp.Steps.sort((n1, n2) => n1.Number - n2.Number);
        console.log("sort");
        console.log(temp.Steps);       
        return temp;
    }


    public setInstructions(em: Instruction[]) {
        this.userAccount.Profile.Instructions = em;
    }

    public getparams() {
        return this.userAccount;
    }

    public getInstructions() {
        return this.userAccount.Profile.Instructions;
    }

    public setData(data:any) {
        return this.userAccount = data;
    }
    public getEmail() {
        return this.userAccount.Email;
    }
    public getProfile() {
        return this.userAccount.Profile;
    }
}