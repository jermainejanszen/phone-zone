import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import CheckoutItem from '../components/CheckoutItem';
import back from '../resources/back96.png';
import { mockItems } from '../components/FiveGrid';

import '../styles/Checkout.css';

const Checkout = () => {

    const history = useHistory();

    const [state, setState] = useState(mockItems);

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
                    {state.map((item) => {
                        return (
                            <li key={item.title}>
                                <CheckoutItem 
                                    item={item} 
                                    onRemove={(title) => {
                                        let newState = state.filter((item) => {
                                            return item.title !== title;
                                        })
                                        setState(newState);
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