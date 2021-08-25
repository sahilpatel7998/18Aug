// function

const func = (name) => {
console.log("hi" +" "+ name);
}

func("sahil");
//================================
const func1 = (name1, callback) => {
    console.log(`hi ${name1}`);
    callback();                 // or you can put "func2()"  here
}

const func2 = ()=>{
    console.log("this is second function")
}

func1("sahil", func2);

