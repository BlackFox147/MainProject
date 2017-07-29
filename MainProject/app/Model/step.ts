export class Step {
    Id: number;
    InstructionId: number;
    
    Number: number;


    constructor(id: number, instrId: number, num: number) {
        this.Id = id;
        this.InstructionId = instrId;

        this.Number = num;
    }
}
