// 1.let
let array = [1, 2, 3, 4,"hail"];

// 2.let vs var
for (var i = 0; i < array.length; i++) {
console.log(array[i])   ;
}
console.log("this is sparta!");

console.log("hey there!!")

console.log(array);
// console.log(i)

// 3.const 
const array1 = [1, 2, 36, 40];

// 4.Default function parameters 
function say(message = "hi"){
    console.log(message);
}
// console.log(message);
say();
say('hello');

function add(x, y) {
   return x + y;
}

add(10,2);

function say(message){
    console.log(message);
}
say();

function getFee(is){
    return(getFee ? '2' : '34');
}

console.log(getFee(true));

console.log(getFee(false));

console.log(getFee(null));

function creatDiv(height = '100px',width = '100px',border = '1px solid red') {
    let div= document.createElement('div');
    div.style.height = height ;
    div.style.width = width ;
    div.style.border = border ;
    document.body.appendChild(div);
    return div;
}

function add(a, b=2) {   
    console.log(a + b);    
}

 add(10); 

//  5.rest parameters

// function sum(a,b) {      ES5
//     console.log(a*b);
// }
// sum(1,2,3,4,5,6);

function sum (...anything) {
    console.log(...anything);                   // enter three dot (...anything) for an array value.
    let  total = 1  ;                            // gave initial value of total
    for(let i of anything){
        total *= i ;                            //total = total + i
    }      
    console.log(total);        
}
sum(1,2,3,4,5,6);

//6. spread operator

function myFunction(a, b, c){
    console.log(a+b+c);
}

  var arrayVal= [1,4,66];

myFunction(...arrayVal); 
console.log(...arrayVal);

  // => it replaced concat.

  let arr11 = [1, 2, 3];
  let arr22= [4, 5, 6];

//   let arr11 = arr11.concat(arr22);
arr11 = [...arr11,...arr22]


  console.log(arr11);

  // it also replaced copy()

  let arc1=[1, 2, 3];
//   let arc2 = arc1;

//   console.log(arc1);
    // arc1.push(4,5);

    let arc2 = [...arc1,4,5];

    console.log(arc1);
    console.log(arc2);
