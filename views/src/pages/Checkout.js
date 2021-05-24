import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import CheckoutItem from '../components/CheckoutItem';
import back from '../resources/back96.png';

import '../styles/Checkout.css';
import UserContext, { User } from '../providers/UserContext';

const Checkout = () => {

    const history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const [items, setItems] = useState(user.cart.items);
    const [totalCost, setTotalCost] = useState(user.cart.getTotalCost());

    /**
     * Makes call to update the stock of each checkout item in the database and locally 
     */
    const confirmTransaction = () => {
        items.forEach((item) => {
            let url = `/phone/decrementStock/${item._id}/${item.quantity}`;
            fetch(url);
        });
        user.cart.clear()
        history.push('/');
    }

    return (
        <div id="checkout-container">
            <div id="back-button-div">
                <img id="back-button" src={back} alt={"Back Button"}  
                    onClick={() => {
                        history.goBack();
                    }}>
                </img>
            </div>
            <h1>Checkout</h1>
            <div id="items-container">
                <ul id="items-list">
                    {items.map((item) => {
                        return (
                            <li key={item._id}>
                                <CheckoutItem 
                                    item={item} 
                                    onRemove={(id) => {
                                        user.cart.items = user.cart.items.filter((i) => {
                                            return i._id !== id;
                                        });
                                        setItems(user.cart.items);
                                        setTotalCost(user.cart.getTotalCost());
                                    }}   
                                    onUpdateQuantity={() => {
                                        setTotalCost(user.cart.getTotalCost());
                                    }} 
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div id="transaction-container">
                <p id="total-cost-text">Total cost: ${totalCost}</p>
                <button id="confirm-transaction-button" onClick={confirmTransaction}>
                    Click here to confirm the transaction
                </button>
            </div>
        </div>
    );
}

export default Checkout;
