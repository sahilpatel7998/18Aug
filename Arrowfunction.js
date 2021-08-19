// in one there is no need to take braces it will automatically return the

let hi = ()=> "hey there!!"
console.log(hi());

let hey = ()=> ({name:"john"});
console.log(hey());

let hii = name =>  "hey there" +" "+ name;      //there is no need parenthesis if we have single parameter 
console.log(hii('john'));

let hello = (name, greet) => "hello "+" "+name+" "+greet; // if we have multiple para put them in parenthesis then
console.log(hello('john','how you doing?'));

const sum = (a,b)=> a+b;

console.log(sum(20, 30))
