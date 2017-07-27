import { IUser } from '../Model/user';
import { UserProfile } from '../Model/profile';

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
        this.Profile = new UserProfile(prof, prof,"","","");
    }

}

//import { Injectable } from '@angular/core';

//@Injectable()

export class loginuser {
    private log: ILogin = new ILogin(0, "", "Login1", "", 0);

    constructor() { }

    public setemail(em:string) {
        this.log.Email = em;
    }

    public setProfile(em: UserProfile) {
        this.log.Profile = em;
    }

    public setProfileAge(em: number) {
        this.log.Profile.Age = em;
    }

    public setId(em: number) {
        this.log.Id = em;
    }
    public setName(em: string) {
        this.log.UserName = em;
    }
    public setPassord(em: string) {
        this.log.Password = em;
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
    public getProfile() {
        return this.log.Profile;
    }
}