
import '../styles/Card.css';

const Card = ({ item }) => {
    return (
        <div className="card">
            <img className="cardImage" src={item.image} alt="The phone" />
            <div className="cardDetails">
                <div className="brandPrice">
                    <p className="cardText" id="brand">{item.brand}</p>
                    <p className="cardText" id="price">{`$${item.price}`}</p>
                </div>
                <p className="cardText" id="title">{item.title}</p>
            </div>
        </div>
    )
}

export default Card
