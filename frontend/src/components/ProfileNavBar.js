import React from 'react'
import { Link } from 'react-router-dom';
import checkout96 from '../resources/checkout96.png';

const ProfileNavBar = () => {
    return (
        <div id="profile">
                <Link
                    to="/checkout" 
                    className="profile-button">
                    <img className="profile-button-icon" src={checkout96} alt="Checkout" />
                </Link>
                
        </div>
    )
}

export default ProfileNavBar
