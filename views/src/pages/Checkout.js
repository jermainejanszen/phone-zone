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
                            <li key={item.title}>
                                <CheckoutItem 
                                    item={item} 
                                    onRemove={(title) => {
                                        user.cart.items = user.cart.items.filter((item) => {
                                            return item.title !== title;
                                        });
                                        setItems(user.cart.items);
                                    }}    
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Checkout;
