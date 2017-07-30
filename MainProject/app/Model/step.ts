export class Step {
    Id: number;
    InstructionId: number;
    Name: string;
    Number: number;


    constructor(id: number, instrId: number, num: number) {
        this.Id = id;
        this.InstructionId = instrId;

        this.Number = num;
    }
}
