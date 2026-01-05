// ***************************- Array - ***************************
const chaiFlavours: string[] = ['should', 'expect', 'assert'];

const httpStatusCodes: number[] = [200, 201, 400, 401, 403, 404, 500];

const rating: Array<number> = [1, 2, 3, 4, 5];


type Chai = {
    name: string;
    price: number;
}

const menu: Chai[] = [
    { name: 'Green Tea', price: 3.5 },
    { name: 'Black Tea', price: 4.0 },
    { name: 'Oolong Tea', price: 4.5 }
]

const cities: readonly string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

// cities.push('San Francisco'); Error: Property 'push' does not exist on type 'readonly string[]'.

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// ***************************- Tuples - ***************************

let chaiTuple: [string, number]
chaiTuple = ['Earl Grey', 4.5];
// chaiTuple = [4.5, 'Earl Grey']; Error: Type 'number' is not assignable to type 'string'.

let userInfo: [name: string, Roll_no: number, is_present: boolean]
userInfo = ["Zavyar", 1105, true]

const location: readonly [number, number] = [40.7128, -74.0060];

const ChaiItems: [name: string, price: number][] = [
    ['Matcha', 5.0],
    ['Chamomile', 4.0],
    ['Jasmine', 4.5]
];

// ***************************- Enums - ***************************

enum ChaiType {
    Green = 'Green Tea',
    Black = 'Black Tea',
    Oolong = 'Oolong Tea',
    Herbal = 'Herbal Tea'
}

const myChai: ChaiType = ChaiType.Oolong

enum HttpStatus {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound, //= 404,
    InternalServerError = 500
}

const responseStatus: HttpStatus = HttpStatus.NotFound;

enum RandomEnum {
    ID = 1,
    NAME = 'Zavyar'
}
// Its not good practice to mix types in enum but its possible in TS

const enum sugar{
    LOW = 1,
    MEDIUM,
    HIGH
}

const mySugarLevel: sugar = sugar.MEDIUM;

let t: [number, string, boolean] = [1, 'hello', true];
t.push(2); // Allowed
// t.push(true); // Allowed
// t.push('world'); // Allowed