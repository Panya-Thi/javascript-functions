// Start coding here
let add = (a, b) => {
    
    return a+b
}
add(10, 5)
console.log(add(10,5))

let subtract =(a, b) => {
  
    return a-b
}
subtract(10,5)
console.log(subtract(10,5))

let multiply =(a,b) => {
    
    return a*b
}
multiply(10,5)
console.log(multiply(10,5))

let divide = (a,b) => {
    
    return a/b
}
divide(10,5)
console.log(divide(10,5))

let calculator = {
    add : add,
    subtract : subtract,
    multiply: multiply,
    divide : divide,
};
let addResult = calculator.add(10,20)

console.log(addResult)
let divideResult = calculator.divide(3000,10)

console.log(divideResult)