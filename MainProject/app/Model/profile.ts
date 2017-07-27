export class UserProfile {
    Id: number;
    Age: number;
    FirstName: string;
    LastName: string;
    UserImageName: string;


    constructor(id: number, age:number,fname:string,lname:string,userImageName:string) {
        this.Id = id;
        this.Age = age;
        this.FirstName = fname;
        this.LastName = lname;
   
        this.UserImageName = userImageName;
              
    }
}