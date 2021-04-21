import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Login.css';

const Login = () => {
    return (
        <div id="form-container">
           <form>
                <h1>Login</h1>

                <label for="email">Email</label>
                <input title="email" type="email" required></input>

                <label for="password">Password</label>
                <input id="password" title="password" type="password" required></input>

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

                <input id="login-button" type="submit" value="Login"></input>

                <Link to="/signup">
                    <input id="nav-button" type="button" value="Click here to create an account"></input>
                </Link>
            </form>
        </div>
    );
}

export default Login;