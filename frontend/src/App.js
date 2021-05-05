import { useState } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Main from './pages/Main';
import Signup from './pages/Signup';
import './styles/App.css';

const App = () => {

    // 0 = signed out, 1 = signed in
    const [authState, setAuthState] = useState(0);

  return (
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
                <Route path="/home">
                    <Main authState={authState} />
                </Route>
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;