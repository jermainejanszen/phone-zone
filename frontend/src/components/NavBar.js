import React from 'react'
import logo from '../logo.svg';
import '../styles/NavBar.css';

const NavBar = ({ pageState, setPageState, authState, setAuthState }) => {
    return (
        <div className="nav">
            <div id="title">
                <img src={logo} alt={"Website Logo"} />
                <h3>PhoneZone</h3>
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
                <button>Checkout</button>
                {authState === 0 ?
                    <button>Sign-in</button> :
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
