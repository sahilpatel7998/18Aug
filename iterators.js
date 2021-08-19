let fruit = ['mango','apple','orange','lemon'];

let iterator = fruit[Symbol.iterator]();

console.log(iterator);
console.log(iterator.next());
console.log(iterator.next().done);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done)

// if we want to see multiple value of array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

let iterator1 = array[Symbol.iterator]();

let result = iterator1.next();

while(!result.done){
    console.log(result.value);
    result = iterator1.next();
}

//----------------------------------------

let str = "hello world!"
let iter = str[Symbol.iterator]();

console.log(iter.next())
res = iter.next();

while(!res.done){
    console.log(res.value);
    res = iter.next();
}

let str1 = "hey there!!"

for(let iterator of str1){
    console.log(iterator);
}