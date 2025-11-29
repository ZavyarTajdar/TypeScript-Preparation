function detectType(value: number | string){
    if (typeof value === 'number') {
        return value + 1;
        console.log("It's a number");
    } else {
        return value.toLowerCase()
        console.log("It's a string");
    }
}

function provideId(id: null | string){
    if (id === null) {
        return "No ID provided";
    }
    return id.toLowerCase();
}