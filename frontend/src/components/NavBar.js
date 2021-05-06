import React, { useEffect, useRef, useState } from 'react'
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

import logo from '../resources/logo.svg';
import checkout96 from '../resources/checkout96.png';
import login96 from '../resources/login96.png';
import user96 from '../resources/user96.png';
import signout96 from '../resources/signout96.png';
import nextpage96 from '../resources/nextpage96.png';

import '../styles/NavBar.css';

const NavBar = ({ authState, setAuthState }) => {

    const history = useHistory();
    const [currUrl, setCurrUrl] = useState(useRouteMatch().url);
    const [searchMode, setSearchMode] = useState(/\/home\/search*/.test(currUrl));

    useEffect(() => {
        const inSearchMode = /\/home\/search*/.test(currUrl);
        if (searchMode !== inSearchMode) {
            setSearchMode(inSearchMode);
        }
    }, [currUrl, searchMode])

    const searchInput = useRef(null);
    const searchBrand = useRef(null);
    const searchPrice = useRef(null);

    return (
        <div className="nav">
            <div id="title-section">
                <Link to="/home" onClick={() => setCurrUrl('/home')}>
                    <img id="logo" src={logo} alt={"Website Logo"} />
                </Link>
                <p id="name">Phone Zone</p>
            </div>

            <div id="search">
                <input id="search-input" type="text" ref={searchInput} />
                {searchMode ?
                    <div>
                        <label for="brand">Brand</label>
                        <select name="brand" ref={searchBrand}>
                            <option value="all">All Brands</option>
                            <option value="apple">Apple</option>
                            <option value="blackberry">Blackberry</option>
                            <option value="htc">HTC</option>
                            <option value="huawei">Huawei</option>
                            <option value="lg">LG</option>
                            <option value="motorola">Motorola</option>
                            <option value="nokia">Nokia</option>
                            <option value="samsung">Samsung</option>
                            <option value="sony">Sony</option>
                        </select>
                        <label for="price">Max price:</label>
                        <input type="range" name="price" min="0" max="2000" ref={searchPrice} />
                    </div> :
                    <></>
                }
                <button className="profile-button" id="nav-search-button"
                        onClick={() => {
                            if (searchInput !== null) {
                                if (searchInput.current.value.length < 1) {
                                    history.push('/home/search');
                                    setCurrUrl('/home/search');
                                } else {
                                    history.push(`/home/search/?query=${searchInput.current.value}`);
                                    setCurrUrl(`/home/search/?query=${searchInput.current.value}`);
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
