import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/Login.css';

const Login = () => {

    const history = useHistory();

    return (
        <div className="form-container">
           <form className="login-form">
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
                    <input className="loginButtons" id="login-button" type="submit" value="Login" />
                    
                    <button 
                        className="loginButtons" 
                        id="nav-button"
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