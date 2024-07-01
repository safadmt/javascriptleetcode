var cancellable = function (fn , args,t) {
    const cancelfn = setTimeout(() => {
        console.log(fn(...args))
    }, t);
    return function () {
        clearTimeout(cancelfn)
        console.log("Cancelled")
    }
}

let fn = (x1,x2)=> x1 * x2
let cancellfn = cancellable(fn,[2,4],30)
setTimeout(cancellfn,100)