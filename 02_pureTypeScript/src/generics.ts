const score : Array<number> = [1, 2, 3, 4, 5];
const stringArray: Array<string> = ['a', 'b', 'c', 'd', 'e'];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

// identityThree(true)

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string;
    type: number;
}

// identityFour<Bottle>({ brand: 'coke', type: 1 });

function getSearchProducts<T>(products: T[]): T | undefined {
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T,>(products: T[]): T | undefined=> {
    const myIndex = 4;
    return products[myIndex];
}

interface Database {
    connection: string;
    username: string;
    password: string;
}

function anotherFunction<T, U>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction<number, string>(3, 'hello');

interface Quiz {
    name: string;
    type: string;
}
interface Course {
    name: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T) {
        this.cart.push(product);
    }
}