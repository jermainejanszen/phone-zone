import React from 'react'
import { useState } from 'react'

import '../styles/Signup.css';


const Signup = () => {

    const [state, setState] = useState(0)

    const getPageContents = () => {
        if (state == 1) {
            return (
                <form id="signup-form">
                    <h1>Login</h1>
                    <label for="email">Email</label>
                    <input title="email" type="email" required></input>
                    <label for="password-field">Password</label>
                    <input id="password-text" title="password" type="password" required></input>
                    <div id="password-visibility-container">
                        <label id="password-visibility-label" for="password-visibility">Toggle Password Visibility</label>
                        <input 
                            id="password-visibility" 
                            title="password-visibility"
                            type="checkbox"
                            onClick={() => {
                                let field = document.getElementById("password-text")
                                field.type = field.type === "password" ? "text" : "password" 
                            }}
                            >
                        </input>
                    </div>
                    <input id="login-button" type="submit" value="Login"></input>
                    <input 
                        id="nav-button" 
                        type="button" 
                        value="Click here to create an account"
                        onClick={() => {
                            setState(0)
                        }}
                        >
                    </input>
                </form>
            );
        } else {
            return (
                <form id="signup-form">
                    <h1>Create your account</h1>
                    <label class="required" for="first-name">First Name</label>
                    <input title="first-name" type="text" required></input>
                    <label class="required" for="last-name">Last Name</label>
                    <input title="last-name" type="text" required></input>
                    <label class="required" for="email">Email</label>
                    <input title="email" type="email" required></input>
                    <label class="required" for="password-field">Password</label>
                    <input id="password-text" title="password" type="password" pattern="^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$" required></input>
                    <div id="password-visibility-container">
                        <label id="password-visibility-label" for="password-visibility">Toggle Password Visibility</label>
                        <input 
                            id="password-visibility" 
                            title="password-visibility"
                            type="checkbox"
                            onClick={() => {
                                let field = document.getElementById("password-text")
                                field.type = field.type === "password" ? "text" : "password" 
                            }}
                            >
                        </input>
                    </div>
                    <input id="signup-button" type="submit" value="Create account"></input>
                    <input 
                        id="nav-button" 
                        type="button" 
                        value="Click here to login"
                        onClick={() => {
                            setState(1)
                        }}
                        >
                    </input>
                </form>
            );
        }
    }

    return (
        <div id="container">
            {getPageContents(state)}
        </div>
    )
}

export default Signup
