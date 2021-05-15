import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import EditProfile from '../components/EditProfile';
import EditPassword from '../components/EditPassword';
import NewListing from '../components/NewListing';
import ProfileNavBar from '../components/ProfileNavBar';
import ConfirmPassword from '../components/ConfirmPassword';

const Profile = () => {

    const match = useRouteMatch();

    return (
        <div>
            <ProfileNavBar />
            <Switch>
                <Route path={`${match.path}/listings`}>
                    <NewListing />
                </Route>
                <Route path={`${match.path}/editpassword`}>
                    <EditPassword />
                </Route>
                <Route path={`${match.path}/confirmPassword`}>
                    <ConfirmPassword />
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

export default Profile
