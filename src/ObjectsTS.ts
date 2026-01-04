const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

let tea: {
    name: string;
    price: number;
    isHot: boolean
}


tea = {
    name: "",
    price: 22,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients : string[]
}

const karakChai: Tea = {
    name : "karak chai",
    price: 25,
    ingredients: ['milk', 'water', 'etc']
}

type Cup = {size: string};
let smallCup: Cup = { size: "200ml"}

let bigCup = {size : '500ml', material: "glass"}

smallCup = bigCup

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const ChaiBrew:Brew = coffee

type User = {
    username: string;
    password: string
}

const u: User = {
    username: 'chai',
    password: '1z12'
}

type Item = {name: string, quantity: number}
type Address = {street: string, Zip: number}

type Order = {
    id: string
    item: Item[]
    address: Address
}

type Chai = {
    name: string
    price: number
    isHot: boolean
}

const UpdateChai = (updates: Partial<Chai>) => {
    console.log("updates:", updates);
}

UpdateChai({price: 25})
UpdateChai({isHot: false})
// UpdateChai({})

type ChaiOrder = {
    name?: string
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>) =>{
    console.log(order);
}

placeOrder({
    name: "Masala Chai",
    quantity : 1
})

type Chai1 = {
    name : string,
    price : number,
    isHot : boolean
    ingred : string[]
}

type BasicChaiInfo = Pick<Chai1, 'name' | 'price'>

const ChaiInfo: BasicChaiInfo = {
    name: 'lemon Tea',
    price: 30
}

type ChaiNew = {
    name : string,
    price : number,
    isHot : boolean
    secrectsIngredients : string
}

type PublicChai = Omit<Chai, "secrectsIngredients">
