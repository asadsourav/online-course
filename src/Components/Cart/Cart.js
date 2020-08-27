import React from 'react';

const Cart = (props) => {
    const {name,price} = props.item;
    return (
        <li className="list-group-item d-flex my-2 shadow justify-content-between">
      <span>{name}</span> <span> ${price}</span>
    </li>
    );
};

export default Cart;