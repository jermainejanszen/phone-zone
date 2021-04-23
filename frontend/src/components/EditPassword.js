import React from 'react'
import { useHistory } from 'react-router-dom';
import '../styles/Profile.css';


const EditPassword = () => {
    const history = useHistory();

    return (
        <div className="profile-container">
                <h1>Hi, Jane</h1>
                <hr></hr>
            <form id="password-form">
                <h2>Change your password</h2>
                <div className="fieldDiv">
                    <label className="formLabel" for="password">Current Password</label>
                    <input className="formInputText" id="password" title="password" type="password" required />
                </div>
                <div className="fieldDiv">
                    <label className="formLabel" for="password">New Password</label>
                    <input className="formInputText" id="password" title="password" type="password" required />
                </div>
                <button 
                        className="updatePasswordButton" 
                        id="update-button"
                        onClick={() => {
                            history.push('/editProfile');
                        }}>
                            Confirm Password Change
                    </button>
            </form>
        </div>
    )
}

export default EditPassword
