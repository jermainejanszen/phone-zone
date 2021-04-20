import { useState } from 'react';
import Profile from '../components/Profile';
import EditUser from '../components/EditUser';
import EditPassword from '../components/EditPassword';
import NewListing from '../components/NewListing';


const getPageContents = (state) => {
    if(state === 1) {
        return <EditUser />;
    } else if(state === 2) {
        return <EditPassword />;
    } else if (state === 3) {
        return <NewListing />;
    } else {
        return <Profile />;
    }
}

const User = () => {

    const [pageState, setPageState] = useState(0);

    return (
        <div>
            
        </div>
    )
}

export default User
