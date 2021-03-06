import { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import UserContext, { User } from '../providers/UserContext';
import CryptoJS from 'crypto-js';
import '../styles/Auth.css';

import close from '../resources/close96.png';

const ConfirmPassword = () => {

    const [password, setPassword] = useState('');
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const form = location.state;

    /**
     * Makes call to update user information in database and locally 
     */
    const updateProfile = async () => {
        const url = `/user/updateUserInformation/${user.id}/${form.firstname}/${form.lastname}/${form.email}`;
        const response = await fetch(url);

        try {
            const result = await response.json();
            console.log(result);
        } catch (err) {
            console.log(err);
            console.log('error');
            return;
        }

        setUser(
            new User({ 
                _id: user.id, 
                firstname: form.firstname, 
                lastname: form.lastname,
                email: form.email
            })
        );
        history.goBack();
    }

    /**
     * Makes a call to check if password inputted is correct 
     */
    const isCorrectPassword = async () => {
        let url = `/user/getPassword/${user.id}`;
        const response = await fetch(url);

        try {
            const data = await response.json();
            const result = await JSON.parse(data);
            const dbPassword = result.message[0].password;

            return CryptoJS.MD5(password).toString() === dbPassword;

        } catch (err) {
            console.log(err);
            console.log('error');
        }

        return false;
    }

    /**
     * Handles changes by setting password 
     * @param {event} event 
     */
    const handleChange = (event) => {
        setPassword(event.target.value);
    }

    /**
     * Handles form submissions by calling required methods to check password 
     * is correct and updating profile if it is
     * @param {event} event 
     */
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (await isCorrectPassword()) {
            updateProfile();
        } else {
            document.getElementById("invalid-credentials").style.display = "flex";
        }
    }

    // sets up form to allow user to type in password to confirm their identity and approve changes
    return (
        <div>
            <div className="formContainer">
                <form className="authForm" onSubmit={handleSubmit}>
                    <h1 className="formHeading">Please confirm this change by typing in your password.</h1>

                    <div id="invalid-credentials">
                        <p id="invalid-credentials-msg">Incorrect password. Please try again.</p>
                        <img id="close-button" src={close} onClick={() => document.getElementById("invalid-credentials").style.display = "none"}></img>
                    </div>

                    <div className="fieldDiv">
                        <label className="formLabel">Password</label>
                        <input className="formInputText" onChange={handleChange} id="password" title="password" type="password" value={password} />
                    </div>

                    <div id="password-visibility-container">
                        <label className="formLabel">Toggle Password Visibility</label>
                        <input 
                            id="password-visibility" 
                            title="password-visibility"
                            type="checkbox"
                            onClick={() => {
                                let field = document.getElementById("password")
                                field.type = field.type === "password" ? "text" : "password" 
                            }}
                            >
                        </input>
                    </div>
                    <div className="buttonsDiv">
                        <button type="submit" className="submitButton">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ConfirmPassword;