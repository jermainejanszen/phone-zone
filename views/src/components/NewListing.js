import Card from './Card';

import remove from '../resources/remove.svg';
import hide96 from '../resources/hide96.png';

import '../styles/Profile.css';
import '../styles/NewListing.css';

const mockItems = [
    {
        "title": "Galaxy s III mini SM-G730V Verizon Cell Phone BLUE",
        "brand": "Samsung",
        "image": "/phone_images/Samsung.jpeg",
        "stock": 9,
        "seller": "5f5237a4c1beb1523fa3db73",
        "price": 56.0,
        "reviews": [{
            "reviewer": "5f5237a4c1beb1523fa3db1f",
            "rating": 3,
            "comment": "Got phone yesterday all ... pleased now!"
        }]
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Galaxy s III mini SM-G730V Verizon Cell Phone BLUE",
        "brand": "Samsung",
        "image": "/phone_images/Samsung.jpeg",
        "stock": 9,
        "seller": "5f5237a4c1beb1523fa3db73",
        "price": 56.0,
        "reviews": [{
            "reviewer": "5f5237a4c1beb1523fa3db1f",
            "rating": 3,
            "comment": "Got phone yesterday all ... pleased now!"
        }]
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Galaxy s III mini SM-G730V Verizon Cell Phone BLUE",
        "brand": "Samsung",
        "image": "/phone_images/Samsung.jpeg",
        "stock": 9,
        "seller": "5f5237a4c1beb1523fa3db73",
        "price": 56.0,
        "reviews": [{
            "reviewer": "5f5237a4c1beb1523fa3db1f",
            "rating": 3,
            "comment": "Got phone yesterday all ... pleased now!"
        }]
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Galaxy s III mini SM-G730V Verizon Cell Phone BLUE",
        "brand": "Samsung",
        "image": "/phone_images/Samsung.jpeg",
        "stock": 9,
        "seller": "5f5237a4c1beb1523fa3db73",
        "price": 56.0,
        "reviews": [{
            "reviewer": "5f5237a4c1beb1523fa3db1f",
            "rating": 3,
            "comment": "Got phone yesterday all ... pleased now!"
        }]
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Galaxy s III mini SM-G730V Verizon Cell Phone BLUE",
        "brand": "Samsung",
        "image": "/phone_images/Samsung.jpeg",
        "stock": 9,
        "seller": "5f5237a4c1beb1523fa3db73",
        "price": 56.0,
        "reviews": [{
            "reviewer": "5f5237a4c1beb1523fa3db1f",
            "rating": 3,
            "comment": "Got phone yesterday all ... pleased now!"
        }]
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Galaxy s III mini SM-G730V Verizon Cell Phone BLUE",
        "brand": "Samsung",
        "image": "/phone_images/Samsung.jpeg",
        "stock": 9,
        "seller": "5f5237a4c1beb1523fa3db73",
        "price": 56.0,
        "reviews": [{
            "reviewer": "5f5237a4c1beb1523fa3db1f",
            "rating": 3,
            "comment": "Got phone yesterday all ... pleased now!"
        }]
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },
]

const NewListing = () => {
    return (
        <div className="profileContainer">
            <div id="my-listings">
                <h2>Your Listings</h2>
                <div className="scrollMenu">
                    {mockItems.map((item, index) => {
                        return (
                            <div className="cardContainer" key={index}>
                                <div>
                                    <img className="itemIcon" src={hide96} alt="Hide Item" />
                                    <img className="itemIcon" src={remove} alt="Delete Item" />
                                </div>
                                <Card className="ownItem" item={item} />
                            </div>
                        )
                    })}
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
