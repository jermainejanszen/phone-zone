import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../providers/UserContext';
import CryptoJS from 'crypto-js';

import '../styles/Profile.css';
import '../styles/EditPassword.css';

import close from '../resources/close96.png';


const EditPassword = () => {
    const history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const [form, setForm] = useState({
        currentPassword: '',
        newPassword: ''
    });

    const isCorrectPassword = async () => {
        let url = `/user/getPassword/${user.id}`;
        const response = await fetch(url);

        try {
            const data = await response.json();
            const result = await JSON.parse(data);
            const dbPassword = result.message[0].password;

            if (CryptoJS.MD5(form.currentPassword).toString() === dbPassword) {
                return true;
            } else {
                return false;
            }
            
        } catch (err) {
            console.log(err);
            console.log('error');
        }

        return false;
    }

    const updatePassword = async () => {
        let url = `/user/updatePassword/${user.id}/${form.newPassword}`
        const response = await fetch(url);
        history.push('/user');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (await isCorrectPassword()) {
            updatePassword();
        } else {
            document.getElementById("invalid-credentials").style.display = "flex";
        }
    }

    const handleChange = (event) => {
        const field = event.target;
        const label = document.getElementById(event.target.id + "-label");

        if (field.id === "newPassword") {
            if (field.checkValidity()) {
                label.classList.remove("formLabelInvalid");
                label.classList.add("formLabelValid");
            } else {
                label.classList.remove("formLabelValid");
                label.classList.add("formLabelInvalid");
            }
        }

        setForm({
            ...form,
            [event.target.id]: event.target.value.trim()
        });
    } 

    return (
        <div className="profileContainer">
            <h1>{`Hi, ${user.firstname}`}</h1>

            <form id="edit-form" onSubmit={handleSubmit}>
                <h2>Change your password</h2>

                <div id="invalid-credentials">
                    <p id="invalid-credentials-msg">Current password incorrect. Please try again.</p>
                    <img id="close-button" src={close} onClick={() => document.getElementById("invalid-credentials").style.display = "none"}></img>
                </div>

                <div className="fieldDiv">
                    <label className="formLabel">Current Password</label>
                    <input className="formInputText" onChange={handleChange} id="currentPassword" type="password" value={form.currentPassword} />
                </div>

                <div className="fieldDiv">
                    <label id="newPassword-label" className="formLabel formLabelInvalid">New Password</label>
                    <p className="advice">
                        Make sure it's at least 8 characters including a lowercase and an uppercase letter.
                    </p>
                
                    <input className="formInputText" id="newPassword" onChange={handleChange} value={form.newPassword} type="password" pattern="^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$" required />
                </div>

                <div id="password-visibility-container">
                    <label className="formLabel">Toggle Password Visibility</label>
                    <input 
                        id="password-visibility" 
                        title="password-visibility"
                        type="checkbox"
                        onClick={() => {
                            let field = document.getElementById("newPassword")
                            field.type = field.type === "password" ? "text" : "password" 
                        }}
                        >
                    </input>
                </div>

                <div className="buttonsDiv">
                    <button className="submitButton">Confirm Password Change</button>
                </div>
            </form>
        </div>
    )
}

export default EditPassword
