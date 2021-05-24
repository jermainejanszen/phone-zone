import { useState } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Profile from './pages/Profile'
import Main from './pages/Main';
import Signup from './pages/Signup';
import EditPassword from './components/EditPassword';
import { UserProvider, User } from './providers/UserContext';

import './styles/App.css';

const mockUser = {
    "_id":{"$oid":"5f5237a4c1beb1523fa3da02"},
    "firstname":"Anita",
    "lastname":"Simpson",
    "email":"anita.simpson@hooli.com",
    "password":"071ff0e74e201b9d3c0a28d573091ac8",
};

const App = () => {

    const [user, setUser] = useState(null);

    return (
        <UserProvider value={{user, setUser}}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                        <Route path="/user">
                            <Profile />
                        </Route>
                        <Route path="/password">
                            <EditPassword />
                        </Route>
                        <Route path="/home">
                            <Main />
                        </Route>
                        <Route path="/">
                            <Redirect to="/home" />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;