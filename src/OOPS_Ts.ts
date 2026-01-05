// class Chai {
//     flavor: string;
//     price: number;

//     constructor(flavor: string = "Regular", price: number = 50){
//         this.flavor = flavor;
//         this.price = price;
//     } 
// }

// const masalaChai = new Chai();
// masalaChai.flavor = "Masala";

class Chai {
    public flavor: string = "masala"

    private secretFormula = "elaichi"

    reveal(){
        return this.secretFormula
    }

}

class Shop {
    protected shopName = "Chai Cornor"
}

class Branch extends Shop {
    getName(){
        return this.shopName
    }
}

new Branch().getName

class Wallet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

new Wallet().getBalance

class Cup {
    readonly capacity : number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}


class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(val:number){
        if(val > 5)throw new Error("Too sweet")

        this._sugar = val
    }
}

new ModernChai().sugar = 2

class EkChai {
    static ShopName = "Tajar's Cafe"

    constructor(public flavor : string){}
}

console.log(EkChai.ShopName);


abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink {
    make(){
        console.log("brewing Chai");
        
    }
}



class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}