
promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('the first promise has been resolved')
    resolve(100)
  }, 2000)
})

promise2 = new Promise((resolve, reject) => {
  console.log("the second promise has been resolved");
//   console.log('the second promise has Failed')
  resolve(250);
//   reject('Failed')
}, 3000)

promise3 = new Promise((resolve, reject) => {
  console.log('the third promise has been resolved')
  resolve(300)
}, 4000)

total = 0

Promise.all([promise1, promise2, promise3])
  .then(data => {
    for (var i in data) {
      total += data[i]
    }
    console.log(`the result is: ${data}`)
    console.log(`total : ${total}`)
  })
  .catch(error => {
    console.log(error)
  })


