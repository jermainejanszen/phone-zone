import React from 'react'
import { useHistory } from 'react-router-dom';
import '../styles/Profile.css';


const EditPassword = () => {
    const history = useHistory();

    return (
        <div className="profile-container">
            <form>
                <h1>Change your password</h1>
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
                        id="update-password-button"
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
