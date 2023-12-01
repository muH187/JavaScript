
// let random = Math.random()

// let a = prompt("Enter your first number: ")
// let b = prompt("Enter your operation: ")
// let c = prompt("Enter your second number: ")

// let obj = {
//     "+": "-",
//     "-": "*",
//     "/": "+",
//     "*": "/"
// }

// if(random > 0.1) {
//     console.log(`The result is ${a} ${b} ${c}`)
//     alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
// }
// else {
//     b = obj[b]
//     alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
// }



let random = Math.random()

let a = prompt("Enter first number")
let b = prompt("Enter operator")
let c = prompt("Enter second number")

let obj = {
    "+": "-",
    "-": "*",
    "*": "/",
    "/": "+"
}

if(random > 0.1){
    // console.log(`The result is ${a} ${b} ${c}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    b = obj[b]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}