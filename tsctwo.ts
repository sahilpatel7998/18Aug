// export{}

//=========interface======

interface Fullname{
    firstName: string;
    lastName: string;
    age?: string;

}


let userInfo = (fullname:Fullname) => {                                                //{ firstName: string, lastName: string }   <<<------remove this with "Fullname" interface
    console.log(`${fullname.firstName} ${fullname.lastName}`)
}

// userInfo({
//     firstName = "hello"
//     lastName = "world!!"
// });

// or -------------

let person = {
    firstName: "hello",
    lastName: "world"
};

userInfo(person);       //Argument of type '{ firstName: string; lastName: string; }' is not assignable to parameter of type 'Fullname'.
                        //   Property 'age' is missing in type '{ firstName: string; lastName: string; }' but required in type 'Fullname' ===> that's why it gave an error
                        // to prevent this error you have put "?" in property age ;)


// classes...........................

class employee{
    personName: string;

    constructor(name: string) {
        this.personName = name;
    }

    getUserName() {
        console.log(`hello ${this.personName}`);
    }
}



let emp =  new employee('John')
console.log(emp.personName);
emp.getUserName();

class User extends employee {
    constructor(userName: string) {
        super(userName);                            //Constructors for derived classes must contain a 'super' call

    }
    work() {
        console.log(`user is doing work`);
    }
}

let user1 = new User('naruto');
user1.work();
user1.getUserName();
console.log(user1.personName);