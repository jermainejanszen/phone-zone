import React, { useState } from 'react'

import '../styles/CheckoutItem.css';
import '../styles/Item.css';

import remove from '../resources/remove96.png';

const CheckoutItem = ({ item, onRemove }) => {

    const [quantity, setQuantity] = useState(item?.quantity ? item.quantity : 0);

    const minusOnClickHandler = () => {
        if (quantity - 1 == 0) {
            onRemove(item.title);
        }
        setQuantity(Math.max(quantity - 1, 0));
    }

    const plusOnClickHandler = () => {
        setQuantity(Math.min(quantity + 1, item.stock));
    }

    return (
        <div className="checkoutItemContainer">
            <img className="checkoutItemImage" src={`/phone_images/${item.brand}.jpeg`} alt="The phone" />
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
                    <b>Subtotal</b>
                    <p>${quantity * item.price}</p>
                </div>
            </div>
            <img id="remove-button" src={remove} alt="Remove Item" onClick={() => onRemove(item.title)} />
        </div>
    );
}

export default CheckoutItem;
