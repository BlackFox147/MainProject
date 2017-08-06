import { UserProfile } from '../Model/profile';

export class IUser {
    Id: number;
    //UserName: string;
    Email: string;
    Password: string;
    Profile: UserProfile;


    constructor(email: string, password: string) {
        this.Id = 0;

        this.Email = email;
        this.Password = password;
        this.Profile = null;
    }
}