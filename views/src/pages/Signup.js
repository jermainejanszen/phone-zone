import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/Login.css';

const Signup = () => {

    const history = useHistory();

    return (
        <div className="form-container">
            <form className="login-form">
                <h1 className="formHeading">Create your account</h1>

                <div className="fieldDiv">
                    <label className="formLabel required" for="first-name">First Name</label>
                    <input className="formInputText" title="first-name" type="text" required />
                </div>

                <div className="fieldDiv">
                    <label className="formLabel required" for="last-name">Last Name</label>
                    <input className="formInputText" title="last-name" type="text" required />
                </div>

                <div className="fieldDiv">
                    <label className="formLabel required" for="email">Email</label>
                    <input className="formInputText" title="email" type="email" required />
                </div>

                <div className="fieldDiv">
                    <div id="password-field-label">
                        <label className="formLabel required" for="password">Password</label>
                        <p class="advice">
                            Make sure it's at least 8 characters including a lowercase and an uppercase letter.
                        </p>
                    </div>
                    <input className="formInputText" id="password" title="password" type="password" pattern="^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$" required />
                </div>

                <div id="password-visibility-container">
                    <label id="password-visibility-label" for="password-visibility">Toggle Password Visibility</label>
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

                <div className="loginButtonsDiv">
                    <input className="loginButtons" id="signup-button" type="submit" value="Create account" />

                    <button 
                        className="loginButtons" 
                        id="nav-button"
                        onClick={() => {
                            history.push('/login');
                        }}>
                            Already have an account? Login here
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;