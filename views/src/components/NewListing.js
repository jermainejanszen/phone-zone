import Card from './Card';
import { useState, useEffect } from 'react';
import remove from '../resources/remove.svg';
import hide96 from '../resources/hide96.png';
import Loading from './Loading';

import '../styles/Profile.css';
import '../styles/NewListing.css';


const NewListing = () => {

    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchItems = async () => {
            let seller = "5f5237a4c1beb1523fa3da77"
            const response = await fetch(`/phone/searchItemsBySeller/${seller}`);
            const data = await response.json();
            const itemsPromise = await JSON.parse(data);
            const newItems = Object.values(itemsPromise.message);
            setItems(newItems);
            setLoaded(true);
        }
        fetchItems();
    })
    console.log(items);

    const mapItems = () => {
        if (items.length > 0) {
            return items.map((item, index) => {
                return (
                    <div className="cardContainer" key={index}>
                        <div>
                            <img className="itemIcon" src={hide96} alt="Hide Item" />
                            <img className="itemIcon" src={remove} alt="Delete Item" />
                        </div>
                        <Card className="ownItem" item={item} />
                    </div>
                )
            });
        }
        return <p id="search-no-items">No items found.</p>
    }

    return (
        <div className="profileContainer">
            <div id="my-listings">
                <h2>Your Listings</h2>
                <div className="scrollMenu">
                    {loaded ? mapItems() : <Loading />}
                </div>
            </div>
            <div id="add-listing">
                <form id="manage-listings-form">
                    <h2>Add a new item</h2>
                    <div className="fieldDiv">
                        <label className="formLabel" htmlFor="brand">Brand</label>
                        <select className="formSelect" title="brand" type="text" placeholder="e.g. Sony" required>
                            <option value="Apple">Apple</option>
                            <option value="BlackBerry">BlackBerry</option>
                            <option value="HTC">HTC</option>
                            <option value="Huawei">Huawei</option>
                            <option value="LG">LG</option>
                            <option value="Motorola">Motorola</option>
                            <option value="Nokia">Nokia</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Sony">Sony</option>
                        </select>
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel" htmlFor="title">Title</label>
                        <input className="formInputText" title="title" type="text" placeholder="e.g. Sony Ericsson TM506 Unlock..." required/>
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel" htmlFor="description">Description</label>
                        <input className="formInputText" id="description" title="description" type="text" required/>
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel" htmlFor="price">Price</label>
                        <input className="formInputText" title="price" type="number" required/>
                    </div>
                    <button className="updateButton">Add item</button>
                </form>
            </div>
        </div>
    )
}

export default NewListing
