// export{}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var userInfo = function (fullname) {
    console.log(fullname.firstName + " " + fullname.lastName);
};
// userInfo({
//     firstName = "hello"
//     lastName = "world!!"
// });
// or -------------
var person = {
    firstName: "hello",
    lastName: "world"
};
userInfo(person); //Argument of type '{ firstName: string; lastName: string; }' is not assignable to parameter of type 'Fullname'.
//   Property 'age' is missing in type '{ firstName: string; lastName: string; }' but required in type 'Fullname' ===> that's why it gave an error
// to prevent this error you have put "?" in property age ;)
// classes...........................
var employee = /** @class */ (function () {
    function employee(name) {
        this.personName = name;
    }
    employee.prototype.getUserName = function () {
        console.log("hello " + this.personName);
    };
    return employee;
}());
var emp = new employee('John');
console.log(emp.personName);
emp.getUserName();
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(userName) {
        return _super.call(this, userName) || this;
    }
    User.prototype.work = function () {
        console.log("user is doing work");
    };
    return User;
}(employee));
var user1 = new User('naruto');
user1.work();
user1.getUserName();
console.log(user1.personName);
