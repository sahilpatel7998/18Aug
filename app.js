// import React from 'react';
// import ReactDom from "react-dom";

// let text = 'hello world'
// let name = "John"
// ReactDom.render(
//   <>
//     <h1>text {text}</h1>
//     <p>the sum of two num is {2 + 3} </p>
//     <p>the random no is{Math.random()}</p>
//     <p>{`name:${name}`}</p>
//   </>,
//   document.getElementById('root2')
// )


let name = 'Sahil'
let today = new Date().toLocaleDateString()
let time = new Date().toLocaleTimeString() //today.getHours + ' ' + today.getMinutes + ' ' + today.getSeconds <----don't do this

ReactDom.render(
  <>
    <h1>{`my name is ${name}`}</h1>
    <p> the day is {today}</p>
    <p>the current time is {time}</p>
  </>,
  document.getElementById('root3')
)
