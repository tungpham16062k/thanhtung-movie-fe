import React from 'react';
import { Link } from 'react-router-dom';
import './Paging.scss';
import PropTypes from 'prop-types';

Paging.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
};

Paging.defaultProps = {
    onPageChange: null,
};

const PagiantionLowTotalPages = (props) => {
    const { page, totalPages } = props;
    const list = [];
    if (totalPages <= 5) {
        for (let indexRender = 1; indexRender <= totalPages; indexRender++) {
            if (indexRender === page) {
                list.push(<li className="paging__item" key={indexRender}>
                    <Link to={`/movie/page/${indexRender}`} className="paging__link paging__link--active">{page}</Link>
                </li>)
            } else {
                list.push(<li className="paging__item" key={indexRender}>
                    <Link to={`/movie/page/${indexRender}`} className="paging__link">{indexRender}</Link>
                </li>)
            }
        }
    } else {
        for (let indexRender = 1; indexRender <= 4; indexRender++) {
            if (indexRender === page) {
                list.push(<li className="paging__item" key={indexRender}>
                    <Link to={`/movie/page/${indexRender}`} className="paging__link paging__link--active">{page}</Link>
                </li>)
            } else {
                list.push(<li className="paging__item" key={indexRender}>
                    <Link to={`/movie/page/${indexRender}`} className="paging__link">{indexRender}</Link>
                </li>)
            }
        }
    }


    return (
        <>
            {list.map((item) => {
                return item
            })}
        </>
    )
}

const PagiantionHighTotalPages = (props) => {
    const { page, totalPages } = props;
    const checkMiddleIndex = page + 3;
    const startIndexRender = totalPages - 3;
    console.log(checkMiddleIndex, totalPages);
    const list = [];

    for (let indexRender = startIndexRender; indexRender <= totalPages; indexRender++) {
        if (indexRender === page) {
            list.push(<li className="paging__item" key={indexRender}>
                <Link to={`/movie/page/${indexRender}`} className="paging__link paging__link--active">{page}</Link>
            </li>)
        } else {
            list.push(<li className="paging__item" key={indexRender}>
                <Link to={`/movie/page/${indexRender}`} className="paging__link">{indexRender}</Link>
            </li>)
        }
    }

    return (
        <>
            {(checkMiddleIndex > totalPages) ? (
                <ul className="paging__list">
                    <li className="paging__item">
                        <Link to={`/movie/page/1`} className="paging__link">1</Link>
                    </li>
                    <li className="paging__item paging__item--ellipsis">
                        <span className="paging__ellipsis">...</span>
                    </li>
                    {list.map((item) => {
                        return item
                    })}
                </ul>
            ) : (
                <ul className="paging__list">
                    <li className="paging__item" >
                        <Link to={`/movie/page/1`} className="paging__link">1</Link>
                    </li>
                    <li className="paging__item paging__item--ellipsis">
                        <span className="paging__ellipsis">...</span>
                    </li>
                    <li className="paging__item">
                        <Link to={`/movie/page/${page - 1}`} className="paging__link">{page - 1}</Link>
                    </li>
                    <li className="paging__item">
                        <Link to={`/movie/page/${page}`} className="paging__link paging__link--active">{page}</Link>
                    </li>
                    <li className="paging__item">
                        <Link to={`/movie/page/${page + 1}`} className="paging__link">{page + 1}</Link>
                    </li>
                    <li className="paging__item paging__item--ellipsis">
                        <span className="paging__ellipsis">...</span>
                    </li>
                    <li className="paging__item">
                        <Link to={`/movie/page/${totalPages}`} className="paging__link">{totalPages}</Link>
                    </li>
                </ul>)
            }
        </>

    )
}


function Paging(props) {
    const { pagination } = props;
    const { page, limit, totalRows } = pagination;
    const totalPages = Math.ceil(totalRows / limit);

    return (
        <section id="paging">
            <div className="container">
                <div className="paging__content">
                    {((page <= 4 || page === 5) && totalPages <= 5) && (
                        <ul className="paging__list">
                            <PagiantionLowTotalPages page={page} totalPages={totalPages} />
                        </ul>
                    )}
                    {(page < 4 && totalPages > 5) && (
                        <ul className="paging__list">
                            <PagiantionLowTotalPages page={page} totalPages={totalPages} />
                            <li className="paging__item paging__item--ellipsis">
                                <span className="paging__ellipsis">...</span>
                            </li>
                            <li className="paging__item">
                                <Link to={`/movie/page/${totalPages}`} className="paging__link">{totalPages}</Link>
                            </li>
                        </ul>
                    )}
                    {(page >= 4 && totalPages > 5) && (
                        <ul className="paging__list">
                            <PagiantionHighTotalPages page={page} totalPages={totalPages} />
                        </ul>
                    )}


                    <ul className="paging__list paging__buttons">
                        {page > 1 ? (<li className="paging__item">
                            <Link to={`/movie/page/${page - 1}`} className="paging__link">Trang trước</Link>
                        </li>) : (<></>)}
                        {page < totalPages ? (<li className="paging__item">
                            <Link to={`/movie/page/${page + 1}`} className="paging__link">Trang sau</Link>
                        </li>) : (<></>)}

                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Paging;