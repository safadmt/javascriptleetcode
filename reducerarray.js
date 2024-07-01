var reduce = function (arr, fn,init) {
    let sum = init ? init : 0;
    
        for(let i = 0; i < arr.length;i++) {
            sum = fn(sum,arr[i]) 
        }
   
        
   
    return sum;
}

let array = [1,2,3,4];
let value = 0
const fun = reduce(array,(value,item)=> {
    return value + item * item;
},value)
console.log(fun)

let array2 = [1,2,3,4];
let value1 = 100
const fun2 = reduce(array2,(value,item)=> {
    return value + item * item;
},value1)
console.log(fun2)
let array3 = [];
let value2 = 25


const fun3 = reduce(array3,(value,item)=> {
    return value + item * item;
},value2)

console.log(fun3)