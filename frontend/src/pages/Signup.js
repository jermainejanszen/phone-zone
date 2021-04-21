import React from 'react';
import { Link } from 'react-router-dom';

// import '../styles/Signup.css';

const Signup = () => {
    return (
        <div className="form-container">
            <form className="signup-form">
                <h1>Create your account</h1>

                <label class="required" for="first-name">First Name</label>
                <input title="first-name" type="text" required></input>

                <label class="required" for="last-name">Last Name</label>
                <input title="last-name" type="text" required></input>

                <label class="required" for="email">Email</label>
                <input title="email" type="email" required></input>

                <label class="required" for="password">Password</label>
                <p class="advice">
                    Make sure it's at least 8 characters including a lowercase and uppercase letter.
                </p>
                <input id="password" title="password" type="password" pattern="^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$" required></input>

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

                <input id="signup-button" type="submit" value="Create account"></input>

                <Link to="/login">
                    <input id="nav-button" type="button" value="Click here to login"></input>
                </Link>
            </form>
        </div>
    );
}

export default Signup;