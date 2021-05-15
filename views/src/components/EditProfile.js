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

    const handleChange = (event) => {
        const field = event.target;
        const label = document.getElementById(event.target.title + "-label");

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
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/user/confirmPassword', form);
    }

    return (
        <div className="profileContainer">
            <h1>{`Hi, ${form.firstname}`}</h1>
            <form id="profile-form" onSubmit={handleSubmit}> 
                <h2>Update your details:</h2>

                <div className="fieldDiv">
                    <label id="firstname-label" className="formLabel formLabelValid">First Name</label>
                    <input className="formInputText" onChange={handleChange} title="firstname" value={form.firstname} type="text" required />
                </div>

                <div className="fieldDiv">
                    <label id="lastname-label" className="formLabel formLabelValid">Last Name</label>
                    <input className="formInputText" onChange={handleChange} title="lastname" value = {form.lastname} type="text" required />
                </div>

                <div className="fieldDiv">
                    <label id="email-label" className="formLabel formLabelValid">Email</label>
                    <input id="email" className="formInputText" onChange={handleChange} title="email"  value = {form.email} type="email" required />
                </div>

                <div className="buttonsDiv">
                    <button type="submit" className="submitButton">Update Profile</button>
                </div>
            </form>
        </div>
    )
}

export default Profile
