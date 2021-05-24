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
    const { user, setUser } = useContext(UserContext);

    const [item, setItem] = useState(location.state.item);
    const [quantity, setQuantity] = useState(0);

    const [remainingStock, setRemainingStock] = useState(
        user === null ? item.stock : item.stock - user.cart.getCartQuantity(item)
    );

    const [seller, setSeller] = useState({ firstname: "Unknown", lastname: "Seller" });

    const [itemLoaded, setItemLoaded] = useState(false);
    const [sellerLoaded, setSellerLoaded] = useState(false)
    
    useEffect(() => {
        const fetchItem = async () => {
            const response = await fetch(`/phone/searchItemsById/${item._id}`)
            
            try {
                const data = await response.json();
                const result = await JSON.parse(data);
                const dbItem = result.message[0];
                setItem(dbItem);
                setRemainingStock(
                    user === null ? dbItem.stock : dbItem.stock - user.cart.getCartQuantity(dbItem)
                );
            } catch (err) {
                console.log(err);
            }

            setItemLoaded(true);
        }

        fetchItem();
    }, [item?._id]);

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

            setSellerLoaded(true);
        }

        fetchSeller()
    }, [item?.seller])

    const minusOnClickHandler = () => {
        let newQuantity = Math.max(0, quantity - 1);
        if (quantity !== newQuantity) {
            setRemainingStock(remainingStock + 1);
        }
        setQuantity(newQuantity);
        setItem({ ...item, quantity: newQuantity });
    }

    const plusOnClickHandler = () => {
        if (remainingStock === 0) {
            return;
        }
        let newQuantity = quantity + 1;
        if (quantity !== newQuantity) {
            setRemainingStock(remainingStock - 1);
        }
        setQuantity(newQuantity);
        setItem({ ...item, quantity: newQuantity });
    }

    const animateCartQuantityText = () => {
        let cartQuantityField = document.getElementById("cart-quantity");
        cartQuantityField.classList.add("addedToCartAnimation");
        cartQuantityField.addEventListener("animationend", () => {
            cartQuantityField.classList.remove("addedToCartAnimation");
        })
    }

    const addToCart = () => {
        if (user === null) {
            history.push('/login', { pathname: window.location.pathname, item: item } );
            return;
        } else if (quantity === 0) {
            return;
        }
 
        animateCartQuantityText();
        user.cart.addItem({ ...item, quantity: quantity });
        setItem({ ...item, stock: Math.max(0, item.stock - quantity) });
        setQuantity(0);
    }

    if (!itemLoaded || !sellerLoaded) return <Loading />;

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
                        <p id="cart-quantity">{`Cart quantity: ${user === null ? 0 : user.cart.getCartQuantity(item)}`}</p>
                    </div>
                </div>
                <div id="item-text-div">
                    <p id="item-brand">{item.brand}</p>
                    <p id="item-title">{item.title}</p>
                    <p id="item-stock">{`Stock remaining: ${remainingStock}`}</p>
                    <p id="item-seller">{`Seller: ${seller.firstname} ${seller.lastname}`}</p>
                    <p id="item-price">{`Price: $${item.price.toFixed(2)}`}</p>
                </div>
            </div>
            <Reviews id="item-reviews-div" reviews={item.reviews} />
        </div>
    )
}

export default Item
