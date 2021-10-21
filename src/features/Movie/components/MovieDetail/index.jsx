import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../../../../assets/scss/Button.scss';
import './MovieDetail.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from '../../../../components/Modal/ModalVideo';

const settingSlickActor = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
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

const settingSlickTrailer = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 739,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
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
    const { movie } = props;
    const slider = React.createRef();
    const sliderTrailer = React.createRef();
    const [videoId, setVideoId] = useState('');


    useEffect(() => {
        const bodyTag = document.body;
        if (videoId) {
            if (!bodyTag.classList.contains('modal-open')) {
                bodyTag.classList.add('modal-open');
            }
        } else {
            if (bodyTag.classList.contains('modal-open')) {
                bodyTag.classList.remove('modal-open');
            }
        }
    }, [videoId]);

    const handleShowVideo = (item) => {
        setVideoId(item)
    }

    const sliderPrevious = () => {
        slider.current.slickPrev();
    }
    const sliderNext = () => {
        slider.current.slickNext();
    }
    const sliderTrailerPrevious = () => {
        sliderTrailer.current.slickPrev();
    }
    const sliderTrailerNext = () => {
        sliderTrailer.current.slickNext();
    }
    return (
        <div className="detail">
            <div className="backdrop" style={{ backgroundImage: `url(${movie.backdrop})` }} />
            <div className="container detail__content">
                <div className="row">
                    <div className="col l-3 m-12 c-12">
                        <img className="detail__image" src={movie.poster} alt={movie.name} title={movie.viName} />
                        <Link to={`/watch/${movie.slug}`} className="detail__play btn btn--large btn--play">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                            <span>Xem phim</span>
                        </Link>
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
                                {/* <a href="# " className="btn btn--success">
                                    <i className="ti-plus" />
                                    <span>Bộ sưu tập</span>
                                </a> */}
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
                                <i className="ti-angle-left" onClick={() => sliderPrevious()} />
                                <i className="ti-angle-right" onClick={() => sliderNext()} />
                            </div>
                        </h5>
                        <Slider ref={slider} {...settingSlickActor} className="detail__cast">
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
                        <h5 className="detail__section-heading">
                            TRAILER
                            <div className="detail__scroll-btn">
                                <i className="ti-angle-left" onClick={() => sliderTrailerPrevious()} />
                                <i className="ti-angle-right" onClick={() => sliderTrailerNext()} />
                            </div>
                        </h5>
                        <Slider ref={sliderTrailer} {...settingSlickTrailer} className="detail__trailer">
                            {movie.trailer && movie.trailer.map((item, key) => (
                                <div className="detail__trailer-item" key={key}>
                                    <div className="detail__trailer-img" onClick={() => handleShowVideo(item)}>
                                        <img src={`https://img.youtube.com/vi/${item}/maxresdefault.jpg`} alt="" />
                                        <div className="detail__trailer-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            {videoId && (<ModalVideo videoId={videoId} setVideoId={setVideoId} />)}
        </div >
    );
}

export default MovieDetail;