function compose (arrayofFunction) {
    return function () {
        for(let i = arrayofFunction.length; i > 0; i--){
            arrayofFunction[i]
        }
    }
}