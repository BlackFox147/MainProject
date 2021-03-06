﻿import { Step } from '../Model/step';

export class Instruction {
    Id: number;
    UserProfileId: number;
    //UserProfile: number;
    Name: string;
    DataTimeChange: string;
    Steps: Step[];
    UserName: string;

    constructor(id: number, profId: number, name: string) {
        this.Id = id;
        this.UserProfileId = profId;
        this.Name = name;

        this.Steps = new Array<Step>();
    }        
}