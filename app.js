// const sum = (num1,num2)=> {

//     return 1 + num2;

// }

// sum(1,2);

//  const function =()=>{}



// function1(function2);

const dataBase = [
    {
        name : "Darshan",
        favShow : "Friends"
    },
    {
        name : "Hiren",
        favShow : "HIMYM"
    },
    {
        name : "Hitesh",
        favShow : "Ozarks"
    },
    {
        name : "Jay",
        favShow : "Pogo"
    },
    {
        name : "Sahil",
        favShow : "Webseries"
    },
]
var arr2 = new Array({name : "childs", value: '5'},
                     {name: "lang", value: "German"});


const concat = () => {
    dataBase.push(arr2);
    console.log(dataBase);
}

concat();

