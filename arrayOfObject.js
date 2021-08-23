var student = [{
    name : 'john',
    id :1,
    age : 20
}, {
    name : 'Hitesh', 
    id : 2,
    age :25
},{
    name: 'Darshan',
    id : 3,
    age : 21
}]

console.log(student[0].name);

for (let i=0; i < student.length ; i++){
    console.log(student[i]);
}

for (i=0; i < student.length ; i++){
    console.log(student[i].name);
}

for (let i=0; i < student.length ; i++){
    if(student[i].age < 25){
        console.log(student[i].name +" "+student[i].id)
    }
    console.log(student[i].age);
}

