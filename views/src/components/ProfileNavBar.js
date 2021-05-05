import React from 'react'
import edit from '../resources/edit.svg';
import key from '../resources/key.svg';
import selling96 from '../resources/selling96.png';
import signout96 from '../resources/signout96.png';
import '../styles/ProfileNavBar.css'; 

const ProfileNavBar = ({pageState, setPageState, authState, setAuthState}) => {
    return (
        <div className="navBar">
            <div id="nav">
                <button
                    className="profile-button"
                    id = "signout-button"
                    onClick={() => setAuthState(0)}>
                    <img className="tab-button-icon" src={signout96} alt="Logout" />
                </button>
            </div>
            <div id="sideBar">
                <button
                    className="tab-button"
                    onClick={() => setPageState(0)}>
                    <label>Edit Profile</label>
                    <img className="tab-button-icon" src={edit} alt="Edit" />
                </button>
                <button
                    className="tab-button"
                    onClick={() => setPageState(2)}>
                    <label>Change Password</label>
                    <img className="tab-button-icon" src={key} alt="Change" />
                </button>
                <button
                    className="tab-button"
                    onClick={() => setPageState(1)}>
                    <label>Manage Listings</label>
                    <img className="tab-button-icon" src={selling96} alt="Manage" />
                </button>
            </div>
        </div>  
        
    )
}

export default ProfileNavBar
