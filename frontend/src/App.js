import { useState } from 'react';
import Main from './pages/main';
import './styles/App.css';

const App = () => {

    // 0 = signed out, 1 = signed in
    const [authState, setAuthState] = useState(0);

  return (
    <div className="App">
        <Main
            authState={authState}
            setAuthState={setAuthState} />
    </div>
  );
}

export default App;
