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

let getUserData = () => {
    console.log();
}

// interfaces 
interface Fullname {
    firstname: string,
    lastname: string,

}

const userName = (fullname: Fullname) => {
    console.log(fullname.firstname);
}

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

class fullName {

    private firstname: string;
    private lastname: string;
    private age: number;

    constructor(firstnames: string, lastname: string, age?: number) {
        this.firstname = firstnames;
        this.lastname = lastname;
        this.age = age;
    }

    getFirstName() {
        console.log(this.firstname + this.lastname + this.age)
        // 

    }

    getLastName() {
        //

    }

}

let nameObj = new fullName("webelight", "helloworld");
// nameObj.firstname = "Webelight";
// nameObj.lastname = "hello world";
// nameObj.age = 22;
// nameObj.firstname                             we can't access private members.
nameObj.getFirstName();


// or by using constructor para with access modifiers=============


class fullName {

    // private firstname: string;
    // private lastname: string;
    // private age: number;

    constructor(public firstnames: string,private lastname: string,private age?: number) {
        // this.firstname = firstnames;
        // this.lastname = lastname;
        // this.age = age;
    }

    getFirstName() {
        console.log(this.firstnames + this.lastname + this.age)
        // 

    }

    getLastName() {
        //

    }

}

let nameObj = new fullName("webelight", "helloworld", 22);
// nameObj.firstname = "Webelight";
// nameObj.lastname = "hello world";
// nameObj.age = 22;
// nameObj.firstname                             we can't access private members.
nameObj.getFirstName();
