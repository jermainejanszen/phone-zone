import remove from '../resources/remove.svg';
import hide96 from '../resources/hide96.png';
import '../styles/Card.css';
import '../styles/OwnItem.css';

const OwnItem = ({ item }) => {

    const disableItem =  async () => {
        let url = `/phone/disableItem/${item.id}`
        const response = await fetch(url)
    }

    const deleteItem = async () => {
        let url = `/phone/deleteItem/${item.id}`
        const response = await fetch(url)
    }

    return (
        <div className="card">
            <button
                onClick={() => {
                    disableItem()        
                }}>
                <img className="itemIcon" src={hide96} alt="Hide Item" />            
            </button>
            <button
                onClick={() => {
                    deleteItem()        
                }}>
                <img className="itemIcon" src={remove} alt="Delete Item" />
            </button>
            <div>
                <img className="cardImage" src={item.image} alt="The phone" />
            </div>
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

export default OwnItem
