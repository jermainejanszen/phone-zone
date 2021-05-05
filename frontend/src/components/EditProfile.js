import React from 'react'
import { useHistory } from 'react-router-dom';
import '../styles/Profile.css';
import '../styles/EditProfile.css';

const Profile = () => {
    const history = useHistory();
    return (
        <div className="profileContainer">
            <h1>Hi, Jane</h1>
            <form id="profile-form"> 
                <h2>Update your details:</h2>
                <div className="fieldDiv">
                    <label className="formLabel" for="firstName">First Name</label>
                    <input className="formInputText" value="Jane" title="firstName" type="text" />
                </div>
                <div className="fieldDiv">
                    <label className="formLabel" for="lastName">Last Name</label>
                    <input className="formInputText" value="Doe" title="lastName" type="text" />
                </div>
                <div className="fieldDiv">
                    <label className="formLabel" for="email">Email</label>
                    <input className="formInputText" value="jane@doe.com" title="email" type="text" />
                </div>
                <button 
                    className="updateButton" 
                    onClick={() => {
                        history.push('/editProfile');
                    }}>
                        Update Profile
                </button>
            </form>
        </div>

    )
}

export default Profile
