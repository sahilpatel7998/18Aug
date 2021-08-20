const num = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(num.reduce(reducer));

console.log(num.reduce(reducer,6));


const num1 = [11, 2, 3, 4];

const sum = num1.reduce((accumulator , curr) => {
    return accumulator;
})

console.log(sum);

//------------------------------------------------------------------

const num2 = [22, 34,5, 6,5];
const numReducer =  num2.reduce((accumulator , currentvalue) =>{
    return accumulator + currentvalue
},100)

console.log(numReducer);

//-------------------------------------------------------------

const num3 = [22, 34, 5, 6, 5,'hey'];
const num3Reduce = num3.reduce((ac, cv)=>{                     // NaN............
    return ac*cv;
})

console.log(num3Reduce);

//---------------------------------------------------

const num4 = [22, 34,5, 6,5];
const num4Reducer =  num2.reduce((accumulator , currentvalue) =>{
    return accumulator + currentvalue
},{})

console.log(num4Reducer);

