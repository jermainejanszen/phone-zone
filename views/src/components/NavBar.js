import React, { useEffect, useRef, useState, useContext } from 'react'
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import SearchContext from '../providers/SearchContext';

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
    const [maxPrice, setMaxPrice] = useState("2000");

    const { setSearch } = useContext(SearchContext);

    // Checks the current url to determine whether to show the search page
    useEffect(() => {
        const inSearchMode = /\/home\/search*/.test(currUrl);
        if (searchMode !== inSearchMode) {
            setSearchMode(inSearchMode);
        }
    }, [currUrl, searchMode])

    const searchInput = useRef(null);
    const searchBrand = useRef(null);
    const searchPrice = useRef(null);

    const onSearchHandler = () => {
        var searchQuery = "";
        if (searchInput.current != null) {
            searchQuery = searchInput.current.value;
        }

        var brandQuery = "all";
        if (searchBrand.current != null) {
            brandQuery = searchBrand.current.value;
        }

        var priceQuery = "2000";
        if (searchPrice.current != null) {
            priceQuery = searchPrice.current.value;
        }

        const newUrl = `/home/search/?search=${searchQuery}?brand=${brandQuery}?price=${priceQuery}`;
        history.push(newUrl);
        setCurrUrl(newUrl);
        setSearch({
            title: searchQuery,
            brand: brandQuery,
            price: priceQuery
        });
    }

    const onPriceChangeHandler = () => {
        setMaxPrice(searchPrice.current?.value);
    }

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
                    <div id="search-filters-div">
                        <div id="search-brand-div">
                            <label htmlFor="brand">Brand</label>
                            <select id="search-brand" name="brand" ref={searchBrand}>
                                <option value="all">All Brands</option>
                                <option value="Apple">Apple</option>
                                <option value="Blackberry">Blackberry</option>
                                <option value="Htc">HTC</option>
                                <option value="Huawei">Huawei</option>
                                <option value="Lg">LG</option>
                                <option value="Motorola">Motorola</option>
                                <option value="Nokia">Nokia</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Sony">Sony</option>
                            </select>
                        </div>
                        <div id="search-price-div">
                            <label htmlFor="price">Max price:</label>
                            <input 
                                id="search-price" 
                                type="range" 
                                name="price" 
                                defaultValue="2000" 
                                min="0" 
                                max="2000"
                                onChange={onPriceChangeHandler}
                                ref={searchPrice} />
                            <p id="search-price-text">{`$${maxPrice}`}</p>
                        </div>
                    </div> :
                    <></>
                }
                <button className="profile-button" id="nav-search-button"
                        onClick={onSearchHandler}>
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
