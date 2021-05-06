import React, { useRef, useState } from 'react'

import '../styles/CheckoutItem.css';
import '../styles/Item.css';

const CheckoutItem = ({ item }) => {

    const [quantity, setQuantity] = useState(0);

    const minusOnClickHandler = () => {
        setQuantity(Math.max(quantity - 1, 0));
    }

    const plusOnClickHandler = () => {
        setQuantity(Math.min(quantity + 1, item.stock));
    }

    return (
        <div className="checkoutItemContainer">
            <img className="checkoutItemImage" src={item.image}></img>
            <div className="checkoutInfoContainer">
                <div className="checkoutColumn">
                    <b>{item.brand}</b>
                    <p>{item.title}</p>
                </div>
                <div className="checkoutColumn">
                    <b>Individual Price</b>
                    <p>${item.price}</p>
                </div>
                <div className="checkoutColumn">
                    <b>Quantity</b>
                    <div id="item-quantity-div">
                        <button 
                            className="quantityButton" 
                            id="item-minus-button"
                            onClick={minusOnClickHandler}>-</button>
                        <input 
                            id="item-quantity-field" 
                            type="text" 
                            pattern="[0-9]*" 
                            value={quantity} 
                            readOnly />
                        <button 
                            className="quantityButton" 
                            id="item-plus-button"
                            onClick={plusOnClickHandler}>+</button>
                    </div>
                </div>
                <div className="checkoutColumn">
                    <b>Stock Remaining</b>
                    <p>{item.stock}</p>
                </div>
                <div className="checkoutColumn">
                    <b>Total Price</b>
                    <p>${quantity * item.price}</p>
                </div>
            </div>
        </div>
    );
}

export default CheckoutItem;
