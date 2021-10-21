import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import './HeaderScript';
import LogoFull from '../../assets/images/logo-full.png';
import LogoShort from '../../assets/images/logo-short.png';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCurrentUser, updateCurrentUser } from '../../actions/user';
import userApi from '../../api/userApi';

function Header() {
    const user = useSelector(state => state.user);
    const countFavorites = user.favorites.length || 0;
    const dispatch = useDispatch();
    const handleLogout = () => {
        const action = deleteCurrentUser();
        dispatch(action);
        localStorage.setItem('token', null);
    }
    const checkCurrentUser = useCallback(async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await userApi.getCurrent(token);
            const userResponse = response.user;
            if (userResponse) {
                const { userName, favorites, email, role } = userResponse;
                const action = updateCurrentUser({ userName, favorites, email, role });
                dispatch(action);
            };
        } catch (error) {
            console.log(error);
        }
    }, [dispatch]);
    useEffect(() => {
        checkCurrentUser();
    }, [checkCurrentUser])
    return (
        <nav className="navbar navbar--transparent">
            <div className="navbar__brand">
                <Link to="/">
                    <img src={LogoFull} alt="xemphim" className="logo-full" />
                    <img src={LogoShort} alt="xemphim" className="logo-short" />
                </Link>
            </div>
            <div className="navbar__menu">
                <ul className="navbar__list">
                    {/* <li className="navbar__item">
                        <a href="# " className="navbar__link">Phim Lẻ</a>
                    </li>
                    <li className="navbar__item">
                        <a href="# " className="navbar__link">Phim bộ</a>
                    </li> */}
                    <li className="navbar__item">
                        <Link to="/favorites" className="navbar__link">Yêu thích</Link>
                    </li>
                    <li className="navbar__item navbar__item--search">
                        <Link to="/search" className="navbar__link">
                            <i className="ti-search" />
                            Tìm kiếm
                        </Link>
                    </li>
                </ul>
                <ul className="navbar__list navbar__right">

                    {user.userName ? (<li className="navbar__item navbar__item--fullname dropdown">
                        <a href="# " className="navbar__link ">
                            <span className="fullname">{user.userName}</span>
                            <i className="ti-angle-down" />
                        </a>
                        <ul className="dropdown__menu">
                            <li className="dropdown__item">
                                <Link to="/profile" className=" dropdown__link">
                                    <i className="ti-user dropdown__icon" />
                                    Profile
                                </Link>
                            </li>
                            <li className="dropdown__item">
                                <Link to="/favorites" className=" dropdown__link">
                                    <i className="ti-heart dropdown__icon" />
                                    Yêu thích ({countFavorites})
                                </Link>
                            </li>
                            <li className="dropdown__item" onClick={() => handleLogout()}>
                                <a className="dropdown__link" href="# ">
                                    <svg className="dropdown__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z">
                                        </path>
                                    </svg>
                                    Thoát
                                </a>
                            </li>
                        </ul>
                    </li>) : (<li className="navbar__item navbar__item--login">
                        <Link to="/login" className="navbar__link">Đăng nhập</Link>
                    </li>)}


                </ul>
            </div>
        </nav>
    );
}

export default Header;