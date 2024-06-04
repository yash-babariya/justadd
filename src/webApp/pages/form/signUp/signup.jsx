// SignUp.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import logo from '../../../../assets/logo/logo.png';
import { addUser } from '../../../../redux/form/form';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userObj, setUserObj] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    });

    const functionOnChange = (e) => {
        setUserObj({ ...userObj, [e.target.name]: e.target.value });
    };
    const validate = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        // Check if all required fields are filled
        if (!userObj.name || !userObj.surname || !userObj.email || !userObj.password) {
            toast.error("Please fill out all fields");
            return false;
        }

        // Check for a valid email
        if (!emailRegex.test(userObj.email)) {
            toast.error("Please enter a valid email");
            return false;
        }

        // Detailed password checks
        if (userObj.password.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return false;
        }
        if (!/[A-Z]/.test(userObj.password)) {
            toast.error("Password must include at least one uppercase letter.");
            return false;
        }
        if (!/[a-z]/.test(userObj.password)) {
            toast.error("Password must include at least one lowercase letter.");
            return false;
        }
        if (!/\d/.test(userObj.password)) {
            toast.error("Password must include at least one number.");
            return false;
        }
        if (!/[@$!%*?&]/.test(userObj.password)) {
            toast.error("Password must include at least one special character from @$!%*?&.");
            return false;
        }

        // If all checks pass
        return true;
    };


    const handleSignUp = () => {
        if (validate()) {
            dispatch(addUser(userObj));
            setUserObj({
                name: "",
                surname: "",
                email: "",
                password: "",
            });
            toast.success("Signed up successfully!");
            navigate("/login");
        }
    };


    return (
        <div className="user">
            <div className="logo">
                <img loading="lazy" src={logo} alt="logo" />
            </div>
            <div className="form">
                <div className="form-user">
                    <div className="heading">
                        <h2>Sign Up</h2>
                    </div>
                    <div className="form-item">
                        <label htmlFor="name">Name</label>
                        <input id="name" onChange={functionOnChange} value={userObj.name} type="text" name="name" placeholder="Enter your name" autoComplete="name" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="surname">Surname</label>
                        <input id="surname" onChange={functionOnChange} value={userObj.surname} type="text" name="surname" placeholder="Enter your surname" autoComplete="family-name" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input id="email" onChange={functionOnChange} value={userObj.email} type="email" name="email" placeholder="Enter your email" autoComplete="email" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input id="password" onChange={functionOnChange} value={userObj.password} type="password" name="password" placeholder="Enter your password" autoComplete="new-password" />
                        <div className="forgot">
                            <Link>Forgot Password?</Link>
                        </div>
                    </div>
                    <div className="form-button">
                        <button onClick={handleSignUp}>Sign Up</button>
                    </div>
                    <div className="change-form">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
