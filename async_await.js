const asyncObj = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let roll_no = [1, 2, 3, 4, 5];
        resolve(roll_no);
        // reject('error')
    }, 2000);
})

const getUserData = (indexNo)=>{
    return new Promise((resolve, reject)=>{
        setTimeout((indexNo)=>{
            let data = {
                name : 'john',
                age : 15
            }
            resolve(`my roll number is : ${indexNo}, my name is :${data.name}, and i am ${data.age} years old.`)
        }, 2000, indexNo);
    })
}

// asyncObj.then((rollNo) =>{
//     console.log(rollNo);
//     getUserData(rollNo[3]).then((anything)=>{
//         console.log(anything);
//     })
// }).catch((err)=>{
//     console.log(err);
// });

async function getData (){
   const rollnodata =  await asyncObj;
   console.log(rollnodata);

  const bioData = await getUserData(rollnodata[3]);
  console.log(bioData);

  return bioData;
}
// getData();

// const getname = getData();      
// console.log(getname);

const getname = getData().then((myname)=>{
    console.log(myname);
});