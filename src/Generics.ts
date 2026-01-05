function wrapInArray<T>(Item: T): T[]{
    return [Item]
}

wrapInArray("masala")
wrapInArray(2)
wrapInArray(true)
wrapInArray({})

function pair<T, Z>(t: T, z: Z): [T, Z]{
    return [t, z]
}

pair("masala", "22")
pair("masala", 22)
pair("masala", {name:"zavyar"})

interface Box<T>{
    age: T
}

const numberBox: Box<number> = {age: 1}

interface API_Promise<T>{
    status: number,
    data: T
}

const res: API_Promise<{flavor: String}> = {
    status : 200,
    data: {flavor: 'masala'}
}
