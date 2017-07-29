import { Step } from '../Model/step';

export class Instruction {
    Id: number;
    UserProfileId: number;
    Name: string;
    MaxCount: number;
    Steps: Step[];


    constructor(id: number, profId: number, name: string, maxC: number, steps: Step[]) {
        this.Id = id;
        this.UserProfileId = profId;
        this.Name = name;
        this.MaxCount = maxC;
        this.Steps = steps;
    }        
}