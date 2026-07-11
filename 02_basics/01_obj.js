const mySym = Symbol("Hero1")

const JSuser = {
    name : "Vishal",
    age : 22,
    mail : "vishal@google.com" ,
    [mySym] : "Hero"
}

// console.log(JSuser);
// console.log(JSuser.age)
// console.log(JSuser["name"])

console.log(typeof mySym)

console.log(JSuser[mySym])

console.log(typeof [mySym])