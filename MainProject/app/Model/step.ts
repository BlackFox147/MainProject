import { Element } from '../Model/element';

export class Step {
    Id: number;
    InstructionId: number;
    Name: string;
    Number: number;
    ImageName: string;
    DataTimeChange: string;
    Elements:Element[];

    constructor(id: number, instrId: number, num: number,name:string) {
        this.Id = id;
        this.InstructionId = instrId;
        this.Name = name;
        this.Number = num;
        this.Elements = new Array<Element>();
    }
}
