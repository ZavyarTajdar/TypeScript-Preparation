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
    constructor(
        public email: string, 
        public name: string
    )
    {

    }
}
// User.city = "New York"; // Error: Cannot assign to 'city' because it is a read-only property.
const zavyar = new User("zavyar@example.com", "Zavyar");