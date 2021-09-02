// var data = [{costOfAirtickets: 2500, costOfHotel: 1200},{costOfAirtickets: 1500, costOfHotel: 1000}];

// var result = [data.reduce((acc, n) => {
//   for (var prop in n) {
//     if (acc[prop]) acc[prop] += n[prop];
//     else acc[prop] = n[prop];
//   }
//   return acc;
// }, {})]
// console.log(result)

var data = [
  { costOfAirtickets: 2500, costOfHotel: 1200 },
  { costOfAirtickets: 1500, costOfHotel: 1000 }
]
var result = []
var sum = 0
var costsum = 0
data.map(function (item, key) {
  var cost = item
  //nsole.log(cost);
  sum = sum + cost.costOfAirtickets
  costsum = costsum + cost.costOfHotel
})

result = [{ costOfAirtickets: sum, costOfHotel: costsum }]

console.log(result)

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

const cementList = items.filter(cement => cement.type == 'cosmetic')
const cementAmount = cementList.reduce((accumulator, currentValue) => {
  accumulator += currentValue.price * currentValue.qty
  return accumulator
}, 0)
console.log('cement amount', cementAmount)


// result = items.map(element => {
//   if (element.price > 0) {
//     discountedprice = element.price - (element.discount / 100 - element.price)
//     return { ...element, discountedPrice: discountedprice }
//   }
// })

// console.log(result);


// const num = [3,5,3,33,43,74,35,43,35,98,87,434,736];

// const array1 =  num.filter(age=> age > 50 && age < 0);
// console.log(array1);
// result  = data.map(element => {
//     if (element.price > 0){
//     discountedprice = element.price - (element.discount/100-element.price)
//     return {...element,discountedPrice:discountedprice}
//     }
// })

// console.log(result);


