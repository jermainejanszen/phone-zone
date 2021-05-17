import { useHistory, useLocation } from 'react-router-dom';
import Reviews from './Reviews';
import { useEffect, useRef, useState, useContext } from 'react';
import UserContext, { User } from '../providers/UserContext';
import Loading from './Loading';

import addshoppingcart96 from '../resources/addshoppingcart96.png';
import '../styles/Item.css';

const Item = () => {

    const history = useHistory();
    const location = useLocation();
    const [item, setItem] = useState(location.state.item);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(0);
    console.log(location.state.item);

    const [seller, setSeller] = useState({ firstname: "Unknown", lastname: "Seller" });

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const fetchSeller = async () => {
            const response = await fetch(`/user/getUserInformation/${item.seller}`);
            try {
                const data = await response.json();
                const sellerPromise = await JSON.parse(data);
                setSeller(sellerPromise.message[0]);
            } catch(err) {
                console.error(err);
            }

            setLoading(false);
        }

        fetchSeller()
    }, [item?.seller])

    const minusOnClickHandler = () => {
        setQuantity(Math.max(0, quantity - 1));
    }

    const plusOnClickHandler = () => {
        setQuantity(Math.min(item.stock, quantity + 1));
    }

    const addToCart = () => {
        if (user === null) {
            history.push('/login', { pathname: window.location.pathname, item: item });
            return;
        }

        user.cart.addItem({ ...item, quantity: quantity })
        setItem({ ...item, stock: Math.max(0, item.stock - quantity) })
        setQuantity(0);
    }

    if (loading) return <Loading />;
    return (
        <div id="item-page-div">
            <div id="item-details-div">
                <div id="item-image-div">
                    <img id="item-image" src={`/phone_images/${item.brand}.jpeg`} alt="The phone" />
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
                                value={quantity} 
                                readOnly />
                            <button 
                                className="quantityButton" 
                                id="item-plus-button"
                                onClick={plusOnClickHandler}>+</button>
                        </div>
                        <button id="item-add-cart-button" onClick={addToCart}>
                            <img id="item-add-cart-icon" src={addshoppingcart96} alt="Add to checkout" />
                        </button>
                    </div>
                </div>
                <div id="item-text-div">
                    <p id="item-brand">{item.brand}</p>
                    <p id="item-title">{item.title}</p>
                    <p id="item-stock">{`Stock remaining: ${item.stock}`}</p>
                    <p id="item-seller">{`Seller: ${seller.firstname} ${seller.lastname}`}</p>
                    <p id="item-price">{`$${item.price}`}</p>
                </div>
            </div>
            <Reviews id="item-reviews-div" reviews={item.reviews} />
        </div>
    )
}

export default Item
