const data = [
  {
    id: 1,
    name: 'chair',
    price: 350,
    available: true,
    type: 'wooden',
    discount: 5
  },
  {
    id: 2,
    name: 'table',
    price: 350,
    available: true,
    type: 'metal',
    discount: 5
  },
  {
    id: 2,
    name: 'cupboard',
    price: 1350,
    available: true,
    type: 'fiber',
    discount: 25
  },
  {
    id: 3,
    name: 'bed',
    price: 3500,
    available: false,
    type: 'wooden',
    discount: 0
  },
  {
    id: 4,
    name: 'chair',
    price: 450,
    available: true,
    type: 'fiber',
    discount: 10
  },
  {
    id: 5,
    name: 'cupboard',
    price: 550,
    available: true,
    type: 'fiber',
    discount: 25
  },
  {
    id: 6,
    name: 'chair',
    price: 500,
    available: false,
    type: 'wooden',
    discount: 5
  },
  {
    id: 7,
    name: 'cupboard',
    price: 13500,
    available: true,
    type: 'metal',
    discount: 25
  },
  {
    id: 8,
    name: 'bed',
    price: 1350,
    available: false,
    type: 'fiber',
    discount: 0
  },
  {
    id: 9,
    name: 'chair',
    price: 1000,
    available: true,
    type: 'wooden',
    discount: 5
  },
  {
    id: 10,
    name: 'table',
    price: 999,
    available: true,
    type: 'fiber',
    discount: 25
  }
]
// function find(fiber) {
//     return fiber.type === 'fiber';
//   }

//   console.log(data.find(find));

function find (fiber) {
  return fiber.type == 'fiber'
}

console.log(data.find(find))
var availableProduct

const func = () => {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      availableProduct = data.filter(element => element.available === true)

      // var result = availableProduct
      // console.log(result)

      resolve(availableProduct)
    }, 1000)
  })
}

const func1 = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      findItems = data.filter(el => el.discount <= 10)
      availableItems = findItems.filter(element => element.available === true)
      resolve(availableItems)
    }, 1500)
  })
}

// func().then(result => console.log(result),
//   func1().then(result1 => console.log(result1))
// )


async function getData () {
  const filteredData = await func1();
  console.log(filteredData)

  const itemData = await func();
  console.log(itemData);
}

const result = getData().then((user) => {
  console.log(result);
})