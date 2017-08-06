import { Instruction } from '../Model/instruction';

export class UserProfile {
    Id: number;
    Age: number;
    FirstName: string;
    LastName: string;
    UserImageName: string;
    Instructions: Instruction[];
    UserName: string;

    constructor(id: number, age: number, fname: string, lname: string, userImageName: string, instr: Instruction[]) {
        this.Id = id;
        this.Age = age;
        this.FirstName = fname;
        this.LastName = lname;   
        this.UserImageName = userImageName;
        this.Instructions = instr;
    }
}