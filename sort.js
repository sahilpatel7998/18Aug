const fruit = ['Apple', 'mango','lemon','orange','kiwi'];

console.log(fruit.sort());

const array1 = [-41, 303454354, 43, 214, 100000];

console.log(array1.sort());

//-----------------------------------------------------------

let numbers = [1, 23, 3, 42, 566];

let sortedNumber = numbers.sort((a,b)=>{
    if (a > b) {
        return 1;
    }
    else if (a < b){
        return -1;
    }
    else{
        return 0;
    }
})

console.log(sortedNumber);

//----------------------------------------------------------------

let numbers1 = [1, 23, 3, 42, 566];
let sorting = numbers1.sort((a,b)=>{
    return a - b;                             // for reverse = return b - a;
});

console.log(numbers1);
//...................................................................

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];
let sortedItems = items.sort((a,b)=>{          // sorted by value
    return a.value - b.value;
});

console.log(sortedItems);

let sorted = items.sort((a,b)=>{
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB){                         // sorted by name
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
})

console.log(sorted);

//----------------------------------------------------------------

let stringArray = ['Blue', 'Humpback', 'Beluga'];
let numericStringArray = ['80', '9', '700'];
let numberArray = [40, 1, 5, 200];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function comparenum(a,b) {
    return a-b;
};

console.log(stringArray.join());
console.log(stringArray.sort());

console.log(numericStringArray.join())
console.log(numericStringArray.sort())
console.log(numericStringArray.sort(comparenum))

console.log(numberArray.join());
console.log(numberArray.sort())
console.log(numberArray.sort(comparenum))

console.log(mixedNumericArray.join())
console.log(mixedNumericArray.sort())
console.log(mixedNumericArray.sort(comparenum))
