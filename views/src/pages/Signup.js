import { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import UserContext, { User } from '../providers/UserContext';
import logo from '../resources/logo.svg';

import '../styles/Auth.css';

const Signup = () => {

    const history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const [form, setForm] = useState({});

    const handleChange = (event) => {
        const field = event.target;
        const label = document.getElementById(event.target.title + "-label");

        if (field.title !== "password") {
            field.value = field.value.trim();
        }

        field.setCustomValidity('');

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

        /* Updates the page if the email already exists in the DB */
        const emailAlreadyExists = () => {
            console.log('Email already in the system');

            let email = document.getElementById('email');
            let emailLabel = document.getElementById('email-label')

            emailLabel.classList.remove("formLabelValid");
            emailLabel.classList.add("formLabelInvalid");

            email.focus();
            email.setCustomValidity("Email already taken");
            email.reportValidity();
        }

        /* Signs the user up */
        const signup = async () => {
            let url = `/user/createNewUser/${form.firstname}/${form.lastname}/${form.email}/${form.password}`;

            const response = await fetch(url);

            if (response.status === 500) {
                emailAlreadyExists()
                return;
            }

            try {
                const id = await response.json();
                console.log(id);
                setUser(new User({ _id: id, firstname: form.firstname, lastname: form.lastname, email: form.email }))
                history.goBack();
            } catch (err) {
                console.log(err);
                console.log('error');
            }
        }

        signup();
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
                    <h1 className="formHeading">Create your account</h1>

                    <div className="fieldDiv">
                        <label id="firstname-label" className="formLabel formLabelInvalid">First Name</label>
                        <input className="formInputText" onChange={handleChange} title="firstname" type="text" required maxLength="30"/>
                    </div>

                    <div className="fieldDiv">
                        <label id="lastname-label" className="formLabel formLabelInvalid">Last Name</label>
                        <input className="formInputText" onChange={handleChange} title="lastname" type="text" required maxLength="30"/>
                    </div>

                    <div className="fieldDiv">
                        <label id="email-label" className="formLabel formLabelInvalid">Email</label>
                        <input id="email" className="formInputText" onChange={handleChange} title="email" type="email" required maxLength="60"/>
                    </div>

                    <div className="fieldDiv">
                        
                        <label id="password-label" className="formLabel formLabelInvalid">Password</label>
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
                                history.replace('/login');
                            }}>
                                Already have an account? Login here
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;