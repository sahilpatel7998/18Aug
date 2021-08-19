//1.

let name = "webelight"
let course = "JavaScript"

var obj = {
    name ,
    course,
}

console.log(obj);

///2. 

let n = 'name';

var obj1  = {
    ["company"+n] : "webelight",
    course : "React",
    detail : function(){
        return `${this.companyname} course is: ${this.course}`
    }
}

console.log(obj1);
console.log(obj1.course);
console.log(obj.name);

console.log(obj1.detail());

//3.

let N = 'name';

var obj2  = {
    ["company"+N] : "webelight",
    course : "React",
    detail() {                                                                     //ES6
        return `${this.companyname} course is: ${this.course}`
    }
}

console.log();
console.log(obj2.detail());
console.log(obj2['detail']());

let first_name = "sahil";
let last_name = "patel" ;
let technology = "react";

function student(first_name, last_name, technology) {
   let full_name = first_name + " " +last_name ;
     return (`${full_name} course: ${technology} `);
}

let result = student(first_name, last_name, technology);
console.log(result);
// console.log(result);
// console.log(result.full_name);
