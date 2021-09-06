import React from 'react';
// import ReactDOM from 'react-dom';
import Para from './Para';
import List from './list';
import Heading from './Heading'



function App ( ) {
    return(
        <>
        <Heading/>
        <Para/>
        <List/>

        </>
    )
}

export default App;


// const time = new Date().toLocaleTimeString()

// const date = new Date().toLocaleDateString()

// const image = 'https://picsum.photos/200/300'
// const amazon = 'https://picsum.photos/200/300'

// const heading = {
//   color: 'red',
//   textTransform: 'capitalize',
//   textShadow: ' 0px 2px 4px blue',
//   fontFamily: 'Helvetica',
//   fontWeight: 'bold',
//   textAlign: 'center'
// }

// ReactDom.render(
//   <>
//     <h1 style={heading}>hello there</h1>
//     {/* <p>{` time  ${time}`}</p> */}
//     {/* <p contentEditable= 'true'>t{`date = ${date}`}</p> */}

//     <div className='image'>
//       <img className='image1' src={amazon} alt='this is dummy image' />

//       <a dir='rtl' href='https://www.amazon.com/' target='_blank'>
//         <img src={amazon} alt='welcome to amazon' />
//       </a>
//     </div>
//   </>,
//   document.getElementById('root')
// )
