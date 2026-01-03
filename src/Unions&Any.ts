// union types
let subs: number | string = 5;

let apiReqStat: 'pending' | 'success' | 'error' = "pending"

let airlineSeat: 'aisle' | 'middle' | 'window' = 'aisle';

// any type

const orders = ['12', '20', '30', '42']

let currentOrder: string | undefined

for(let order of orders){
    if(order === '20'){
        currentOrder = order;
        break
    }
}
console.log(currentOrder);