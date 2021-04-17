import { useState } from 'react';

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Search from '../components/Search';
import Item from '../components/Item';

const getPageContents = (state) => {
    if(state === 1) {
        return <Search />;
    } else if(state === 2) {
        return <Item />;
    } else {
        return <Home />;
    }
}

const Main = ({ authState, setAuthState }) => {

    // 0 = home, 1 = search, 2 = item
    const [pageState, setPageState] = useState(0);

    return (
        <div>
            <NavBar 
                className="nav"
                pageState={pageState} 
                setPageState={setPageState} 
                authState={authState}
                setAuthState={setAuthState} />
            {getPageContents(pageState)}
        </div>
    )
}

export default Main
