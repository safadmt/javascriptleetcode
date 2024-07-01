var cancellable = function (fn, args,t) {
    let clearid = setInterval(()=> {
      console.log(fn(args))
    },t)
    
    
    return function() {
      clearInterval(clearid)
    }
}

let fn = (a)=> a * 2  

let res = cancellable(fn,4,35)
setTimeout(() => {
  res()
}, 190);
// let clear = setInterval(()=> {
//   console.log(fn(4))
// },35)
// setTimeout(() => {
//   clearInterval(clear)
// }, 190);
