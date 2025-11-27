// class User { 
//     // readonly city: string = "****";
//     private readonly city: string = "****";
//     public country: string = "USA";
//     email: string;
//     name: string;
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
class User { 
    // private _courseCount = 1
    protected _courseCount = 1
    constructor(
        public email: string, 
        public name: string
    )
    {

    }
        private deleteToken(){
        console.log("Token deleted");
        }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    // private _courseCount = 1 cant access private property from parent class
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}


// User.city = "New York"; // Error: Cannot assign to 'city' because it is a read-only property.
const zavyar = new User("zavyar@example.com", "Zavyar");