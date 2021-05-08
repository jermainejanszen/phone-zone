
import React, { useRef, useState } from 'react'
import '../styles/Profile.css';
import '../styles/EditProfile.css';

const Profile = () => {

    const [firstName, setFirstName] = useState("Jane");
    const [lastName, setLastName] = useState("Doe");
    const [email, setEmail] = useState("jane@doe.com");

    const firstNameInput = useRef(null);
    const lastNameInput = useRef(null);
    const emailInput = useRef(null);

    return (
        <div className="profileContainer">
            <h1>{`Hi, ${firstName}`}</h1>
            <form id="profile-form"> 
                <h2>Update your details:</h2>
                <div className="fieldDiv">
                    <label className="formLabel" htmlFor="firstName">First Name</label>
                    <input className="formInputText" value={firstName} title="firstName" type="text"
                        ref={firstNameInput}
                        onChange={() => setFirstName(firstNameInput.current?.value.substring(0, 12))} />
                </div>
                <div className="fieldDiv">
                    <label className="formLabel" htmlFor="lastName">Last Name</label>
                    <input className="formInputText" value={lastName} title="lastName" type="text"
                        ref={lastNameInput}
                        onChange={() => setLastName(lastNameInput.current?.value)} />
                </div>
                <div className="fieldDiv">
                    <label className="formLabel" htmlFor="email">Email</label>
                    <input className="formInputText" value={email} title="email" type="text"
                        ref={emailInput}
                        onChange={() => setEmail(emailInput.current?.value)} />
                </div>
                <button 
                    className="updateButton" 
                    onClick={() => {
                        setFirstName(firstNameInput.current?.value);
                        setLastName(lastNameInput.current?.value);
                        setEmail(emailInput.current?.value);
                    }}>
                        Update Profile
                </button>
            </form>
        </div>
    )
}

export default Profile
