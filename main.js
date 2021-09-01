const items = [
  {
    item: '1',
    type: 'fruit',
    qty: 1,
    price: 200
  },
  {
    item: '2',
    type: 'cereal',
    qty: 2,
    price: 110
  },
  {
    item: '3',
    type: 'fruit',
    qty: 3,
    price: 120
  },
  {
    item: '4',
    type: 'fruit',
    qty: 4,
    price: 130
  },
  {
    item: '5',
    type: 'fruit',
    qty: 5,
    price: 140
  },
  {
    item: '6',
    type: 'fruit',
    qty: 6,
    price: 150
  },
  {
    item: '7',
    type: 'cosmetic',
    qty: 7,
    price: 160
  },
  {
    item: '8',
    type: 'cosmetic',
    qty: 8,
    price: 170
  },
  {
    item: '9',
    type: 'cereal',
    qty: 9,
    price: 180
  },
  {
    item: '10',
    type: 'cereal',
    qty: 10,
    price: 190
  },
  {
    item: '11',
    type: 'bakery',
    qty: 5,
    price: 43
  },
  {
    item: '12',
    type: 'cement',
    qty: 8,
    price: 90
  },
  {
    item: '13',
    type: 'cement',
    qty: 8,
    price: 920
  }
]

const discount = [
  {
    type: 'fruit',
    disc: 10 // 10%
  },
  {
    type: 'cereal',
    disc: 5 // 5%
  }
]

// const fruitsList = items.filter(fruit => fruit.type === 'fruit');const items = [
 
    

// const fruitsList = items.filter(fruit => fruit.type === 'fruit');
// const fruitsAmount = fruitsList.reduce((accumulator, currentValue) =>{
//     accumulator += (currentValue.price * currentValue.qty)
//     return accumulator
// }, 0);
// console.log('fruits amount', fruitsAmount);

const totalBill = items.reduce((accumulator, currentValue) => {
  accumulator += currentValue.qty * currentValue.price
  return accumulator
}, 0)
console.log(totalBill)
//
//4.

// const Discount = discount.find(element => element.type == 'fruit')
// console.log(Discount)
// console.log(Discount.disc)
// const fruitsDiscount = Discount.disc
// const fruitsList = items.filter(fruit => fruit.type === 'fruit')
// const discountedPrice = fruitsList.reduce((accumulator, currentValue) => {
//   accumulator +=
//     (currentValue.price - currentValue.price * (fruitsDiscount / 100)) *
//     currentValue.qty
//   return accumulator
// }, 0)

// console.log('discounted price of fruits', discountedPrice)

// //5.
// const discount1 = discount.find(element => element.type == 'fruit')

// const fruitdiscount = discount1.disc
// const list = items.filter(fruit => fruit.type == 'fruit')

// const discountedprice = list.reduce((accumulator, currentvalue) => {
//   accumulator +=
//     (currentvalue.price - (currentvalue.price * fruitdiscount) / 100) *
//     currentvalue.qty
//   return accumulator
// }, 0)
// console.log(discountedprice)

// const fruitsAmount = fruitsList.reduce((accumulator, currentValue) =>{
//     accumulator += (currentValue.price * currentValue.qty)
//     return accumulator
// }, 0);
// console.log('fruits amount', fruitsAmount);

// const totalBill = items.reduce((accumulator, currentValue) => {
//   accumulator += currentValue.qty * currentValue.price
//   return accumulator
// }, 0)
// console.log(totalBill)
// //
//4.

const Discount = discount.find(element => element.type == 'fruit')
console.log(Discount)
console.log(Discount.disc)
const fruitsDiscount = Discount.disc
const fruitsList = items.filter(fruit => fruit.type === 'fruit')
const discountedPrice = fruitsList.reduce((accumulator, currentValue) => {
  accumulator +=
    (currentValue.price - currentValue.price * (fruitsDiscount / 100)) *
    currentValue.qty
  return accumulator
}, 0)

console.log('discounted price of fruits', discountedPrice)

//5.
const discount1 = discount.find(element => element.type == 'fruit')

const fruitdiscount = discount1.disc
const list = items.filter(fruit => fruit.type == 'fruit')

const discountedprice = list.reduce((accumulator, currentvalue) => {
  accumulator +=
    (currentvalue.price - (currentvalue.price * fruitdiscount) / 100) *
    currentvalue.qty
  return accumulator
}, 0)
console.log(discountedprice)
