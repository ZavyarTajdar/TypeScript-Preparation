function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `It's a string of length ${kind.length}`;
    }    else {
        return `It's a number with value ${kind}`;
    }
}

function serveChai(msg?: string) {
    if (msg) {
        console.log("Serving chai with message: " + msg);
    }
    return "Chai served!";
}

function orderChai(size: 'small' | 'medium' | 'large' | number) {
    if (size === "small") {
        return `small chai`
    }
    if (size === 'medium' || size === 'large') {
        return `make extra chai`
    }

    return `chai order #${size}`
}

class KulhadChai{
    serve(){
        return `serving kulhad Chai`
    }
}
class CuttingChai{
    serve(){
        return `serving Cutting Chai`
    }
}

function serve(chai: KulhadChai | CuttingChai){
    if (chai instanceof KulhadChai) {
        return chai.serve
    }
}

type ChaiOrder = {
    type: string
    sugar : number 
}

function isChaiOrder(obj:any): obj is ChaiOrder{
    return(
        typeof obj === "object" && obj !== null && typeof obj.type === "string"
    )
}

function serveOrder(item: ChaiOrder | string){
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar `
    }
    return `serving custom chai: ${item}`
}

type MasalaChai = {
    type: "Masala";
    spiceLvl: number 
}
type KarakChai = {
    type: "karak";
    amount: number 
}
type GingerChai = {
    type: "Ginger";
    amount: number 
}

type chai = MasalaChai | GingerChai | KarakChai
function MakeChai(order: chai){
    switch (order.type) {
        case "Masala":
            return `Making Masala chai with spice level ${order.spiceLvl}`;
            break;
        case "karak":
            return `Making Karak chai with spice level ${order.amount}`;
            break;
        case "Ginger":
            return `Making Ginger chai with spice level ${order.amount}`;
            break;
        default:
            break;
    }
}

function brew(order: MasalaChai | KarakChai){
    if ("spiceLvl" in order) {
        return `Brewing ${order.type} chai with spice level ${order.spiceLvl}`;
    }
}

function isStringArray(arr: unknown): arr is string[]{
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}