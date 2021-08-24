
let Today = new Date();
console.log(Today);          //  date type is "object"

let otherDate = new Date('03-27-1998 05:50:55');

otherDate = new Date('jan 22 2009');

otherDate = new Date('07/31/2000');

console.log(otherDate);

let a = otherDate.getDay();
a = otherDate.getUTCDate();
a = otherDate.getFullYear();
a = otherDate.getTime();
// a = otherDate.getTimezoneOffset();

console.log(a);

otherDate.setDate(23);
otherDate.setFullYear(2001);
otherDate.setHours(5);
otherDate.setMinutes(38);
otherDate.setSeconds(57);

// otherDate.getTime();

console.log(otherDate);