export class Step {
    Id: number;
    InstructionId: number;
    Name: string;
    Number: number;
    DataTimeChange: string;

    constructor(id: number, instrId: number, num: number,name:string) {
        this.Id = id;
        this.InstructionId = instrId;
        this.Name = name;
        this.Number = num;
    }
}
