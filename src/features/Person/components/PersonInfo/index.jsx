import React from 'react';
import { Link } from 'react-router-dom';
import './PersonInfo.scss';

const PersonInfo = (props) => {
    const { data } = props;
    const { person, movie } = data;
    return (
        <section className="person">
            <div className="container">
                <div className="person__content">
                    <div className="person__info">
                        <div className="person__avatar">
                            <img src={person.avatar} alt="" />
                        </div>
                        <div className="person__detail">
                            <p>Thông tin cá nhân</p>
                            <dl>
                                {/* <dt>Nghề nghiệp</dt>
                                <dd>Diễn viên</dd> */}
                                <dt>Giới tính</dt>
                                <dd>{person.gender}</dd>
                                <dt>Ngày sinh</dt>
                                <dd>{person.birthday}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="person__main">
                        <h1 className="person__name">{person.name}</h1>
                        <div className="person__item">
                            <h3 className="person__heading">Tiểu sử</h3>
                            <p className="person__desc">{person.description}</p>
                        </div>
                        <div className="person__item">
                            <h3 className="person__heading">Các phim đã tham gia</h3>
                            <div className="row">
                                {movie && movie.map((item, key) => (
                                    <div className="col l-3 m-4 c-6" key={key}>
                                        <div className="person__film">
                                            <Link to={`/movie/${item.slug}`} className="person__poster">
                                                <img src={item.poster} alt={item.name} title={item.viName} />
                                            </Link>
                                            <Link to={`/movie/${item.slug}`}>
                                                <p>{item.name}</p>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PersonInfo;