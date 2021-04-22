import React from 'react'
import { useHistory } from 'react-router-dom';
import '../styles/Profile.css';

const Profile = () => {
    const history = useHistory();
    return (
        <div className="profile-container">
                <form className="profile-form"> 
                    <h1>Hi, X</h1>
                    <div className="fieldDiv">
                        <label className="formLabel" for="firstName">First Name</label>
                        <input className="formInputText" title="firstName" type="text" />
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel" for="lastName">Last Name</label>
                        <input className="formInputText" title="lastName" type="text" />
                    </div>
                    <div className="fieldDiv">
                        <label className="formLabel" for="email">Email</label>
                        <input className="formInputText" title="email" type="text" />
                    </div>
                    <button 
                        className="updateProfileButton" 
                        id="update-profile-button"
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
