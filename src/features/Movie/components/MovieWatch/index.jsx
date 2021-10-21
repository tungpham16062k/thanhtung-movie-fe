import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateFavorites } from '../../../../actions/user';
import userApi from '../../../../api/userApi';
import '../../../../assets/scss/Button.scss';
import ReactPlayer from 'react-player/youtube';
import DotsSpinner from '../../../../components/Spinner/DotsSpinner';
import './MovieWatch.scss';



const MovieWatch = (props) => {
  const { movie, isFav } = props;
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const history = useHistory();

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
      } catch (error) {
        console.log(error);
      }

    }
  };

  return (
    <div className="watch">
      <div className="watch__wrapper">
        <div className="watch__player">
          <ReactPlayer url={`https://www.youtube.com/watch?v=${movie.trailer[0]}`} width="100%" height="100%" playing={true} controls={true} />
        </div>
      </div>
      <div className="container watch__content">
        <p className="watch__notification">Phim không có tiếng / mất tiếng nhân vật / âm thanh bị rè? <a href="# ">Xem hướng dẫn</a></p>
        <h1 className="watch__title">
          {movie.name}
        </h1>
        <h4 className="watch__sub-title">
          {movie.viName}
        </h4>
        <div className="watch__desc">
          {movie.description && movie.description.map((item, key) => (
            <li className="watch__desc-item" key={key}>{item}</li>
          ))}
        </div>
        {isFav ? (
          <a href="# " className="watch__fav btn btn--large btn--fav btn--fav-active" onClick={(e) => handleUnFavMovie(e)}>
            {loading ? (<DotsSpinner />) : (
              <>
                <i className="fas fa-heart"></i>
                <span>Đã yêu thích</span>
              </>
            )}
          </a>) : (<a href="# " className="watch__fav btn btn--large btn--fav" onClick={(e) => handleFavMovie(e)}>
            {loading ? (<DotsSpinner color="#dd003f" />) : (
              <>
                <i className="far fa-heart"></i>
                <span>Yêu thích</span>
              </>
            )}
          </a>)}
      </div>
    </div>
  );
}

export default MovieWatch;