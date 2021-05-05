import React from 'react'
import { useHistory } from 'react-router-dom';
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
        </div>
    );
}

export default Checkout;