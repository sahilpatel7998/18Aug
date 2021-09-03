// var React = require('react');
import React from 'react'
// var ReactDom = require('react-dom');
import ReactDom from 'react-dom'

// ReactDom.render(<h1> Hello World here!!</h1>, document.getElementById('root'))

// ReactDom.render(<h1> Hello World!!</h1>,
//   document.getElementById('root'))

// var h1 = document.createElementById('h1');
// h1.innerHTML = "hello world!!";
// document.getElementById('root').appendChild(h1);

// Render Multiple Elements inside ReactDOM.render()-----------------------------------

// ReactDom.render(                           //  Adjacent JSX elements must be wrapped in an enclosing tag, and it must be a single element
//   <div>
//   <h1>hello there!!</h1>
//   <p>how are you?</p>
//   <h2>hello world!</h2>
//   </div>,
// document.getElementById('root')
// );

// or else        put them in array and

// ReactDom.render(
//   [<p>one</p>, <h1>two</h1>, <h2>three</h2>],
//   document.getElementById('root')
// )

//React Fragment ---------------------------------------

// ReactDom.render(
//   <React.Fragment>
//     <h1>this is first</h1>
//     <h2>this is second</h2>
//     <h3>this is third</h3>
//   </React.Fragment>,
//   document.getElementById('gg')
// )

// ReactDom.render(
//   <React.Fragment>
//     <h1>anime</h1>
//     <p>Favourite anime</p>
//     <ol>
//       <li>naruto</li>//   return info.firstname + ' ' + info.lastname
// }

// const info = {
//   firstname: 'hello',
//   lastname: 'world'
// }

// const element = <h1>hello, {user(info)}</h1>

// ReactDom.render(element, document.getElementById('resso'))

//       <li>death note</li>
//       <li>attack on titan</li>
//       <li>hunter X hunter</li>
//       <li>onepunch man</li>
//     </ol>
//   </React.Fragment>,
//   document.getElementById('new')
// )
//============================================================================
// const user = info => {
//   return info.firstname + ' ' + info.lastname
// }

// const info = {
//   firstname: 'hello',
//   lastname: 'world'
// }

// const element = <h1>hello, {user(info)}</h1>

// ReactDom.render(element, document.getElementById('resso'))

// function formatName (user) {
//   return user.firstName + ' ' + user.lastName
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// }

// const element = <h1>Hello, {formatName(user)}!</h1>

// ReactDOM.render(element, document.getElementById('root'))

// function getGreeting (info) {      //x
//   if (info) {
//     return <h1>Hello, {user(info)}</h1>
//   }
//   return <h1>Hello, Stranger.</h1>
// }

// // const result = ()
//  ReactDom.render(
//    <h1>{getGreeting(info)}</h1>,
//    document.getElementById("_root2")  //X
//  )

