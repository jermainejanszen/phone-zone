import { useHistory } from 'react-router-dom';
import Reviews from './Reviews';

import addshoppingcart96 from '../resources/addshoppingcart96.png';
import '../styles/Item.css';
import { useRef } from 'react';

const Item = () => {

    const history = useHistory();
    const item = history.location?.state;
    const quantityInput = useRef(null);

    const minusOnClickHandler = () => {
        const curValue = parseInt(quantityInput.current.value);
        if(curValue === 0) {
            return
        }
        quantityInput.current.value = curValue - 1;
    }

    const plusOnClickHandler = () => {
        const curValue = parseInt(quantityInput.current.value);
        if(curValue === item.stock) {
            return
        }
        quantityInput.current.value = curValue + 1;
    }

    return (
        <div id="item-page-div">
            <div id="item-details-div">
                <div id="item-image-div">
                    <img id="item-image" src={item.image} alt="The phone" />
                    <div id="item-actions-div">
                        <div id="item-quantity-div">
                            <button 
                                className="quantityButton" 
                                id="item-minus-button"
                                onClick={minusOnClickHandler}>-</button>
                            <input 
                                id="item-quantity-field" 
                                type="text" 
                                pattern="[0-9]*" 
                                value="0" 
                                readOnly
                                ref={quantityInput} />
                            <button 
                                className="quantityButton" 
                                id="item-plus-button"
                                onClick={plusOnClickHandler}>+</button>
                        </div>
                        <button id="item-add-cart-button">
                            <img id="item-add-cart-icon" src={addshoppingcart96} alt="Add to checkout" />
                        </button>
                    </div>
                </div>
                <div id="item-text-div">
                    <p id="item-brand">{item.brand}</p>
                    <p id="item-title">{item.title}</p>
                    <p id="item-stock">{`Stock remaining: ${item.stock}`}</p>
                    <p id="item-seller">{`Seller: ${item.seller}`}</p>
                    <p id="item-price">{`$${item.price}`}</p>
                </div>
            </div>
            <Reviews id="item-reviews-div" reviews={item.reviews} />
        </div>
    )
}

export default Item
