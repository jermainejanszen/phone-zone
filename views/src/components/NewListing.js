import Card from './Card';
import { useContext, useState, useEffect } from 'react';
import remove from '../resources/remove.svg';
import hide96 from '../resources/hide96.png';
import Loading from './Loading';
import UserContext from '../providers/UserContext';
import '../styles/Profile.css';
import '../styles/NewListing.css';


const NewListing = () => {

    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const [form, setForm] = useState({brand:"Apple"});

    /**
     * Disable or enable item corresponding to given id
     * @param {*} item item to be disabled 
     * @param {*} disabledStatus true if item is currently disabled, false otherwise
     */
    const disableItem =  async (item, disabledStatus) => {
        let url = `/phone/disableItem/${item._id}`;
        if (disabledStatus == true) {
            url = `/phone/removeDisabledStatus/${item._id}`;
        }
        setLoaded(false) 
        const response = await fetch(url)
    }

    /**
     * Delete item corresponding to given id from user's listing
     * @param {String} id id of item to be deleted
     */
    const deleteItem = async (id) => {
        console.log(id)
        let url = `/phone/deleteItem/${id}`;
        setLoaded(false)
        const response = await fetch(url)
    }


    /**
     * Fetch items in user's listing from the database 
     */
    useEffect(() => {
        const fetchItems = async () => {
            let seller = user.id
            const response = await fetch(`/phone/searchItemsBySeller/${seller}`);
            const data = await response.json();
            const itemsPromise = await JSON.parse(data);
            const newItems = Object.values(itemsPromise.message);
            setItems(newItems);
            setLoaded(true);
        }
        if (!loaded) {
            fetchItems();
        }
    }, [loaded]);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.title]: event.target.value.trim()
        });
    }

    /**
     * Upon submitting the create new listing form, a new phone is sent to be added to the database with the given user details
     * @param {event} event 
     */
    const handleSubmit = (event) => {
        event.preventDefault()
        const addItem = async () => {
            let url = `/phone/createNewPhone/${form.title}/${form.brand}/${form.stock}/${user.id}/${form.price}`;
            setLoaded(false);
            const response = await fetch(url);
        }
        addItem();
    }

    /**
     * Map items returns from database to their individual cards, and set up delete/disable functionality for each
     */
    const mapItems = () => {
        if (items.length > 0) {
            return items.map((item, index) => {
                return (
                    <div id={`card-container-${index}`} className={item.hasOwnProperty('disabled') ? "cardContainer disabled" : "cardContainer"} key={index}>
                        <div>
                            <button className="delete-disable-button"
                                onClick={() => {
                                    disableItem(item, item.hasOwnProperty('disabled'))
                                    setLoaded(false)         
                                }}>
                                <img className="itemIcon" src={hide96} alt="Hide Item" />
                            </button>
                            <button className="delete-disable-button"
                                onClick={() => {
                                    deleteItem(item._id)
                                }}>
                                <img className="itemIcon" src={remove} alt="Delete Item" />
                            </button>
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
                <form id="manage-listings-form" onSubmit={handleSubmit}>
                    <h2>Add a new item</h2>
                    <div className="fieldDiv">
                        <label className="formLabel">Brand</label>
                        <select className="formSelect" onChange={handleChange} title="brand" type="text" required>
                            <option value="Apple" selected="selected">Apple</option>
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
                        <label className="formLabel">Title</label>
                        <input className="formInputText" onChange={handleChange} title="title" type="text" placeholder="e.g. Sony Ericsson TM506 Unlock..." required/>
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel">Stock</label>
                        <input className="formInputText" onChange={handleChange} title="stock" type="number" min="1" step="1" required/>
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel">Price</label>
                        <input className="formInputText" onChange={handleChange} title="price" type="number" min="1" step="any" required/>
                    </div>
                    <button className="submitButton">Add item</button>
                </form>
            </div>
        </div>
    )
}

export default NewListing
