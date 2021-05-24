import { useHistory } from 'react-router-dom';
import Rating from './Rating';
import hide96 from '../resources/hide96.png';

import '../styles/Card.css';

const Card = ({ item }) => {

    const history = useHistory();

    /**
     * get average rating from all reviews of an item
     * @param {item} item 
     */
    const getAverageRating = item => {
        let rating = 0;
        item.reviews.forEach(element => {
            rating += element.rating
        });
        return Math.round(rating / item.reviews.length)
    }
    /**
     * renders card containing item image, item details and rating 
     */
    return (
        <div className={`card ${item.disabled === "" ? "cardDisabled" : ""}`} onClick={() =>  {
            history.push(`/home/item/${item.title}`, { item : item })
        }}>
            <img id="disabled-image" src={hide96} alt="Hidden"/>
            <img className="cardImage" src={`/phone_images/${item.brand}.jpeg`} alt="The phone"/>
            <div className="cardDetails">
                <div className="brandPrice">
                    <p className="cardText" id="brand">{item.brand}</p>
                    <p className="cardText" id="price">{`$${item.price}`}</p>
                </div>
                <p className="cardText" id="title">{
                    item.title.length > 100 ? `${item.title.substring(0, 100)}...` : item.title
                }</p>
                <Rating id="card-rating" rating={getAverageRating(item)} />
            </div>
        </div>
    );
}

export default Card
