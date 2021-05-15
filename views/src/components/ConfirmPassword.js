import { useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import logo from '../resources/logo.svg';
import '../styles/Auth.css';

const ConfirmPassword = () => {

    const [form, setForm] = useState({});
    const history = useHistory();

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
        <div>
            <div className="formContainer">
                <form className="authForm" onSubmit={handleSubmit}>
                    <h1 className="formHeading">Please confirm this change by typing in your password.</h1>
                    <div className="fieldDiv">
                        <label className="formLabel">Password</label>
                        <input className="formInputText" onChange={handleChange} id="password" title="password" type="password" required />
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
                        <button 
                            type="button"
                            className="navButton" 
                            onClick={() => {
                                history.push('/user');
                            }}>
                                Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ConfirmPassword;