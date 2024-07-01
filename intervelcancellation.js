const cancellable = function (fn , args, t) {
    fn(...args)
    const clearId = setInterval(() => {
        fn(...args)
    }, t);

    return function () {
        clearInterval(clearId)
    }
}

let fn = (x)=> x * 2
const clear = cancellable(fn,[4],35)
