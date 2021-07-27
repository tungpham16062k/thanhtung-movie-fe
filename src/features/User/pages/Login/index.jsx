import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../../../../assets/scss/Form.scss';
import '../../../../assets/scss/Color.scss';
import '../../../../assets/scss/Button.scss';
import './Login.scss';
import { moveLable } from '../../../../assets/js/moveLable.js';
import userApi from '../../../../api/userApi';
import { updateCurrentUser } from '../../../../actions/user';

Login.propTypes = {};

function Login() {
    const [userInput, setUserInput] = useState({ email: '', password: '' });
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
            const response = await userApi.login(userInput);
            const { token, userName, favorites, email, role } = response;
            console.log(response);
            localStorage.setItem('token', token);
            const action = updateCurrentUser({ userName, favorites, email, role });
            dispatch(action);
            history.push('/');
        } catch (error) {
            setErrorMessage(error.response.data.message);
            console.log(error.response.data.message);
        }
    }
    return (
        <section className="content">
            <section className="login">
                <div className="container">
                    <h2 className="login__heading">Đăng nhập</h2>
                    <form className="form login__form" onSubmit={(e) => onSubmitForm(e)}>
                        {errorMessage && (
                            <p className="form__message color-danger">{errorMessage}</p>
                        )}
                        <div className="form__group">
                            <input type='email' name='email' className="form__control" id='email' onChange={(e) => onChangeHandle(e)} />
                            <label className="form__label" htmlFor='email'>Email</label>
                        </div>
                        <div className="form__group">
                            <input type='password' name='password' className="form__control" id='password' onChange={(e) => onChangeHandle(e)} />
                            <label className="form__label" htmlFor='password'>Password</label>
                        </div>
                        <button type='submit' className="btn btn--primary form__submit-btn">Đăng nhập</button>
                        <p className="form__footer">
                            <Link to="/sign-up">Đăng ký</Link>
                            {/* &nbsp;·&nbsp;&nbsp; */}
                            {/* <a href="# ">Quên mật khẩu</a> */}
                        </p>
                    </form>
                </div>
            </section>
        </section>
    );
}

export default Login;