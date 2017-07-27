import { UserProfile } from '../Model/profile';

export interface IUser {
    Id: number,
    UserName: string,
    Email: string,
    Password: string,
    ConformPassword: string,
    Profile: UserProfile
}