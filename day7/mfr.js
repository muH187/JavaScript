let arr = [1, 2, 3, 4, 20, 23, 10, 5, 8, 12]

// let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }

let newArr = arr.map((e)=>{
    return e**2
})

console.log(newArr)

const greaterThanSeven = (e)=>{
    return true
}
newArr.filter(greaterThanSeven)