// foreach methods executes function for each element.

const array1 = ['a', 'b', 'c'];

let foreacharray = array1.forEach(element => element*2);

console.log(foreacharray);

//----------------

const array = ['naruto','sasuke','sikamaru'];
let ship = array.forEach(el => console.log(el));

//----------------------------------------------------------

const array11 = [3, 4,,6];

function arrayEelement(element, index, array){
console.log('a['+ index +']='+element)
}

console.log(array11.forEach(arrayEelement));

//-----------------------------------------
let words = ['one','two','three','four'];
words.forEach(function(word){
    console.log(word);
    if (word === 'three') 
    {
      words.shift();    
    }
})

console.log(words)