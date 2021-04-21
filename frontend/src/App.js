import { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
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
                <Route path="/">
                    <Main
                        authState={authState} />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
