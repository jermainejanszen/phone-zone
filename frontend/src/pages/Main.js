import { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Search from '../components/Search';
import Item from '../components/Item';

const Main = ({ authState, setAuthState }) => {

    // 0 = home, 1 = search, 2 = item
    const [pageState, setPageState] = useState(0);

    const match = useRouteMatch('/');
    if(match.isExact) {
        if(pageState !== 0) {
            setPageState(0);
        }
    }

    const getPageContents = () => {
        if(pageState === 1) {
            return <Search />;
        } else if(pageState === 2) {
            return <Item />;
        } else {
            return <Home setPageState={setPageState} />;
        }
    }

    return (
        <div>
            <NavBar 
                className="nav"
                pageState={pageState} 
                setPageState={setPageState} 
                authState={authState}
                setAuthState={setAuthState} />
            {getPageContents()}
        </div>
    )
}

export default Main
