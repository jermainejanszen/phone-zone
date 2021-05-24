import React, { useState, useContext } from 'react'

import '../styles/CheckoutItem.css';
import '../styles/Item.css';

import remove from '../resources/remove96.png';
import UserContext from '../providers/UserContext';

const CheckoutItem = ({ item, onRemove, onUpdateQuantity }) => {

    const { user } = useContext(UserContext);
    const [quantity, setQuantity] = useState(item?.quantity ? item.quantity : 0);

    /**
     * Reduces the quantity of the checkout item by one. If the quantity is reduced
     * to zero the item gets removed from the checkout list.
     */
    const minusOnClickHandler = () => {
        if (quantity - 1 == 0) {
            onRemove(item.title);
        } else {
            let newQuantity = Math.max(0, quantity - 1);
            user.cart.getItem(item._id).quantity = newQuantity;
            setQuantity(newQuantity);
            onUpdateQuantity();
        }
    }

    /**
     * Increases the quantity of the checkout item by one. The quantity will be capped at
     * the items available stock.
     */
    const plusOnClickHandler = () => {
        let newQuantity = Math.min(quantity + 1, item.stock);
        user.cart.getItem(item._id).quantity = newQuantity;
        setQuantity(newQuantity);
        onUpdateQuantity();
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
                    <p>{item.stock - quantity}</p>
                </div>

                <div className="checkoutColumn">
                    <b>Subtotal</b>
                    <p>${(quantity * item.price).toFixed(2)}</p>
                </div>
            </div>

            <img id="remove-button" src={remove} alt="Remove Item" onClick={() => onRemove(item.title)} />
        </div>
    );
}

export default CheckoutItem;
