import React, { useRef } from 'react'
import { Link, matchPath, useHistory } from 'react-router-dom';

import logo from '../resources/logo.svg';
import checkout96 from '../resources/checkout96.png';
import login96 from '../resources/login96.png';
import user96 from '../resources/user96.png';
import signout96 from '../resources/signout96.png';
import nextpage96 from '../resources/nextpage96.png';

import '../styles/NavBar.css';

const NavBar = ({ authState, setAuthState }) => {

    const history = useHistory();
    const searchInput = useRef(null);

    return (
        <div className="nav">
            <div id="title-section">
                <Link to="/home">
                    <img id="logo" src={logo} alt={"Website Logo"} />
                </Link>
                <p id="name">Phone Zone</p>
            </div>

            <div id="search">
                <input id="search-input" type="text" ref={searchInput} />
                {matchPath("/home/search") ?
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
                <button className="profile-button"
                        onClick={() => {
                            if (searchInput !== null) {
                                if (searchInput.current.value.length < 1) {
                                    history.push('/home/search');
                                } else {
                                    history.push(`/home/search/?query=${searchInput.current.value}`);
                                }
                            }
                        }}>
                    <img 
                        className="profile-button-icon" 
                        src={nextpage96} alt="Search" />
                </button>
            </div>

            <div id="profile">
                <button
                    onClick={() => history.push('/checkout')}
                    className="profile-button">
                    <img className="profile-button-icon" src={checkout96} alt="Checkout" />
                </button>
                {authState === 0 ?
                    <button
                        onClick={() => history.push('/login')}
                        className="profile-button">
                        <img className="profile-button-icon" src={login96} alt="Login" />
                    </button> :
                    <div>
                        <button
                        onClick={() => history.push('/user')}
                        className="profile-button">
                            <img className="profile-button-icon" src={user96} alt="Profile" />
                        </button> 
                        <button
                            className="profile-button"
                            onClick={() => history.push('/')}>
                            <img className="profile-button-icon" src={signout96} alt="Logout" />
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar;
