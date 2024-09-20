import React from 'react';
import './profile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearUsers } from '../../../redux/form/form';
import { Link } from 'react-router-dom';

export default function Profile() {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(clearUsers());
        window.location.reload();
    };

    const users = useSelector(state => state.user.users);
    const isLoggedIn = localStorage.getItem('IsLogin') === 'true'; // Retrieve login status from localStorage

    return (
        <div className='profile'>
            <div className="container">
                <section>
                    <h2 className='profile-title'>User Profiles</h2>
                    <p>You are currently logged in as JUSTADD user</p>
                    {isLoggedIn ? (
                        users.length > 0 ? (
                            users.map((user, i) => (
                                <div key={i} className='profile-card'>
                                    <h5 className='profile-name'>Hello, {user.name} {user.surname}</h5>
                                    <p className='profile-email'>Email: {user.email}</p>
                                    <button className='profile-logout' onClick={logout}>Logout</button>
                                </div>
                            ))
                        ) : (
                            <div className='no-users'>
                                <h5>No user profiles available at the moment.</h5>
                                <p>Please check back later or contact support.</p>
                            </div>
                        )
                    ) : (
                        <div className='no-users'>
                            <h5>You are not logged in. Please log in to view profiles.</h5>
                            <Link to="/login" className="profile-login">
                                Login
                            </Link>
                        </div>
                    )}
                </section>
            </div >
        </div >
    );
}
