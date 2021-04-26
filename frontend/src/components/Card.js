
import { Link, useRouteMatch } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ item, setPageState }) => {

    const match = useRouteMatch();

    return (
        <Link 
            className="card"
            to={{
                pathname: `${match.path}/item/?title=${item.title}`,
                state: item
            }}>
            <img className="cardImage" src={item.image} alt="The phone" />
            <div className="cardDetails">
                <div className="brandPrice">
                    <p className="cardText" id="brand">{item.brand}</p>
                    <p className="cardText" id="price">{`$${item.price}`}</p>
                </div>
                <p className="cardText" id="title">{item.title}</p>
            </div>
        </Link>
    )
}

export default Card
