import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Profile.scss';

const Profile = (props) => {
    const user = useSelector(state => state.user);
    const token = localStorage.getItem('token');
    const { userName, email, role } = user;
    const history = useHistory();
    useEffect(() => {
        if (!token || token === 'null') {
            history.push('/login');
        }
    }, [token, history]);

    return (
        <section className="content">
            <section className="profile">
                <div className="container">
                    <div className="profile__content">
                        <p className="profile__heading">Profile</p>
                        <p className="profile__item">
                            Name: {userName}
                        </p>
                        <p className="profile__item">
                            Email: {email}
                        </p>
                        <p className="profile__item">
                            Role: {role ? 'Admin' : 'User'}
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Profile;