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
const userDetails = (arr1)=>{
    setTimeout(()=>{
    dataBase.forEach(element => {
        console.log(`${element.name} likes to watch ${element.favShow}`);
    });
},500);
}
const addDetails= (entry,callback) =>{
    setTimeout(()=>{
    dataBase.push(entry);
    callback();
},1000);
}
addDetails({name: "Sachin",favShow : "Bheem"},userDetails);