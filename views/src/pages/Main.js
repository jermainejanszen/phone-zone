import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Search from '../components/Search';
import Item from '../components/Item';
import { SearchProvider } from '../providers/SearchContext';
import { useState } from 'react';

const Main = ({ authState }) => {

    const match = useRouteMatch();

    const defaultSearch = { 
        search: "",
        brand: "all",
        price: "2000"};
    const [search, setSearch] = useState(defaultSearch);

    return (
        <div>
            <SearchProvider value={{ search, setSearch }}>
                <NavBar 
                    className="nav"
                    authState={authState} />
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
