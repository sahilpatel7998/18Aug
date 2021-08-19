let a, b;
 [a,b] = [33,44];
 console.log(a, b);

 [a, b, c, ...d]= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
 merge  = [a, b, c, ...d]
 console.log(merge);

//Array destructuring function

let fruit = ["apple","mango","lemon","kivi"];

let aa, bb, cc, dd;
[aa,, cc, dd] = fruit;

console.log("the first fruit is"+ " " + aa);
console.log(cc);
console.log(`the last fruit is: "${dd}"`);

//---------------------------------------------------------------------------------------
// Object destructuring

const student = {
    name:'john',
    id:'1',
    gender: 'male'
}

let {name:myname, id, gender} = student;

console.log(`the name of the student is:"${myname}" . _id : "${id}"`)

//---------------------------------------------------------------------------------------------

let car = {
 
  Name: "I20",
  capacity: 4,
  type : {
      colour: "red",
      fuel : "petrol",

  }
}

// let name1 , _idd , Gender;

 let{name1, _id , Gender} = car;
console.log(`the car colour is:"${Gender.colour}"`)


