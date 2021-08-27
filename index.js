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

let filterProduct = data.filter(element => {

  if (element.name == 'bed') {
    return (element.type = 'wooden')
  }
})

console.log(filterProduct)

//======================================================

let product = data.map(element => {
  const container = {}

  container[element.name] = element.id
  container.model = element.name.length * 10
})

console.log(product)

//==================================================

let discountedPrice = data.map(function (el) {

  return el.price - (el.discount / 100) * el.price
})

console.log(discountedPrice)

//============================

function myFunction () {
  let a = 50
  if (true) {
    a = 100
    console.log(a)
  }
}
// console.log(a)

//=====================

const array = data.map(x => x.id > 2 && x.id < 10)

console.log(array)

// console.log(array)
const array1 = data.every(x => x.id > 0)

console.log(array1)


const array2 = data.some(x => x.id > 0)

console.log(array2)


const array3 = data.fill(x => x.id)

console.log(array3)

//============================================================
const itemsList = data.filter(item => item.type == "fiber")
const itemCost = itemsList.reduce((accumulator, currentValue) => {
    currentValue.type == "fiber";

    accumulator = (currentValue.price * currentValue.discount )
}, {} )


console.log(itemCost);