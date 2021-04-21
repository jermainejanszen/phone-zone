import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../resources/logo.svg';
import checkout96 from '../resources/checkout96.png';
import login96 from '../resources/login96.png';
import user96 from '../resources/user96.png';
import signout96 from '../resources/signout96.png';

import '../styles/NavBar.css';

const NavBar = ({ pageState, setPageState, authState, setAuthState }) => {
    return (
        <div className="nav">
            <div id="title-section">
                <Link to="/">
                    <img id="logo" src={logo} alt={"Website Logo"} />
                </Link>
                <p id="name">Phone Zone</p>
            </div>

            <div id="search">
                <input id="search-input" type="text" />
                {pageState === 1 ?
                    <div>
                        <label for="brand">Brand</label>
                        <select name="brand">
                            <option value="all">All Brands</option>
                            <option value="apple">Apple</option>
                            <option value="google">Google</option>
                            <option value="samsung">Samsung</option>
                        </select>
                        <label for="price">Max price:</label>
                        <input type="range" name="price" min="0" max="2000" />
                    </div> :
                    <></>
                }
            </div>

            <div id="profile">
                <Link
                    to="/checkout" 
                    className="profile-button">
                    <img className="profile-button-icon" src={checkout96} alt="Checkout" />
                </Link>
                {authState === 0 ?
                    <Link
                        to="/signup"
                        className="profile-button">
                        <img className="profile-button-icon" src={login96} alt="Login" />
                    </Link> :
                    <div>
                        <button className="profile-button">
                            <img className="profile-button-icon" src={user96} alt="Profile" />
                        </button>
                        <button
                            className="profile-button"
                            onClick={() => setAuthState(0)}>
                            <img className="profile-button-icon" src={signout96} alt="Logout" />
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar;
