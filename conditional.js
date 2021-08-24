function func(here) {

return (here ? '100rs.' :'200rs.' );

}

console.log(func(true));

console.log(func(false));

console.log(func(null));

//-------------------------------------------------

var age = 22;

var average = (age <= 20) ? "hey" : "hello";
console.log(average);

//==================================================

let hello = person => {
    let name = person ? person.name : "stranger" ;
    return `howdy ${name}`
}

console.log(hello ({name : "john"}));
console.log(hello(null));

//==================================================

