import React, { useContext, useRef, useState } from 'react'
import UserContext, { User } from '../providers/UserContext';
import { useHistory } from 'react-router-dom';

import '../styles/Profile.css';
import '../styles/EditProfile.css';

const Profile = () => {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    const [form, setForm] = useState({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email
    });

    const anyChanges = () => {
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;

        return firstname !== user.firstname || lastname !== user.lastname || email !== user.email;
    }

    const handleChange = (event) => {
        const field = event.target;
        const label = document.getElementById(event.target.title + "-label");
        const updateButton = document.getElementById("update-button");

        field.value = field.value.trim();

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

        if (anyChanges()) {
            console.log("ASD");
            updateButton.classList.remove("unclickable");
        } else {
            console.log("ASDASDA");
            updateButton.classList.add("unclickable");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (anyChanges()) {
            history.push('/user/confirmPassword', form);
        }
    }

    return (
        <div className="profileContainer">
            <h1>{`Hi, ${form.firstname}`}</h1>
            <form id="profile-form" onSubmit={handleSubmit}> 
                <h2>Update your details:</h2>

                <div className="fieldDiv">
                    <label id="firstname-label" className="formLabel formLabelValid">First Name</label>
                    <input id="firstname" className="formInputText" onChange={handleChange} title="firstname" value={form.firstname} type="text" required />
                </div>

                <div className="fieldDiv">
                    <label id="lastname-label" className="formLabel formLabelValid">Last Name</label>
                    <input id="lastname" className="formInputText" onChange={handleChange} title="lastname" value = {form.lastname} type="text" required />
                </div>

                <div className="fieldDiv">
                    <label id="email-label" className="formLabel formLabelValid">Email</label>
                    <input id="email" className="formInputText" onChange={handleChange} title="email"  value = {form.email} type="email" required />
                </div>

                <div className="buttonsDiv">
                    <button id="update-button" type="submit" className="submitButton unclickable">Update Profile</button>
                </div>
            </form>
        </div>
    )
}

export default Profile
