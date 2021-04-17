
import '../styles/Card.css';

const Card = ({ title, brand, image, seller, price }) => {
    return (
        <div className="card">
            <img className="cardImage" src={image} alt="The phone" />
            <p className="cardText" id="title">{title}</p>
            <p className="cardText" id="brand">{brand}</p>
            <p className="cardText" id="seller">{seller}</p>
            <p className="cardText" id="price">{price}</p>
        </div>
    )
}

export default Card
