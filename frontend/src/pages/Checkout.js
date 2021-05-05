import React from 'react'
import { useHistory } from 'react-router-dom';
import CheckoutItem from '../components/CheckoutItem';
import back from '../resources/back96.png';

import '../styles/Checkout.css';

const Checkout = () => {

    const history = useHistory();

    return (
        <div>
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
                    <li><CheckoutItem /></li>
                    <li><CheckoutItem /></li>
                    <li><CheckoutItem /></li>
                    <li><CheckoutItem /></li>
                </ul>
            </div>
        </div>
    );
}

export default Checkout;