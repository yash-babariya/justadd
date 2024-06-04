import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import '../form.scss'
import logo from '../../../../assets/logo/logo.png';
import { Link } from 'react-router-dom';

export default function Login() {
    const users = useSelector(state => state.user.users);

    const initialValue = {
        email: "",
        password: "",
    };

    const [userObj, setUserObj] = useState(initialValue);

    const functionOnChange = (e) => {
        setUserObj({ ...userObj, [e.target.name]: e.target.value });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    const validate = () => {
        if (!userObj.email) {
            toast.error("Please Enter your Email");
            return false;
        } else if (!userObj.email.includes("@")) {
            toast.error("Please Enter valid Email");
            return false;
        } else if (!userObj.password) {
            toast.error("Please Enter your Password");
            return false;
        } else if (userObj.password.length < 8) {
            toast.error("Please Enter minimum 8 letters");
            return false;
        }

        return true;
    };

    const handleLogin = () => {
        if (validate()) {
            const foundUser = users.find(user => user.email === userObj.email && user.password === userObj.password);
            if (foundUser) {
                toast.success("Login Successful!");
                localStorage.setItem("IsLogin", "true");
                window.location.reload();
            } else {
                toast.error("Invalid email or password. Please try again.");
            }
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
                        <h2>Login</h2>
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email" // Added id for label association
                            onChange={functionOnChange}
                            onKeyDown={handleKeyDown}
                            value={userObj.email}
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            autoComplete="email" // Added autocomplete attribute
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password" // Added id for label association
                            onChange={functionOnChange}
                            onKeyDown={handleKeyDown}
                            value={userObj.password}
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            autoComplete="current-password" // Added autocomplete attribute
                        />
                        <div className="forgot">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </div>
                    <div className="form-button">
                        <button onClick={handleLogin}>Login</button>
                    </div>
                    <div className="change-form">
                        <p>
                            Don't have an account?{' '}
                            <Link to="/">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
