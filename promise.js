var addTwoNumbers = function(promise1,promise2) {
    return Promise.all([promise1,promise2])
    .then(response=> {
        return response.reduce((accu,current)=> accu + current)
        
    })
    .catch(err=> {
        return err
    })
}


let promise1 = new Promise((resolve,reject)=> setTimeout(() => {
    resolve(10)
}, 50))

let promise2= new Promise((resolve,reject)=> setTimeout(() => {
    resolve(-12)
}, 30))

async function promis () {
    try{
        let result = await addTwoNumbers(promise1,promise2)
    console.log(result)
    }catch(err) {
        console.log(err)
    }
}

promis()
