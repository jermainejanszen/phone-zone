import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Search from '../components/Search';
import Item from '../components/Item';
import { SearchProvider } from '../providers/SearchContext';


const Main = () => {

    const [highestPrice, setHighestPrice] = useState({price:"2000"});

    const match = useRouteMatch();
 

    useEffect(() => {
        const fetchItems = async () => {
            let url = `/phone/findHighestPrice`;
            const response = await fetch(url);

            try {
                const data = await response.json();
                const pricePromise = await JSON.parse(data);
                setHighestPrice(pricePromise.message[0]);
            } catch(err) {
                console.error(err);
                console.log('error')

            }
        }
        fetchItems();
    },[]);

    const defaultSearch = { 
        title: "",
        brand: "all",
        price: highestPrice.price};
    
    const [search, setSearch] = useState(defaultSearch);

    return (
        <div>
            <SearchProvider value={{ search, setSearch }}>
                <NavBar className="nav" />
                <Switch>
                    <Route path={`${match.path}/item`}>
                        <Item />
                    </Route>
                    <Route path={`${match.path}/search`}>
                        <Search />
                    </Route>
                    <Route path={match.path}>
                        <Home />
                    </Route>
                    <Route path="/">
                        <Redirect to="/home" />
                    </Route>
                </Switch>
            </SearchProvider>
        </div>
    )

}
export default Main
