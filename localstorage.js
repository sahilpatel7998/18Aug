localStorage.setItem('name' ,'harry');  // it saves in name ==> value harry

localStorage.setItem('name2','John');

let name = localStorage.getItem('name2');
console.log(name);

// localStorage.clear();    -------- it clears entire key- value pair inside storage

//clear particular key-value pairs 

localStorage.removeItem('name');

console.log(localStorage.getItem('name'));



//if you want to save array in to local storage it gives array as string instead

const array = ["apple", "mango", "lemon", "kiwi"];

localStorage.setItem("fruit", array)



//if we want to add array in local storage as it is .we need to use JSON.stringify

const array1 = ["john", "darshan", "hitesh", "sahil", "jay"];
localStorage.setItem('sabzi', JSON.stringify(array1));

name = JSON.parse(localStorage.getItem('sabzi'));
// JSON.parse(console.log(name));
console.log(name);


//==================================================================
function clickCounter()
{
  if(typeof(Storage) !== "undefined")
  {
    if (localStorage.clickcount)
    {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    //   localStorage.clear();
    }
    else
    {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
   }
   else
   {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
   }
}





