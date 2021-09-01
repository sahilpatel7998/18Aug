// type Assertion ===>> two types -->
// 1. using Angle bracket 2. using " as-syntax "
// let userName1 = "sahil";
// userName1.bold
//if we don't declare UserNAme here, then
// let userInfo;
// // userInfo.            
// (<string>userInfo).bold                //1. using angle bracket 
// (userInfo as string).length            //2. using "as-syntax"
// arrow function
function getUser(user) {
    console.log(user);
}
var getUserData = function () {
    console.log();
};
var userName = function (fullname) {
    console.log(fullname.firstname);
};
userName({
    firstname: 555,
    lastname: "world"
});
// interface Fullname {
//     firstname: number,
//     lastname: string
// }
// const userName = (fullname: Fullname) => {
//     console.log(fullname.firstname + ' ' + fullname.lastname);
// }
// userName({
//     firstname: 55,
//     lastname: "world"
// });
//Classes  fields methods instance constructor
var fullName = /** @class */ (function () {
    function fullName(firstnames, lastname, age) {
        this.firstname = firstnames;
        this.lastname = lastname;
        this.age = age;
    }
    fullName.prototype.getFirstName = function () {
        console.log(this.firstname + this.lastname + this.age);
        // 
    };
    fullName.prototype.getLastName = function () {
        //
    };
    return fullName;
}());
var nameObj = new fullName("webelight", "helloworld");
// nameObj.firstname = "Webelight";
// nameObj.lastname = "hello world";
// nameObj.age = 22;
// nameObj.firstname                             we can't access private members.
nameObj.getFirstName();
// or by using constructor para with access modifiers=============
var fullName = /** @class */ (function () {
    // private firstname: string;
    // private lastname: string;
    // private age: number;
    function fullName(firstnames, lastname, age) {
        this.firstnames = firstnames;
        this.lastname = lastname;
        this.age = age;
        // this.firstname = firstnames;
        // this.lastname = lastname;
        // this.age = age;
    }
    fullName.prototype.getFirstName = function () {
        console.log(this.firstnames + this.lastname + this.age);
        // 
    };
    fullName.prototype.getLastName = function () {
        //
    };
    return fullName;
}());
var nameObj = new fullName("webelight", "helloworld", 22);
// nameObj.firstname = "Webelight";
// nameObj.lastname = "hello world";
// nameObj.age = 22;
// nameObj.firstname                             we can't access private members.
nameObj.getFirstName();
