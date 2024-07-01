const timelimit = function (fn, t) {
    return async function(...args) {
        const promise2 = new Promise((resolve,reject)=> {
            let timelimitid = fn(...args)
            resolve(timelimitid)
        
        })
        const promise3 = new Promise((resolve,reject)=> {
            setTimeout(() => {
            
            reject("Time Limit Exceeded")
        }, t);
        })
        return Promise.race([promise2,promise3])
    }
}