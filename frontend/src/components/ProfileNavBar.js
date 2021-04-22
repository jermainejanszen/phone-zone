import React from 'react'
import { Link } from 'react-router-dom';
import edit from '../resources/edit.svg';
import key from '../resources/key.svg';
import selling96 from '../resources/selling96.png';

const ProfileNavBar = ({pageState, setPageState}) => {
    return (
        <div id="profile">
                <button
                    className="profile-button"
                    onClick={() => setPageState(0)}>
                    <img className="profile-button-icon" src={edit} alt="Edit" />
                </button>
                <button
                    className="profile-button"
                    onClick={() => setPageState(2)}>
                    <img className="profile-button-icon" src={key} alt="Change" />
                </button>
                <button
                    className="profile-button"
                    onClick={() => setPageState(1)}>
                    <img className="profile-button-icon" src={selling96} alt="Manage" />
                </button>
                
        </div>
    )
}

export default ProfileNavBar
