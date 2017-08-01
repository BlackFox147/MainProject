import { Material } from '../Model/material';

export class Element {
    Id: number;
    StepId: number;
    Materials: Material[];
    BlockType: number;

    constructor(id: number, stepId: number, blocT: number) {
        this.Id = id;
        this.StepId = stepId;
        this.BlockType = blocT;
        this.Materials = new Array<Material>();
    }
}