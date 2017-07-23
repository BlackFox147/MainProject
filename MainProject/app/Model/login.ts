import { IUser } from '../Model/user';

export class ILogin{
    Id: number;
    UserName: string;
    Email: string;
    Password: string;

    constructor(id: number, name: string, email: string, pass: string) {
        this.Id = id;
        this.UserName = name;
        this.Email = email;
        this.Password = pass;
    }

}

//import { Injectable } from '@angular/core';

//@Injectable()

export class loginuser {
    private log: ILogin = new ILogin(0, "", "Login1", "");

    constructor() { }

    public setemail(em:string) {
        this.log.Email = em;
    }

    public getparams() {
        return this.log;
    }

    public setData(data:any) {
        return this.log = data;
    }
    public getEmail() {
        return this.log.Email;
    }
}