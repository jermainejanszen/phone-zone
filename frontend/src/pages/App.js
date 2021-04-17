import { useState } from 'react';
import NavBar from '../components/NavBar';
import Loading from '../components/Loading';
import '../styles/App.css';

const App = () => {

    // 0 = home, 1 = search, 2 = item
    const [pageState, setPageState] = useState(0);

    // 0 = signed out, 1 = signed in
    const [authState, setAuthState] = useState(0);

  return (
    <div className="App">
        <NavBar 
            className="nav"
            pageState={pageState} 
            setPageState={setPageState} 
            authState={authState}
            setAuthState={setAuthState} />
        <Loading />
    </div>
  );
}

export default App;
