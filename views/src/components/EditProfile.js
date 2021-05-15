import React, { useContext, useRef, useState } from 'react'
import UserContext, { User } from '../providers/UserContext';
import { useHistory } from 'react-router-dom';

import '../styles/Profile.css';
import '../styles/EditProfile.css';

const Profile = () => {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    const [firstName, setFirstName] = useState(user.firstname);
    const [lastName, setLastName] = useState(user.lastname);
    const [email, setEmail] = useState(user.email);

    const firstNameInput = useRef(null);
    const lastNameInput = useRef(null);
    const emailInput = useRef(null);

    return (
        <div className="profileContainer">
            <h1>{`Hi, ${firstName}`}</h1>
            <form id="profile-form" onSubmit={(event) => event.preventDefault()}> 
                <h2>Update your details:</h2>
                <div className="fieldDiv">
                    <label className="formLabel" htmlFor="firstName">First Name</label>
                    <input className="formInputText" value={firstName} title="firstName" type="text"
                        ref={firstNameInput}
                        onChange={() => setFirstName(firstNameInput.current?.value.substring(0, 24))} />
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
                    type="button"
                    className="updateButton" 
                    onClick={() => {
                        setFirstName(firstNameInput.current?.value);
                        setLastName(lastNameInput.current?.value);
                        setEmail(emailInput.current?.value);
                        setUser(
                            new User({ 
                                _id: user.id, 
                                firstname: firstName, 
                                lastname: lastName,
                                email: email
                            }))
                        history.push('/user/confirmPassword');
                    }}>
                        Update Profile
                </button>
            </form>
        </div>
    )
}

export default Profile
