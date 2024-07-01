var once = function (fn) {
    let age = 10
    return function () {
        console.log(this.age)
    }
}

let a = once();

a()