function memmorize (fn) {
    
    let cache = {}
    return function(...args) {
        let string = JSON.stringify(args)
        if(cache[string]) {
           
            return cache[string]
        }else{
           
            let result = fn(...args)
        cache[string] = result
        return result
        }
        
        
    
    }
        

}
let sum = (a,b)=> a + b;
const factorial = (n)=> n <= 1 ? 1 : (n * factorial(n - 1))
const fib = (n)=> n <= 1 ? 1 : fib(n - 1) + fib(n-2)
let hi = memmorize(sum)
let result1 = hi(2,2)

let factor = memmorize(factorial)

const fibna = memmorize(fib)
console.log("fibna",fibna(6))
console.log("factor",factor(2))
console.log("factor",factor(3))
console.log("factor",factor(2))
console.log("sum",result1)
let result = hi(2,2)
console.log("sum",result)
let va = hi(1,2)
console.log("sum",va)
