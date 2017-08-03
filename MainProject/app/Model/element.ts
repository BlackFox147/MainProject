import { Material } from '../Model/material';

export class Element {
    Id: number;
    StepId: number;
    Materials: Material[];
    BlockType: number;
    Number: number;

    constructor(id: number, stepId: number, blocT: number,num:number) {
        this.Id = id;
        this.StepId = stepId;
        this.BlockType = blocT;
        this.Number = num;
        this.Materials = new Array<Material>();
    }
}