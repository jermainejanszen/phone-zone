import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import logo from '../logo.svg';
import '../styles/App.css';

const App = () => {

  // 0 = home, 1 = search, 2 = item
  const [pageState, setPageState] = useState(0);

  // 0 = signed out, 1 = signed in
  const [authState, setAuthState] = useState(0);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <NavBar 
        className="nav"
        pageState={pageState} 
        setPageState={setPageState} 
        authState={authState}
        setAuthState={setAuthState} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data ? data : "Is the backend running?"}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
