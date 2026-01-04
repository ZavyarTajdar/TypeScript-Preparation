type chaiOrder = {
    type: string; 
    sugar: number; 
    strong: boolean;
}

// function makeChai(order: {type: string; sugar: number; strong: boolean}){
//     console.log(order);
// }

function makeChai(order: chaiOrder){
    console.log(order);
}

function serveChai(order: chaiOrder){
    console.log(order);
    
}

// type TeaRecipe = {
//     water : number
//     milk : number
// }

interface TeaRecipe{
    water : number
    milk : number
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

interface CupSize{
    size : "small" | "large"
}

class Chai implements CupSize {
    size: "small" | "large" = "large"
}

// type Res = { ok:true } | { ok : false}
// class API implements Res {
//     ok: boolean = true;
// }

type TeaType = "green" | "black" | "herbal";

function order(t : TeaType){
    console.log(t);    
}

type baseChai = {teaLeaves: number}
type Extra = {masala: number}

type KarakChai = baseChai & Extra

const Cup: KarakChai = {
    teaLeaves: 2,
    masala: 1
}

type user = { // Also Known As Literal type
    username: String
    bio?: string
}

const user1:user = {
    username: "Zavyar"
}

type Config = {
    readonly appName: String
    version: number
}

const cfg: Config = {
    appName : "MasterJi",
    version: 2.21
}

// cfg.appName = "zavinsta"