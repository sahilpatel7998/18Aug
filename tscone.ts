// export { }

let message = "hello world !";
document.write(message);

// variable declaration

let x = 3;
const y = 4;

// let x = 5;
let array;
// const newArr;                                          'const' declarations must be initialized.


//====types in typescript

let isNew: boolean = true;

let num: number = 500;
// num = true;

let text: string = "hello there!!"; number

let list: number[] = [1, 2, 3, 4, 5];                                                  //we can do one them <<-----
let listOne: Array<number> = [1, 2, 3, 4, 5];

let person: [string, number] = ['hey', 11]

//------------------------------------
enum Color{ Red, Green, Blue };

let c: Color = Color.Green;
console.log(c);

//---------------------------

let value: any = 10;
value: true;                                   //any types doesn't throw an error
value; "hello";

//---------------------------------
let randomValue: any = 11;

// console.log(randomValue.anything);                 //it not throws an error
// randomValue();                                      //we can call as function too
// randomValue.toUpperCase();

//----------------------------

let randomValues: unknown = 11;

// (randomValues as string).toUpperCase();
//------------------------

let a;
a = "webelight";
a = true;
a = 87;

let b = 22;
// b = false;                         we can't define b in boolean value here.....

//------------------------------------------------

let valueOf: (string | number);

valueOf = 1; //ok
valueOf = 'myString'; //ok
// valueOf = true;                       //compilation error for a boolean

//------------------------

function add(num1:number, num2?:number):number {                   //if we take ==>   num2 :number =10    then it will set "10" as default parameter.
    return num1 * num2;
}

console.log(add(5, 20));
console.log(add(5));                      // it will not throw an error cuz "num" para is option parameter.
// add(5, "20");
// add()                                  add(num1: number, num2: number): number         it also gives number as a return

