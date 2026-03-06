//1. Can JS object hold a function as property?
const person = {
    name: "John",
    age: 35,
    greet: function(){
        console.log("Hello, I am " + this.name);
    }
}

//console.log(person.name);
console.log("Q1- js object can hold function property")
person.greet();

//2. what are anonymous func in JS? their syntax and implementation.
//normal func
function sayHello(){
    return "Hello, I am the world";
}
const helloMessage = sayHello();
//console.log(helloMessage)

//annonymous func

const hiMessage = function(){
    return "Hi, I am the world";
}
console.log("Q2-Annonimous function" + hiMessage());

//Q3 - var, let, const
/*
var - is function-socpeed or globally-scoped & can be re-declared and updated
let - is blocked-scoped and can be updated but not re-declared within the same scope
constant - is block-scoped and cannot be updated or re-declared
*/
function varExample1(){
    var x = 1;
    if(true){
        var x = 2;  // this is not created new var, it will update global var x=1;
        console.log(x); //output 2
    }
    console.log(x); //output 2
}
//varExample1();
//console.log("var example: " + varExample1());

function varExample2(){
    let x = 1;
    if(true){
        let x = 2;
        y = 3; 
       let z = 5;
        console.log(x);//2
    }
    x = 4;

    console.log(y); // it assumes as defaut 'var'
    //console.log(z) //ReferenceError: z is not defined(which is in block-scope)
    console.log(x); //1
}


//const
function varExample3(){
    const x = 1;
    if(true){
        const x = 2;
        console.log(x);
    }
    //x = 3; can not re-assigned
    console.log(x);

}
varExample3();