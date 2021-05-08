import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import EditProfile from '../components/EditProfile';
import EditPassword from '../components/EditPassword';
import NewListing from '../components/NewListing';
import ProfileNavBar from '../components/ProfileNavBar';

const User = ({authState, setAuthState}) => {

    const match = useRouteMatch();

    return (
        <div>
            <ProfileNavBar
                authState={authState}
                setAuthState={setAuthState} />
            <Switch>
                <Route path={`${match.path}/listings`}>
                    <NewListing />
                </Route>
                <Route path={`${match.path}/editpassword`}>
                    <EditPassword />
                </Route>
                <Route path={match.path}>
                    <EditProfile />
                </Route>
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </div>  
    )
}

export default User
