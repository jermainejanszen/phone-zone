import React from 'react'
import '../styles/Home.css';
import OwnItem from './OwnItem';
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
    },
]

const NewListing = () => {
    return (
        <div className="profileContainer">
            <div id="my-listings">
            <h2>Your Listings</h2>
                <div className="scrollMenu">
                    <OwnItem className="ownItem" item={mockItems[0]} />
                    <OwnItem className="ownItem" item={mockItems[1]} />
                    <OwnItem className="ownItem" item={mockItems[0]} />
                    <OwnItem className="ownItem" item={mockItems[1]} />
                    <OwnItem className="ownItem" item={mockItems[1]} />
                    <OwnItem className="ownItem" item={mockItems[0]} />
                    <OwnItem className="ownItem" item={mockItems[1]} />
                </div>
            </div>
            <hr></hr>
            <div id="add-listing">
                <form id="manage-listings-form">
                    <h2>Add a new item</h2>
                    <div className="fieldDiv">
                        <label className="formLabel" for="model">Model</label>
                        <input className="formInputText" title="model" type="text" placeholder="e.g. Sony" required/>
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel" for="make">Make</label>
                        <input className="formInputText" title="make" type="text" placeholder="e.g. Sony Ericsson TM506 Unlock..." required/>
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel" for="description">Description</label>
                        <input className="formInputText" id="description" title="description" type="text" required/>
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel" for="price">Price</label>
                        <input className="formInputText" title="price" type="text" type="number" required/>
                    </div>
                    <div className="buttons">
                        <input className="uploadImage" name="Select File" type="file" />
                        <div>
                            <button className="updateButton">Add item</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewListing
