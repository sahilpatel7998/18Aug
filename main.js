const func = () => {
  console.log('hello world!')
}

// func ();

const func1 = (name, callback) => {
  console.log('hey' + name)
  callback()
}

func1('John', func)

//================================coverting to promise

const dataBase = [
  {
    name: 'Darshan',
    favShow: 'Friends'
  },
  {
    name: 'Hiren',
    favShow: 'HIMYM'
  },
  {
    name: 'Hitesh',
    favShow: 'Ozarks'
  },
  {
    name: 'Jay',
    favShow: 'Pogo'
  },
  {
    name: 'Sahil',
    favShow: 'Webseries'
  }
]
// const cvPromise = () => {
//   setTimeout(() => {
//     dataBase.forEach(element => {
//       console.log(`${element.name} like to watch ${element.favShow}`)
//     })
//   }, 2000)
// }

// // cvPromise();

// const watch = callback => {
//   setTimeout(() => {
//     dataBase.shift()
//     console.log(dataBase)
//     callback()
//   }, 1000)
// }

// watch(cvPromise)

//======================================================converted into promise=======================================================

const promiseFn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dataBase.forEach(element => {
        let bioData =
          element.name + ' ' + 'likes to watch' + ' ' + element.favShow
        resolve(console.log(bioData))
      })
      //   resolve(bioData);
    }, 2000)
  })
}

const secPromiseFn = () => {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      dataBase.shift()
      resolve(console.log(dataBase))
    })
  }, 1000)
}

promiseFn().then(secPromiseFn())
