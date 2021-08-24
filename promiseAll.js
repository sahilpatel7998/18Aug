p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("the first promise has been resolved");
        resolve(10);
    }, 2000);
})

p2 = new Promise((resolve, reject)=>{
    // console.log("the second promise has been resolved");
    console.log("the second promise has Failed");
    // resolve(20);
    reject('Failed')
},3000);

p3 = new Promise((resolve, reject)=>{
    console.log('the third promise has been resolved');
    resolve(30);
}, 4000);

total = 0;

Promise.all([p1, p2, p3]).then((result)=>{
    for (var i in result){ total += result[i]} 
    console.log(`the result is: ${result}`)
    console.log(`total : ${total}`);
}).catch((error) => {
    console.log(error);
});

