import { Link, useHistory } from 'react-router-dom';
import logo from '../resources/logo.svg';
import edit from '../resources/edit.svg';
import key from '../resources/key.svg';
import selling96 from '../resources/selling96.png';
import signout96 from '../resources/signout96.png';
import '../styles/ProfileNavBar.css'; 

const ProfileNavBar = ({authState, setAuthState}) => {

    const history = useHistory();

    return (
        <div className="navBar">
            <div id="nav">
                <div id="profile-title-section">
                    <Link to="/">
                        <img id="logo" src={logo} alt={"Website Logo"} />
                    </Link>
                    <p id="name">Phone Zone</p>
                </div>
                <div id="sideBar">
                    <button
                        className="tab-button"
                        onClick={() => history.push('/user')}>
                        <p>Edit Profile</p>
                        <img className="tab-button-icon" src={edit} alt="Edit" />
                    </button>
                    <button
                        className="tab-button"
                        onClick={() => history.push('/user/editpassword')}>
                        <p>Change Password</p>
                        <img className="tab-button-icon" src={key} alt="Change" />
                    </button>
                    <button
                        className="tab-button"
                        onClick={() => history.push('/user/listings')}>
                        <p>Manage Listings</p>
                        <img className="tab-button-icon" src={selling96} alt="Manage" />
                    </button>
                </div>
                <button
                    className="profile-button"
                    id="signout-button"
                    onClick={() => setAuthState(0)}>
                    <img id="signout-button-icon" src={signout96} alt="Logout" />
                </button>
            </div>
        </div>  
        
    )
}

export default ProfileNavBar
