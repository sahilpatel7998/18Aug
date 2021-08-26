const student = [
  {
    name: 'sahil',
    id: 1,
    address: 'ahmedabad'
  },
  {
    name: 'hitesh',
    id: 2,
    address: 'gandhinagar'
  },
  {
    name : "darshan",
    id : 3,
    address : "bapunagar"
  },
  {
      name:  "hiren",
      id: 4,
      address : "gota"
  },
  {
      name : "jay",
      id : 5,
      address : "rajkot"
  }
]

var removeStudent = student.filter((element)=>{
    element.id == 4;
})

console.log(removeStudent.length);

//===========================================

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin (user) {
    return user.age >= this.minAge && user.age < this.maxAge
  }
}

let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }]

let soldiers = users.filter(army.canJoin, army)

console.log(soldiers.length) ;
console.log(soldiers[0].age) ;
console.log(soldiers[1].age) ;
