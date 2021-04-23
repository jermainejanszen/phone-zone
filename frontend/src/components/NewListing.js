import React from 'react'
import FiveGrid from './FiveGrid';
import '../styles/Home.css';
import plus from '../resources/plus.svg';
import Card from './Card';
import '../styles/Profile.css';


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
    }]

const NewListing = () => {
    return (
        <div className="profile-container">
            <div class="my-listings">
            <h2>Your Listings</h2>
                <div class="scroll-menu">
                    <Card className="card" item={mockItems[0]} />
                    <Card className="card" item={mockItems[1]} />
                </div>
            </div>
            <hr></hr>
            <div id="add-listing">
                <form className="manage-listings-form">
                    <h2>Add a new item</h2>
                    <div className="fieldDiv">
                        <label className="formLabel" for="itemName">Item Name</label>
                        <input className="formInputText" title="itemName" type="text" required/>
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel" for="model">Model</label>
                        <input className="formInputText" title="model" type="text" required/>
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel" for="make">Make</label>
                        <input className="formInputText" title="make" type="text" required/>
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel" for="description">Description</label>
                        <input className="formInputText" title="description" type="text" required/>
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel" for="price">Price</label>
                        <input className="formInputText" title="price" type="text" required/>
                    </div>
                    <div className="uploadImage">
                        <span>Upload an Image</span>
                        <input name="Select File" type="file" />
                    </div>
                    <button className="addNewItemButton" id="update-button">Add item</button>
                </form>
            </div>
        </div>
    )
}

export default NewListing
