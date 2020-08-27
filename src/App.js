import React from 'react';
import './App.css';
import courseInfo from './courseInfo';
import { useState } from 'react';
import Courses from './Components/Courses/Courses';
import Cart from './Components/Cart/Cart';

function App() {
  
  const [cart,setCart] = useState([]);
  const info = courseInfo;
  console.log(info);
  
  const addToCart = (item) =>{
    const newCart =[...cart,item];
    setCart(newCart);
  }

  const totalPrice = cart.reduce((subTotal, current) => subTotal + current.price, 0);

  return (

   <div className="App row ">
      
        <h1 className='mx-auto'>Welcome to Developers Valley</h1>
        <div className="col-md-9">
        {
          info.map(course =><Courses course={course} addToCart= {addToCart}></Courses>)
        }
        </div>
       
        <div className="col-md-3">
        <h2 className="text-center">Cart  {cart.length} </h2>
          <ul className="list-group">
            {cart.map(item => <Cart item={item}></Cart>)}
          </ul>
          <button type="button" className="btn btn-warning btn-block">
            Total Bill <i class="fa fa-arrow-circle-right"></i> <span className="font-weight-bold">${totalPrice}</span> 
          </button>
        </div>
       

    </div>
  );
}

export default App;
