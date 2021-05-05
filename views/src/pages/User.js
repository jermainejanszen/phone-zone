import { useState } from 'react';
import EditProfile from '../components/EditProfile';
import EditPassword from '../components/EditPassword';
import NewListing from '../components/NewListing';
import ProfileNavBar from '../components/ProfileNavBar';


const getPageContents = (state) => {
    if(state === 1) {
        return <NewListing />;
    } else if(state === 2) {
        return <EditPassword />;
    } else {
        return <EditProfile />;
    }
}

const User = ({authState, setAuthState}) => {

    const [pageState, setPageState] = useState(0);

    return (
        <div>
            <ProfileNavBar
                pageState={pageState} 
                setPageState={setPageState}
                authState={authState}
                setAuthState={setAuthState} />
            {getPageContents(pageState)}
        </div>
        
    )
}

export default User
