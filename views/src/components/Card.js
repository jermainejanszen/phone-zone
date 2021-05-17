import { useHistory } from 'react-router-dom';
import Rating from './Rating';

import '../styles/Card.css';

const Card = ({ item }) => {

    const history = useHistory();

    const getAverageRating = item => {
        let rating = 0;
        item.reviews.forEach(element => {
            rating += element.rating
        });
        return Math.round(rating / item.reviews.length)
    }

    return (
        <div className = "card" onClick={() =>  {
            history.push(`/home/item/${item.title}`, { item : item })
        }}>
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
