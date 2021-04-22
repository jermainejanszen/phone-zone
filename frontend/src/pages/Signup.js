import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/Auth.css';

const Signup = () => {

    const history = useHistory();

    return (
        <div className="formContainer">
            <form className="authForm">
                <h1 className="formHeading">Create your account</h1>

                <div className="fieldDiv">
                    <label className="formLabelRequired" for="first-name">First Name</label>
                    <input className="formInputText" title="first-name" type="text" required />
                </div>

                <div className="fieldDiv">
                    <label className="formLabelRequired" for="last-name">Last Name</label>
                    <input className="formInputText" title="last-name" type="text" required />
                </div>

                <div className="fieldDiv">
                    <label className="formLabelRequired" for="email">Email</label>
                    <input className="formInputText" title="email" type="email" required />
                </div>

                <div className="fieldDiv">
                    
                        <label className="formLabelRequired" for="password">Password</label>
                        <p className="advice">
                            Make sure it's at least 8 characters including a lowercase and an uppercase letter.
                        </p>
                    
                    <input className="formInputText" id="password" title="password" type="password" pattern="^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$" required />
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
                    <input className="submitButton" type="submit" value="Create account" />

                    <button 
                        className="navButton" 
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