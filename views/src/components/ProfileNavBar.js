
import { useState, useContext } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import UserContext, { User } from '../providers/UserContext'

import logo from '../resources/logo.svg';
import edit from '../resources/edit.svg';
import key from '../resources/key.svg';
import selling96 from '../resources/selling96.png';
import signout96 from '../resources/signout96.png';

import '../styles/ProfileNavBar.css'; 

const ProfileNavBar = () => {

    const history = useHistory();
    const match = useRouteMatch();
    const { user, setUser } = useContext(UserContext);

    const [currentPath, setCurrentPath] = useState(match.path);

    return (
        <div className="navBar">
            <div id="nav">
                <div id="profile-title-section">
                    <Link to="/">
                        <img id="logo" src={logo} alt={"Website Logo"} />
                    </Link>
                    <p id="name">Phone Zone</p>
                </div>
                <div id="sideBar">
                    <button
                        className={`tab-button ${currentPath === '/user' ? "current-tab" : ""}`}
                        onClick={() => {
                            history.push('/user');
                            setCurrentPath('/user');
                        }}>
                        <p>Edit Profile</p>
                        <img className="tab-button-icon" src={edit} alt="Edit" />
                    </button>
                    <button
                        className={`tab-button ${currentPath === '/user/editpassword' ? "current-tab" : ""}`}
                        onClick={() => {
                            history.push('/user/editpassword');
                            setCurrentPath('/user/editpassword');
                        }}>
                        <p>Change Password</p>
                        <img className="tab-button-icon" src={key} alt="Change" />
                    </button>
                    <button
                        className={`tab-button ${currentPath === '/user/listings' ? "current-tab" : ""}`}
                        onClick={() => {
                            history.push('/user/listings');
                            setCurrentPath('/user/listings');
                        }}>
                        <p>Manage Listings</p>
                        <img className="tab-button-icon" src={selling96} alt="Manage" />
                    </button>
                </div>
                <button
                    className="profile-button"
                    id="signout-button"
                    onClick={() =>  {
                        setUser(null);
                        history.push('/')
                    }}>
                    <img id="signout-button-icon" src={signout96} alt="Logout" />
                </button>
            </div>
        </div>  
    )
}

export default ProfileNavBar
