
// let promiseObj = new Promise((resolve, reject)=>{
//     setTimeout( ()=>{
//          let roll_no = [1, 2, 3, 4, 5];
//         //  resolve(roll_no);
//          reject("error while communicating ");
//     }, 2000);  
// })

// promiseObj.then((rollno)=>{
//     console.log(rollno);
// }).catch((error)=>{
//     console.log(error);
// })

//----------------------------------------------------------------------
let pObj= new Promise((resolve, reject)=>{      // we have to declare executor function - resolve and reject.
    setTimeout(()=>{
        let name = ['john', 'naruto', 'kakashi'];
        resolve(name);
        // reject('error');
    },3000);
});

const getBioData = (indexData)=>{
    return new Promise((resolve, reject)=>{
        setTimeout((indexData)=>{
            let bioData = {
                id : 1,
                age : 20
            }
            resolve(`My name is '${indexData}'. My id is ${bioData.id} and i am  ${bioData.age} years old.'`)   
        }, 2000, indexData)
    })
}

pObj.then((userName)=>{
    console.log(userName);
    getBioData(userName[1]).then((anything)=>{
    console.log(anything);
    });
}).catch((error)=>{
    console.log(error);
});