// ******************- Assertion -*****************
let response: any = "42"

let numericLength: number = (response as string).length

type Book = {
    name: string
}

let bookString = '{"name": "who moved my cheese"}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);


const inputElement = document.getElementById('username') as HTMLInputElement

// ******************- Unknown -*****************

let value: any

value = 'chai'
value = [1, 2, 3]
value = 2.5

let Newvalue: unknown

value = 'chai'
value = [1, 2, 3]
value = 2.5
if (typeof Newvalue === "string") {
    Newvalue.toUpperCase()
}

try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }   
    console.log(error);
    
}

const data:unknown = "chai aur code"
const strData: string = data as string

// ******************- Never -*****************

type Role = "admin" | "user" | "SuperAdmin"

function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Admin Dashboard")
        return
    }
    if (role === "user") {
        console.log("User Dashboard");
        return
    }
    role;
}

function neverReturn(): never{
    while(true){}
}