// export { }
var message = "hello world !";
document.write(message);
// variable declaration
var x = 3;
var y = 4;
// let x = 5;
var array;
// const newArr;                                          'const' declarations must be initialized.
//====types in typescript
var isNew = true;
var num = 500;
// num = true;
var text = "hello there!!";
number;
var list = [1, 2, 3, 4, 5]; //we can do one them <<-----
var listOne = [1, 2, 3, 4, 5];
var person = ['hey', 11];
//------------------------------------
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//---------------------------
var value = 10;
value: true; //any types doesn't throw an error
value;
"hello";
//---------------------------------
var randomValue = 11;
// console.log(randomValue.anything);                 //it not throws an error
// randomValue();                                      //we can call as function too
// randomValue.toUpperCase();
//----------------------------
var randomValues = 11;
// (randomValues as string).toUpperCase();
//------------------------
var a;
a = "webelight";
a = true;
a = 87;
var b = 22;
// b = false;                         we can't define b in boolean value here.....
//------------------------------------------------
var valueOf;
valueOf = 1; //ok
valueOf = 'myString'; //ok
// valueOf = true;                       //compilation error for a boolean
//------------------------
function add(num1, num2) {
    return num1 * num2;
}
console.log(add(5, 20));
console.log(add(5)); // it will not throw an error cuz "num" para is option parameter.
// add(5, "20");
// add()                                  add(num1: number, num2: number): number         it also gives number as a return
