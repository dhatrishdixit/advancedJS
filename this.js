// this keyword used in a function refers to object it belongs to 

// 1) implicit binding - this refers to the object that is calling the function , this is the most common use of this keyword , object on the right side of the dot is refered to by this keyword

const person = {
    name : "dhatrish",
    sayName : function(){
        console.log(`my name is ${this.name}`);
    }
}

// person.sayName();


// 2) explicit binding - this refers to the object that is passed as an argument to call, apply or bind method

function sayName(param){
    console.log(`my name is ${this.name} , this is inside ${param} method`);
}

// sayName.call(person,"call");

// we give context of person to sayName and then calls it ;

// const fun = sayName.bind(person,"bind");
// fun();

// 3) new binding - this refers to the object that is created by the constructor function or new keyword

function Person(name){
    this.name = name;
    this.sayName = function(){
        console.log(`my name is ${this.name}`);
    }
}

// when we write new keyword , javascript creates an empty object in which values can be assigned using this keyword
const person1 = new Person("dhatrish");


// 4) default binding - this refers to the global object (window in browser, global in node) if the function is called without any context

globalThis.name = "dhatrish";
function sayName() {
    console.log(`my name is ${this.name}`);
}

sayName();

// order of precedence of this binding
//  new binding > explicit binding > implicit binding > default binding