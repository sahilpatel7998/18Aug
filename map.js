//map() methods gives new array with being result of the callback function.

const array = [1, 2 ,3 ,4 ,5];
const array1 = array.map(x => x*2);

console.log(array1);

//---------------------------

let numbers = [1, 2, 43, 34];
let roots = numbers.map(function(num){
    return Math.sqrt(num);
});

console.log(roots);

//----------------------------------------------------------------

let numbers1 = [11, 22, 33];
let plus = numbers1.map(function(num){
    return (num + 11);
});
console.log(plus);

//----------------------------------------------------------------
//reformat the array

const array2 = [{key:1,value : 10},{key:2,value :20},{key:3,value :30}];

console.log(array2);

let reformatedArray = array2.map(obj => {
    rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
})

console.log(reformatedArray);

//----------------------------------------------------------------

console.log(["1", "2", "3"].map(parseInt));

//---------------------------------------------------------------

let numbers2 = [1,2,3,3]
let filterNumbers2 = numbers2.map((num, index)=>{
    if (index < 3) {
        return num;
    }
});

console.log(filterNumbers2);