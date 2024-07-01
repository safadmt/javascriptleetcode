var filter = function (arr,fn) {
    let array = []
    for(let i = 0; i < arr.length; i++) {
        
        if(fn(arr[i], i)) {
            array.push(arr[i])
        }
    }
    return array
}

let arr1 = [1,32,53,4,5];

const newarray = filter(arr1,(item, index)=> {
    if(item < 5) {
        
        return item;
    }
})

console.log(newarray)

