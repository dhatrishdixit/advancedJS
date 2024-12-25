function outer(){
    let counter = 0 ;
    function inner(){
        counter++;
        return counter;
    }
    
    return inner;
    
    // in closure, the inner function has access to the outer function scope even after the outer function has returned
    // closure - when an function is returned from another function, it returns inner function as well outer function scope  

    // correct exlanation of closure in this url - https://chatgpt.com/share/676adf18-b4c8-8000-827e-1fceac1cc1b7
}

let fn = outer();
console.log(fn());
console.log(fn());