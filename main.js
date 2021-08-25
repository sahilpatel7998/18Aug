const name = ["Sahil", "Jay", "Hitesh", "DarshN", "JOhn"];


let newArray = [];



const lowercaseNAme = () => {
    setTimeout(() => {
        name.forEach(element => {
        let Name = element.toLowerCase();
        // console.log(Name);
        newArray.push(Name)
    });
    console.log(newArray);
    lowerSort();
   

    }, 2000);
}

//lowercaseNAme();
// lowercaseNAme(lowerSort);

let lowerSort= () => {
   setTimeout(() => {
        newArray.sort();
        console.log(newArray);
   }, 3000);
//    console.log(newArray);
}
// newArray.sort();

// console.log(newArray);

// lowerSort();
lowercaseNAme();

//=====================================================

var callback = () => {
    console.log("Done!");
}

setTimeout(callback, 5000);

setTimeout(() => {
    console.log("Hey there !!")
}, 3000);


