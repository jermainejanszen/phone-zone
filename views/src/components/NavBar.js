import React, { useEffect, useRef, useState, useContext } from 'react'
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import SearchContext from '../providers/SearchContext';
import UserContext from '../providers/UserContext';

import logo from '../resources/logo.svg';
import checkout96 from '../resources/checkout96.png';
import login96 from '../resources/login96.png';
import user96 from '../resources/user96.png';
import signout96 from '../resources/signout96.png';
import nextpage96 from '../resources/nextpage96.png';

import '../styles/NavBar.css';

const NavBar = () => {

    const { user, setUser } = useContext(UserContext);
    const [loggedIn, setLoggedIn] = useState(user !== null);
    useEffect(() => {
        if (loggedIn !== (user !== null)) {
            setLoggedIn(user !== null);
        }
    }, [user, loggedIn])

    const history = useHistory();
    const [currUrl, setCurrUrl] = useState(useRouteMatch().url);
    const [searchMode, setSearchMode] = useState(/\/home\/search*/.test(currUrl));
    const [highestPrice, setHighestPrice] = useState([]);
    const [maxPrice, setMaxPrice] = useState([]);
    const { setSearch } = useContext(SearchContext);

    // Checks the current url to determine whether to show the search page
    useEffect(() => {
        const inSearchMode = /\/home\/search*/.test(currUrl);
        if (searchMode !== inSearchMode) {
            setSearchMode(inSearchMode);
        }
    }, [currUrl, searchMode])

    /**
     * fetches the highest price of all items in the database
     */
    useEffect(() => {
        const fetchHighestPrice = async () => {
            let url = `/phone/findHighestPrice`;
            const response = await fetch(url);
            try {
                const data = await response.json();
                const pricePromise = await JSON.parse(data);
                setHighestPrice(pricePromise.message[0]);
                setMaxPrice(pricePromise.message[0].price)
            } catch(err) {
                console.error(err);
                console.log('error')
                setHighestPrice("2000")
                setMaxPrice("2000")
            }
        }
        fetchHighestPrice();
    },[]);

    const searchInput = useRef(null);
    const searchBrand = useRef(null);
    const searchPrice = useRef(null);

    /**
     * Handles when user goes to search for a specific item
     */
    const onSearchHandler = () => {
        var searchQuery = "";
        if (searchInput.current != null) {
            searchQuery = searchInput.current.value;
        }

        var brandQuery = "all";
        if (searchBrand.current != null) {
            brandQuery = searchBrand.current.value;
        }

        var priceQuery = highestPrice.price;
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

    /**
     * Handles the max price changing 
     */
    const onPriceChangeHandler = () => {
        setMaxPrice(searchPrice.current?.value);
    }

    /**
     * renders navigation bar - including site title, navigation and item search functionality
     */
    return (
        <div className="nav">
            <div id="title-section">
                <Link to="/home" onClick={() => setCurrUrl('/home')}>
                    <img id="logo" src={logo} alt={"Website Logo"} />
                </Link>
                <p id="name">Phone Zone</p>
            </div>

            <form id="search" onSubmit={(event) => event.preventDefault()}>
                <input id="search-input" type="text" ref={searchInput} />
                {searchMode ?
                    <div id="search-filters-div">
                        <div id="search-brand-div">
                            <label htmlFor="brand">Brand</label>
                            <select id="search-brand" name="brand" ref={searchBrand}>
                                <option value="all">All Brands</option>
                                <option value="Apple">Apple</option>
                                <option value="Blackberry">Blackberry</option>
                                <option value="HTC">HTC</option>
                                <option value="Huawei">Huawei</option>
                                <option value="LG">LG</option>
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
                                defaultValue={highestPrice.price}
                                min="0" 
                                max={highestPrice.price}
                                onChange={onPriceChangeHandler}
                                ref={searchPrice} />
                            <p id="search-price-text">{`$${maxPrice}`}</p>
                        </div>
                    </div> :
                    <></>
                }
                <button className="profile-button" id="nav-search-button"
                        type="submit"
                        onClick={onSearchHandler}>
                    <img 
                        className="profile-button-icon" 
                        src={nextpage96} alt="Search" />
                </button>
            </form>

            <div id="profile">
                {!loggedIn ?
                    <button
                        onClick={() => history.push('/login', { pathname: window.location.pathname })}
                        className="profile-button">
                        <img className="profile-button-icon" src={login96} alt="Login" />
                    </button> :
                    
                    <div>
                         <button
                            onClick={() => history.push('/checkout')}
                            className="profile-button">
                            <img className="profile-button-icon" src={checkout96} alt="Checkout" />
                        </button>
                        <button
                            onClick={() => history.push('/user')}
                            className="profile-button">
                                <img className="profile-button-icon" src={user96} alt="Profile" />
                        </button> 
                        <button
                            className="profile-button"
                            onClick={() => {
                                if (window.confirm('Are you sure you want to logout?')) {
                                    setUser(null);
                                    history.push('/');
                                }
                            }}>
                            <img className="profile-button-icon" src={signout96} alt="Logout" />
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar;
