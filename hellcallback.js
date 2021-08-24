
// 2s rollno 
// 2s name and age 
// 2s gender

const getRollNo= ( () => {
    setTimeout( () => {
        console.log(`Api is getting rollno`);
        let rollno = [1, 2, 3, 4, 5];
        console.log(`${rollno}`)

        setTimeout( () => {
            console.log(`api is getting age and name`);
            let userData = {
                name : 'John doe',
                age : 22 
            };
            console.log(`My roll no is : ${rollno}. My name is : ${userData.name} and i am ${userData.age} years old.`)

            setTimeout ( () => {
                console.log('api is getting gender data.');
                userData.gender = 'male';
                console.log(`I am : ${userData.gender}`);
            }, 2000, userData.name);

        }, 2000, rollno[2]); 

    }, 2000 );
});

getRollNo();