let score: number | string  = 55

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let zavyar: User | Admin = {name: "zavyar", id: 334}

zavyar = {username: "hc", id: 334}

// function getDBId(id : number | string){
//     console.log(`DB id is ${id}`);
    
// }
// getDBId(true)


function getDBId(id : number | string){
    if (typeof id === "string") {
        id.toLowerCase();   
    }
}
getDBId(3)
getDBId("3")

//array 

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"