var map = function (arr,fn) {
    
        let array = []
        for(let i = 0; i < arr.length; i++) {
            
            array[i] = fn(arr[i] , i)
        }
        return array;
    
    
}
let array1 = [1,2,3]

const newArray = map(array1,(item, index)=> {
    return item + 1
})
const newArray2 = map(array1,(item,index)=> {
    return item + index
})
console.log(newArray2)
const newArray3 = map(array1, ()=> {
    return 42
})
console.log(newArray3)
