import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';
import '../../../../assets/scss/Button.scss';
import './MovieDetail.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { updateFavorites } from '../../../../actions/user';
import userApi from '../../../../api/userApi';
import DotsSpinner from '../../../../components/Spinner/DotsSpinner';

const settingSlick = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    className: 'detail__cast',
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 739,
            settings: {
                slidesToShow: 3,
            }
        },
    ]
};

function getFormattedDate(time) {
    const date = new Date(time);
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return day + '/' + month + '/' + year;
}


const MovieDetail = (props) => {
    const { movie, isFav } = props;
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const history = useHistory();
    const slider = React.createRef();

    const handleFavMovie = async (e) => {
        e.preventDefault();
        if (!token || token === 'null') {
            history.push('/login');
        } else {
            try {
                setLoading(true);
                const response = await userApi.addFav(token, movie._id);
                const { favorites } = response;
                const action = updateFavorites(favorites);
                dispatch(action);
                setLoading(false);
                e.onBlur();
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleUnFavMovie = async (e) => {
        e.preventDefault();
        if (!token || token === 'null') {
            history.push('/login');
        } else {
            try {
                setLoading(true);
                const response = await userApi.removeFav(token, movie._id);
                const { favorites } = response;
                const action = updateFavorites(favorites);
                dispatch(action);
                setLoading(false);
                e.onBlur();
            } catch (error) {
                console.log(error);
            }

        }
    };

    const sliderPrevious = () => {
        slider.current.slickPrev();
    }
    const sliderNext = () => {
        slider.current.slickNext();
    }
    return (
        <div className="detail">
            <div className="backdrop" style={{ backgroundImage: `url(${movie.backdrop})` }} />
            <div className="container detail__content">
                <div className="row">
                    <div className="col l-3 m-12 c-12">
                        <img className="detail__image" src={movie.poster} alt={movie.name} title={movie.viName} />
                        {isFav ? (
                            <a href="# " role="button" className="detail__play btn btn--large btn--fav btn--fav-active" onClick={(e) => handleUnFavMovie(e)}>
                                {loading ? (<DotsSpinner />) : (
                                    <>
                                        <i className="fas fa-heart"></i>
                                        <span>Đã yêu thích</span>
                                    </>
                                )}
                            </a>) : (<a href="# " className="detail__play btn btn--large btn--fav" onClick={(e) => handleFavMovie(e)}>
                                {loading ? (<DotsSpinner color="#dd003f" />) : (
                                    <>
                                        <i className="far fa-heart"></i>
                                        <span>Yêu thích</span>
                                    </>
                                )}
                            </a>)}
                    </div>
                    <div className="col l-8 m-12 c-12 l-o-1 detail__info">
                        <h1 className="detail__title">
                            {movie.name}
                        </h1>
                        <h4 className="detail__sub-title">
                            {movie.viName}
                        </h4>
                        <p className="detail__time">{movie.time}</p>
                        <div className="detail__rate">
                            <span className="imdb-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                    <path d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z" fill="#ffc107" />
                                    <path d="M28.102 18h-3.704v13.102h3.704c2 0 2.796-.403 3.296-.704.602-.398.903-1.097.903-1.796v-7.903c0-.898-.403-1.699-.903-2-.796-.5-1.097-.699-3.296-.699zm.699 10.3c0 .598-.7.598-1.301.598V20c.602 0 1.3 0 1.3.602zM33.8 18v13.3h2.802s.199-.902.398-.698c.398 0 1.5.597 2.2.597.698 0 1.1 0 1.5-.199.6-.398.698-.7.698-1.3v-7.802c0-1.097-1.097-1.796-2-1.796-.898 0-1.796.597-2.199.898v-3zm3.598 4.2c0-.4 0-.598.403-.598.199 0 .398.199.398.597v6.602c0 .398 0 .597-.398.597-.2 0-.403-.199-.403-.597zM22.7 31.3V18h-4.4l-.8 6.3-1.102-6.3h-4v13.3h2.903v-7.402l1.3 7.403h2l1.297-7.403v7.403zM7.602 18h3.097v13.3H7.602z" fill="#263238" />
                                </svg>
                            </span>
                            <span className="detail__rate-value">6.3</span>
                        </div>
                        <div className="detail__social">
                            <div className="detail__share">
                                <a href="# " className="btn btn--primary">
                                    <i className="ti-facebook" />
                                    <span>Chia sẻ</span>
                                </a>
                                <a href="# " className="btn btn--success">
                                    <i className="ti-plus" />
                                    <span>Bộ sưu tập</span>
                                </a>
                            </div>
                            <ul className="detail__genre-list">
                                {movie.category && movie.category.map((item, key) => (
                                    <li className="detail__genre-item" key={key}>{item.name}</li>
                                ))}
                            </ul>
                        </div>
                        <dl className="detail__director">
                            <dt>ĐẠO DIỄN</dt>
                            <dd>
                                {movie.director.map((item, key) => (
                                    <span key={key} >
                                        <Link to={`/person/${item.slug}`} className="detail__director-link">
                                            {item.name}
                                        </Link>
                                        {key === movie.director.length - 1 ? (<span></span>) : <span>, </span>}
                                    </span>
                                ))}
                            </dd>
                            {/* <dt>QUỐC GIA</dt>
                            <dd><a href="# ">Mỹ</a></dd> */}
                            <dt>KHỞI CHIẾU</dt>
                            <dd><a href="# ">{getFormattedDate(movie.releaseAt)}</a></dd>
                        </dl>
                        <div className="clear" />
                        <div className="detail__desc">
                            {movie.description && movie.description.map((item, key) => (
                                <li className="detail__desc-item" key={key}>{item}</li>
                            ))}
                        </div>
                        <h5 className="detail__section-heading">
                            DIỄN VIÊN
                            <div className="detail__scroll-btn">
                                <i className="ti-angle-left prev" onClick={() => sliderPrevious()} />
                                <i className="ti-angle-right next" onClick={() => sliderNext()} />
                            </div>
                        </h5>
                        <Slider ref={slider} {...settingSlick} className="detail__cast">
                            {movie.cast && movie.cast.map((item) => (
                                <div className="detail__actor" key={item._id}>
                                    <Link to={`/person/${item.actor.slug}`}>
                                        <div className="detail__actor-img" style={{ backgroundImage: `url(${item.actor.avatar})` }}>
                                        </div>

                                    </Link>
                                    <h5 className="detail__actor-name">
                                        <Link to={`/person/${item.actor.slug}`}>{item.actor.name}</Link>
                                    </h5>
                                    <p className="detail__actor-character">
                                        {item.character}
                                    </p>
                                </div>
                            ))}


                        </Slider>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MovieDetail;