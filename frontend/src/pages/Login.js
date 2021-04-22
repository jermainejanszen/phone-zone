import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/Auth.css';

const Login = () => {

    const history = useHistory();

    return (
        <div className="formContainer">
            <form className="authForm">
                <h1 className="formHeading">Login</h1>

                <div className="fieldDiv">
                    <label className="formLabel" for="email">Email</label>
                    <input className="formInputText" title="email" type="email" required />
                </div>

                <div className="fieldDiv">
                    <label className="formLabel" for="password">Password</label>
                    <input className="formInputText" id="password" title="password" type="password" required />
                </div>

                <div id="password-visibility-container">
                    <label className="formLabel" for="password-visibility">Toggle Password Visibility</label>
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
                    <input className="submitButton" type="submit" value="Login" />
                    
                    <button 
                        className="navButton" 
                        onClick={() => {
                            history.push('/signup');
                        }}>
                            Create a new account
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;