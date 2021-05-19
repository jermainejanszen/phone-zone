import { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../resources/logo.svg';
import close from '../resources/close96.png';
import UserContext, { User } from '../providers/UserContext';

import '../styles/Auth.css';

const Login = () => {

    const history = useHistory();
    const { user, setUser } = useContext(UserContext);

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

        /* Attempts to log the user in */
        const login = async () => {
            let url = `user/validateUserInformation/${form.email}/${form.password}`;

            const response = await fetch(url);

            try {
                const data = await response.json();
                const result = await JSON.parse(data);
                if (Object.keys(result.message).length === 0) {
                    console.log("Invalid credentials");
                    document.getElementById("invalid-credentials").style.display = "flex";
                } else {
                    console.log("Logged in successfully!");
                    setUser(new User(result.message[0]));
                    history.goBack();
                }
            } catch (err) {
                console.log(err);
                console.log('error');
            }
        }

        login();
    }

    return (
        <div>
            <div id="auth-logo-div">
                <img id="auth-logo" src={logo} alt={"Website Logo"}  
                    onClick={() => {
                        history.push('/');
                    }}>
                </img>
                <p id="name">Phone Zone</p>
            </div>
            <div className="formContainer">
                <form className="authForm" onSubmit={handleSubmit}>
                    <h1 className="formHeading">Login</h1>

                    <div id="invalid-credentials">
                        <p id="invalid-credentials-msg">Incorrect email or password.</p>
                        <img id="close-button" src={close} onClick={() => document.getElementById("invalid-credentials").style.display = "none"}></img>
                    </div>

                    <div className="fieldDiv">
                        <label className="formLabel">Email</label>
                        <input className="formInputText" onChange={handleChange} title="email" type="text" />
                    </div>

                    <div className="fieldDiv">
                        <label className="formLabel">Password</label>
                        <input className="formInputText" onChange={handleChange} id="password" title="password" type="password" />
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
                        <input className="submitButton" type="submit" value="login" />
                        
                        <button 
                            className="navButton" 
                            onClick={() => {
                                history.replace('/signup');
                            }}>
                                Create a new account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;