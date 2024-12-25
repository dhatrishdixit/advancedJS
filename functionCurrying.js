function sum(a,b,c){
    return a + b + c;
}

console.log(sum(1,2,3));

// Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c);
            }
        }
    }
}

console.log(curry(sum)(1)(2)(3));