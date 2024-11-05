const IsOfAge = 18

let person = {
    name:"Markuss",
    age:16,
    IsStudent:true
}

console.log(person)

console.log(person.name)
console.log(person["name"])

console.log("Person is of age:",person.age > IsOfAge)
console.log("Person is a student:",person.IsStudent)

person = {
    name:"Markuss",
    age:16,
    IsStudent:true,
    course:"PT2024"
}

console.log(person)