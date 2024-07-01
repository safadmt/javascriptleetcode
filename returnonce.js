var once = function(fn) {
    let hasbeencalled = false
    let obj = {calls : 0,value : null}
    obj.calls++
    
    
        return function (...args) {
            if(hasbeencalled) {
                return undefined
            }else {
                let arr = []
                let [a,b,c] = args;
                obj.value=fn(a,b,c)
                arr.push(obj)
                hasbeencalled = true
                return arr
            }
            
        }   
    
}

let fn = (a,b,c)=> (a+b+c)

let oncefn = once(fn)

let result = oncefn(1,2,3)
console.log(result)
let fn2 = (a,b,c)=> (a*b*c)
let oncefn2 = once(fn2)
let result2 = oncefn2(5,7,4)
console.log(result2)

console.log(oncefn(2,34,3))