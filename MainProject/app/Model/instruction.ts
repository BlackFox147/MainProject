export class Instruction {
    Id: number;
    UserProfileId: number;
    Name: string;


    constructor(id: number, profId: number, name: string) {
        this.Id = id;
        this.UserProfileId = profId;
        this.Name = name;
    }
}