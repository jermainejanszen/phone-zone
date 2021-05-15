import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../resources/logo.svg';

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

        /* Checks if the email already exists in the DB 
        const emailExists = async () => {
            let url = `user/getUsers`;

            const response = await fetch(url)

            try {
                const data = await response.json()
                const usersPromise = await JSON.parse(data);
                const users = usersPromise.message

                Object.keys(users).forEach((key) => {
                    let user = users[key];
                    if (user['email'] === form.email) {
                        return true;
                    }
                });

            } catch (err) {
                console.log(err);
            }

            return false;
        } */
        
        /* if (emailExists()) {
            console.log("Email already exists!");
            return;
        } */

        /* Signs the user up */
        const signup = async () => {
            let url = `/user/createNewUser/${form.firstname}/${form.lastname}/${form.email}/${form.password}`;

            const response = await fetch(url);
            
            try {
                const id = await response.json();
                console.log(id);
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
                        <input className="formInputText" onChange={handleChange} title="firstname" type="text" required />
                    </div>

                    <div className="fieldDiv">
                        <label id="lastname-label" className="formLabel formLabelInvalid">Last Name</label>
                        <input className="formInputText" onChange={handleChange} title="lastname" type="text" required />
                    </div>

                    <div className="fieldDiv">
                        <label id="email-label" className="formLabel formLabelInvalid">Email</label>
                        <input className="formInputText" onChange={handleChange} title="email" type="email" required />
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
                                history.push('/login');
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