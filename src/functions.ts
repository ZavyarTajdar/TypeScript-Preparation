function makeChai(type: string, cups: number){
    console.log(`making ${cups} cups of ${type} chai`);   
}

makeChai("Karak", 2)

function getChaiPrice(): number{
    return 150
}

function makeOrder(order: string){
    if (!order) return null
    return order
}

function logChai(): void{
    console.log("Chai is Ready");
}

// function OrderChai(type?: String){

// }
function OrderChai(type: String = "Masala"){

}

function createChai(order: {
    type: String;
    sugar: number;
    size: "small" | "large"
}): number {
    return 2
}
