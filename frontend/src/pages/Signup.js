import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/Auth.css';

const Signup = () => {

    const history = useHistory();
    const [form, setForm] = useState({});

    const handleChange = (event) => {
        const field = event.target;
        const label = document.getElementById(event.target.title + "-label");

        if (field.title !== "password") {
            field.value = field.value.trim();
        }

        if (field.checkValidity()) {
            label.classList.remove("formLabelInvalid");
            label.classList.add("formLabelValid");
        } else {
            label.classList.remove("formLabelValid");
            label.classList.add("formLabelInvalid");
        }

        setForm({
            ...form,
            [event.target.title]: event.target.value.trim()
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form)

        /* TODO: Implement logic for signing the user up */
    }

    return (
        <div className="formContainer">
            <form className="authForm" onSubmit={handleSubmit}>
                <h1 className="formHeading">Create your account</h1>

                <div className="fieldDiv">
                    <label id="firstname-label" className="formLabelInvalid">First Name</label>
                    <input className="formInputText" onChange={handleChange} title="firstname" type="text" required />
                </div>

                <div className="fieldDiv">
                    <label id="lastname-label" className="formLabelInvalid">Last Name</label>
                    <input className="formInputText" onChange={handleChange} title="lastname" type="text" required />
                </div>

                <div className="fieldDiv">
                    <label id="email-label" className="formLabelInvalid">Email</label>
                    <input className="formInputText" onChange={handleChange} title="email" type="email" required />
                </div>

                <div className="fieldDiv">
                    
                    <label id="password-label" className="formLabelInvalid">Password</label>
                    <p className="advice">
                        Make sure it's at least 8 characters including a lowercase and an uppercase letter.
                    </p>
                
                    <input className="formInputText" id="password" onChange={handleChange} title="password" type="password" pattern="^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$" required />
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