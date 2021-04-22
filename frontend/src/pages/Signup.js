import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/Auth.css';

const Signup = () => {

    const history = useHistory();
    const [form, setForm] = useState({});

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.title]: event.target.value.trim()
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form)
    }

    return (
        <div className="formContainer">
            <form className="authForm" onSubmit={handleSubmit}>
                <h1 className="formHeading">Create your account</h1>

                <div className="fieldDiv">
                    <label className="formLabelRequired">First Name</label>
                    <input className="formInputText" onChange={handleChange} title="firstName" type="text" required />
                </div>

                <div className="fieldDiv">
                    <label className="formLabelRequired">Last Name</label>
                    <input className="formInputText" onChange={handleChange} title="lastName" type="text" required />
                </div>

                <div className="fieldDiv">
                    <label className="formLabelRequired">Email</label>
                    <input className="formInputText" onChange={handleChange} title="email" type="email" required />
                </div>

                <div className="fieldDiv">
                    
                        <label className="formLabelRequired">Password</label>
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