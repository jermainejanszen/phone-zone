import React from 'react'

import logo from '../resources/logo.svg';
import checkout96 from '../resources/checkout96.png';
import addusermale96 from '../resources/addusermale96.png';

import '../styles/NavBar.css';

const NavBar = ({ pageState, setPageState, authState, setAuthState }) => {
    return (
        <div className="nav">
            <div id="title-section">
                <img id="logo" src={logo} alt={"Website Logo"} />
                <p id="name">PhoneZone</p>
            </div>

            <div id="search">
                <input type="text" />
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
                <button>
                    <img className="profile-button" src={checkout96} alt="Checkout" />
                </button>
                {authState === 0 ?
                    <button>
                        <img className="profile-button" src={addusermale96} alt="Login" />
                    </button> :
                    <div>
                        <button>Profile</button>
                        <button>Signout</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar;
