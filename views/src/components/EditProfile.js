import React, { useContext, useState } from 'react'
import UserContext from '../providers/UserContext';
import { useHistory } from 'react-router-dom';

import '../styles/Profile.css';
import '../styles/EditProfile.css';

const EditProfile = () => {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    const [form, setForm] = useState({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email
    });

    /**
     * Method called upon any changes occurring to fields in the input form. 
     * Returns true if any of the fields have been changed from their previous value.
     */
    const anyChanges = () => {
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;

        return firstname !== user.firstname || lastname !== user.lastname || email !== user.email;
    }

    /**
     * Checks database to see if another user has created an account with the same email
     */
    const emailExists = async () => {
        const email = document.getElementById("email").value;

        if (email === user.email) {
            return false;
        }

        let url = `/user/checkEmailExists/${document.getElementById("email").value}`;
        console.log(url);

        const response = await fetch(url);

        try {
            const data = await response.json();
            const result = await JSON.parse(data);
            return result.message.hasOwnProperty('0');
        } catch (err) {
            console.log(err);
        }

        return false;
    }

    /**
     * Handles changes to the input form and provides validation checks
     * @param {event} event 
     */
    const handleChange = (event) => {
        const field = event.target;
        const label = document.getElementById(event.target.id + "-label");
        const updateButton = document.getElementById("update-button");

        field.value = field.value.trim();

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
            [event.target.id]: event.target.value.trim()
        });

        if (anyChanges()) {
            updateButton.classList.remove("unclickable");
        } else {
            updateButton.classList.add("unclickable");
        }
    }

    /**
     * Called upon a user clicking to submit their information changes and 
     * makes a call to update the database correspondingly
     * @param {event} event 
     */
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (await emailExists()) {
            let email = document.getElementById('email');
            let emailLabel = document.getElementById('email-label')

            emailLabel.classList.remove("formLabelValid");
            emailLabel.classList.add("formLabelInvalid");

            email.focus();
            email.setCustomValidity("Email already taken");
            email.reportValidity();
        } else if (anyChanges()) {
            history.push('/user/confirmPassword', form);
        }
    }

    // sets up input form for user to see and change their details in 
    return (
        <div className="profileContainer">
            <h1>{`Hi, ${form.firstname}`}</h1>
            <form id="edit-form" onSubmit={handleSubmit}> 
                <h2>Update your details:</h2>

                <div className="fieldDiv">
                    <label id="firstname-label" className="formLabel formLabelValid">First Name</label>
                    <input id="firstname" className="formInputText" onChange={handleChange} value={form.firstname} type="text" required maxLength="30"/>
                </div>

                <div className="fieldDiv">
                    <label id="lastname-label" className="formLabel formLabelValid">Last Name</label>
                    <input id="lastname" className="formInputText" onChange={handleChange} value={form.lastname} type="text" required maxLength="30"/>
                </div>

                <div className="fieldDiv">
                    <label id="email-label" className="formLabel formLabelValid">Email</label>
                    <input id="email" className="formInputText" onChange={handleChange} value={form.email} type="email" required maxLength="60"/>
                </div>

                <div className="buttonsDiv">
                    <button id="update-button" type="submit" className="submitButton unclickable">Update Profile</button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile;