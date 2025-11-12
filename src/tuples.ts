// const userlist: (string | number)[] = ["zavyar", 4, "tajdar"]

let userlist:[string, number, boolean]
userlist = ["zavyar", 4, true]

let rgb: [number, number, number]
rgb = [255, 123, 12]

type User = [number, string]

const newUser: User = [334, "zavyar"]
newUser[1] = "hc.com"
// newUser.push(true)

export {}