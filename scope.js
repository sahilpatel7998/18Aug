{
  let x = 2;
}
// console.log(x);     can't accessed

// function scope--------------------

function myFunction() {
  let carName = "Volvo";
  // can use here
}

// can't

function func()=>{
    var carName = "Creta";
    // can
}

// can use

function myfunction()=>{
    const car = "jaguar";
}

// Global scope--------------------------------------

// variable can be accessed globally when declare outside of block (specially for let and const), global variable can be accessed from anywhere throughout program.

var x = 2;
let y = 2;
const z = 2;

myFunction();


function myFunction() {
  carName = "Volvo";
}