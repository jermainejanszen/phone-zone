import { useHistory } from 'react-router-dom';
import Review from './Review';

const Item = () => {

    const history = useHistory();
    const item = history.location?.state;

    return (
        <div id="item-page-div">
            <div id="item-details-div">
                <div>
                    <img id="item-image" src={item.image} alt="The phone" />
                    <button>Add to cart</button>
                </div>
                <div>
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
