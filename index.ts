

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}


let person1: Person = {
    name: "Joe",
    age:  42,
    isStudent: true,
 }

let person2: Person = {
    name: "Joe",
    age:  66,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "Springfield",
        country: "USA"
    }
}

let people: Array<Person> = [person1, person2];
let people2: Person[] = [person1, person2]; // the same

let myName  = "Bob"
const myName2 = "Bob"



/*
UNIONS

similar to enums 

*/

type User = {
    id: number
    username: string
    role?: UserRole
}

type UserRole = "guest" | "member" | "admin";


let userRole: User = {
    id: 10,
    username: "john_doe",
    role: "admin" 
}



/*

TYPE NARROWING

*/


import getPizzaDetail  from "./pizza.ts"

// console.log("getPizzaDetail: ",getPizzaDetail(false))



/*

FUNCTION return type

*/
 let nextUserId = 1

const users: User[] = [
    { id: nextUserId++, username: "john_doe",role: "member" },
    { id: nextUserId++, username: "jane_doe",role: "admin" },
]
 
function fetchUserDetails(username: string): User{
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`);
    }
    return user
}


/*


*/

type UpdatesUser =  Partial<User>
type UpdateUserOmit = Omit<User, "id">

function updateUser(id: any, updates: any): void {
    const user = users.find(user => user.username === id);
    if (!user) {
        throw new Error(`User with id ${id} not found`);
    } 
    Object.assign(user,updateUser)
}

function addNewUser(newUser: UpdateUserOmit): User {
    const user: User = {
        id: nextUserId++,
        ...newUser
    } 
    users.push(user);
    return user;
}   


// updateUser(2, { username: "new_john_doe" })
addNewUser({ username: "new_user", role: "guest" });
console.log('users: ', users);

// stop 1.33.40


const gameScores = [14,21,33,42,59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"]
const voters = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]



function getLastItem<T>(array: T[]): T | undefined{
    return array[array.length - 1];
}

console.log("Last game score:", getLastItem(gameScores));
console.log("Last favorite thing:", getLastItem(favoriteThings));
console.log("Last voter:", getLastItem(voters));