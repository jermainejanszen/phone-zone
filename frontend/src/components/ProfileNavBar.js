import React from 'react'
import { Link } from 'react-router-dom';
import edit from '../resources/edit.svg';
import key from '../resources/key.svg';
import selling96 from '../resources/selling96.png';

const ProfileNavBar = () => {
    return (
        <div id="profile">
                <Link
                    to="/password" 
                    className="profile-button">
                    <img className="profile-button-icon" src={edit} alt="Edit" />
                </Link>
                <Link
                    to="/password" 
                    className="profile-button">
                    <img className="profile-button-icon" src={key} alt="Change" />
                </Link>
                <Link
                    to="/password" 
                    className="profile-button">
                    <img className="profile-button-icon" src={selling96} alt="Manage" />
                </Link>
                
        </div>
    )
}

export default ProfileNavBar
