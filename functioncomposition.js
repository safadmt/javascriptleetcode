function compose (functions) {

    return function (x) {
        
        let data = functions.reduceRight((accu,current) => {
            accu = current(accu)
            return accu
        },x)
        
        return data
        
    }
    
}

let hi = [x=> x+1,x=> x*x,x=> 2 * x]
let fn = compose(hi);
let result = fn(4)
console.log(result)
let fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x])
console.log(fn2(1))
let fn3 = compose([]);
console.log(fn3(42))
