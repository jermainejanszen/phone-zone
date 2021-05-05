import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Search from '../components/Search';
import Item from '../components/Item';

const Main = ({ authState }) => {

    const match = useRouteMatch();

    return (
        <div>
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
        </div>
    )
}

export default Main
