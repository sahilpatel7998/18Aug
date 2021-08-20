// return type - New array with the elements that pass the test.

const fruit = ['Apple', 'mango','lemon','orange','kiwi'];
const filterfruits = fruit.filter(fruit => fruit == 'mango');

const result = fruit.filter(fruit => (fruit.length < 5));

console.log(filterfruits);
console.log(result);

//-------------------------------------------------

const numbers = [21,2, 434,54,545,333];

const filtervalues = numbers.filter(value=>{
    return value >=100;
})
console.log(filtervalues);

// let prefix = " student";
// let studObj = {
//     [prefix + " name"] : "Rooney",
//     [prefix + " course"]: "MBA"
// };
// console.log(studObj["prefix"]);
// console.log(studObj["student course"]);

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); 

//---------------------------------------------------------------------------------

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

const filterFruits= (arr, query)=>{
    return arr.filter(el=> el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterFruits(fruit, 'ap'));
console.log(filterFruits(fruit, 'an'));

//-------------------------------------------------------------------------------------------


let sum= (a,b)=>a+b;

console.log(sum(44,75))

//----------------------------------------------------------------------

const num123= [ 5, 10, 15, 20, 25];
// const result1 = num123.filter(num => num >= 18);

console.log(num123.filter(num => num >= 18));


