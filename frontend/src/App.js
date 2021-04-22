import { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User'
import Main from './pages/Main';
import Signup from './pages/Signup';
import './styles/App.css';

const App = () => {

    // 0 = signed out, 1 = signed in
    const [authState, setAuthState] = useState(1);

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
                <Route path="/user">
                    <User />
                </Route>
                <Route path="/">
                    <Main authState={authState} />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;