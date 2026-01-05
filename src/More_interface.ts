interface Xhai {
    flavor: string
    price: number
    milk?: boolean
}

const masala:Xhai = {
    flavor: 'masala',
    price: 30
}

interface Shop{
    readonly Id: number
    name : string
}

const s:Shop = {Id: 1,name : 'Caffeepus' }

interface DiscountCalculator {
    (price : number): number
}

const apply50: DiscountCalculator = (p) => p * 0.5 

interface TeaMachine{
    start(): void
    stop():void
}

const machine: TeaMachine = {
    start(){
        console.log('start');
        
    },
    stop(){
        console.log('stop');
        
    }
}

interface ChaiRatings {
    [flavor : string]: number
}

const ratings: ChaiRatings = {

    masala: 3.4
}

interface User {
    name : string
}

interface User {
    age : number
}

const u: User = {
    name: "zavi",
    age: 1 
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {}