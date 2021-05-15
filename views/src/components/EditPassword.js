import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../providers/UserContext';

import '../styles/Profile.css';
import '../styles/EditPassword.css';


const EditPassword = () => {
    const history = useHistory();
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="profileContainer">
            <h1>{`Hi, ${user.firstname}`}</h1>

            <form id="password-form">
                <h2>Change your password</h2>

                <div className="fieldDiv">
                    <label className="formLabel" htmlFor="password">Current Password</label>
                    <input className="formInputText" id="cur-password" title="password" type="password" required />
                </div>

                <div className="fieldDiv">
                    <label className="formLabel" htmlFor="password">New Password</label>
                    <input className="formInputText" id="new-password" title="password" type="password" required />
                </div>

                <button 
                        className="submitButton" 
                        onClick={() => {
                            history.push('/editProfile');
                        }}>
                            Confirm Password Change
                    </button>
            </form>
        </div>
    )
}

export default EditPassword
