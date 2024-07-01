async function sleep(millis) {
    return new Promise(resolve=> {
        setTimeout(() => {
            resolve("100")
        }, 100);
    })
    
}

// sleep(100).then(response=> {
//     console.log(response)
// }).catch(err=> console.log(err))

async function hello () {
    try{
        let res = await sleep(100);
        console.log(res)
    }catch(err) {
        console.log(err)
    }
}

hello()


