import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../../../../assets/scss/Form.scss';
import '../../../../assets/scss/Color.scss';
import '../../../../assets/scss/Button.scss';
import '../../../../assets/js/formScript';
import { moveLable } from '../../../../assets/js/moveLable.js';
import './Signup.scss';
import userApi from '../../../../api/userApi';
import { updateCurrentUser } from '../../../../actions/user';


function Signup() {
    const [userInput, setUserInput] = useState({ email: '', password: '', name: '' });
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const onChangeHandle = (e) => {
        moveLable(e);
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    }
    const onSubmitForm = async (e) => {
        try {
            e.preventDefault();
            const response = await userApi.register(userInput);
            const { token, userName, favorites, email, role } = response;
            localStorage.setItem('token', token);
            const action = updateCurrentUser({ userName, favorites, email, role });
            dispatch(action);
            history.push('/')
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }
    return (
        <section className="content">
            <section className="signup" id="signup">
                <div className="container">
                    <h2 className="signup__heading">Đăng ký</h2>
                    <form className="form signup__form" action>
                        {errorMessage &&
                            (Array.isArray(errorMessage) ? (
                                errorMessage.map((err) => (
                                    <p className="form__message color-danger">{err}</p>))
                            ) : ((<p className="form__message color-danger">{errorMessage}</p>)))
                        }
                        <div className="form__group">
                            <input type='email' name='email' className="form__control" id='email' onChange={(e) => onChangeHandle(e)} />
                            <label className="form__label" htmlFor='email'>Email</label>
                        </div>
                        <div className="form__group">
                            <input type='text' name='name' className="form__control" id='name' onChange={(e) => onChangeHandle(e)} />
                            <label className="form__label" htmlFor='name'>Username</label>
                        </div>
                        <div className="form__group">
                            <input type='password' name='password' className="form__control" id='password' onChange={(e) => onChangeHandle(e)} />
                            <label className="form__label" htmlFor='password'>Password</label>
                        </div>
                        <button type='submit' className="btn btn--primary form__submit-btn" onClick={(e) => onSubmitForm(e)}>Đăng ký</button>
                        <p className="form__footer">
                            <Link to="/login">Đăng nhập</Link>
                        </p>
                    </form>
                </div>
            </section>
        </section>
    );
}

export default Signup;