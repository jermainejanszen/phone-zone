import { useHistory } from 'react-router-dom';
import Review from './Review';

import addshoppingcart96 from '../resources/addshoppingcart96.png';
import '../styles/Item.css';

const Item = () => {

    const history = useHistory();
    const item = history.location?.state;

    return (
        <div id="item-page-div">
            <div id="item-details-div">
                <div id="item-image-div">
                    <img id="item-image" src={item.image} alt="The phone" />
                    <div id="item-actions-div">
                        <div id="item-quantity-div">
                            <button className="quantityButton" id="item-minus-button">-</button>
                            <input id="item-quantity-field" type="text" pattern="[0-9]*" value="1" />
                            <button className="quantityButton" id="item-plus-button">+</button>
                        </div>
                        <button id="item-add-cart-button">
                            <img id="item-add-cart-icon" src={addshoppingcart96} alt="Add to checkout" />
                        </button>
                    </div>
                </div>
                <div id="item-text-div">
                    <p id="item-title">{item.title}</p>
                    <p id="item-brand">{item.brand}</p>
                    <p id="item-stock">{item.stock}</p>
                    <p id="item-seller">{item.seller}</p>
                    <p id="item-price">{`$${item.price}`}</p>
                </div>
            </div>
            <div id="item-reviews-div">
                {item.reviews.map(value => <Review data={value} />)}
            </div>
        </div>
    )
}

export default Item
