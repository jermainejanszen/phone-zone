import { useState } from 'react';

import NavBar from '../components/NavBar';
import Loading from '../components/Loading';

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
            <Loading />
        </div>
    )
}

export default Main
