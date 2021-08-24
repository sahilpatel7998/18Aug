function sum1(x, y){
    total = x + y;
    console.log(total);
}
sum1(10 , 20)

function sum(a, b){                     
    add = a + b;                         
    return add;                           
}

// console.log(sum(11, 12));   or 

const bag = sum(11, 22);
console.log('the sum of two no is :'+ bag);

addition =  100 + bag;
console.log(addition);

//==========================================================

function fullName( fname = "naruto", lname = "uzumaki") {
    var name = fname + " " + lname;

    return name;
};

fullName("John", "Doe");            // it will not give you results for

let bags = fullName("John", "Doe");
console.log(bags);                     // so you have to call function in variable for return function

//==================================================

function marks(maths, sc, eng){
    var totalMarks = maths + sc + eng;
    return totalMarks;
}

function percentage(percent){
    var per = percent/300 * 100;
    console.log(per);
}

var totalSubjectMarks = marks(90, 66, 76);
console.log(`the total mark is : ${totalSubjectMarks}`);   

percentage(totalSubjectMarks);