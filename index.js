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

const printValue = () =>{

setTimeout(() => {
       dataBase.forEach(element => {
     console.log( element.name +" "+"likes to watch"+" "+ element.favShow );
// console.log(element.name);
    });
    // console.log(print);
}, 1000);

}
// printValue();

// dataBase.forEach(element) => {
//     console.log(element.name);
// }

const addValues = (entry, callback) => {

    setTimeout(() => {
        dataBase.push(entry);
        // console.log(dataBase);
        callback();
    }, 2000);

}
addValues({name : "sam",favShow : "sports"}, printValue);