import React from 'react';
import PropTypes from 'prop-types';

import './PopularPage.scss';
class PopularPage extends React.Component {
    createList = movies => {
        const path =
            'https://image.tmdb.org/t/p/w500';
        return (
            <ul className='popular-page__list'>
                {movies.map(item => (
                    <li
                        className='popular-page__item'
                        key={item.id}
                    >
                        <img
                            className='popular-page__image'
                            src={`${path}${item.poster_path}`}
                            alt='баннер'
                        />
                        <h1 className='popular-page__movie-title'>
                            {item.title}
                        </h1>
                    </li>
                ))}
            </ul>
        );
    };

    render() {
        const { movies } = this.props;
        return (
            <div className='popular-page'>
                <h1 className='popular-page__title'>
                    Популярное
                </h1>
                <div className='popular-page__container'>
                    {movies.length > 0 &&
                        this.createList(
                            movies[0].results
                        )}
                </div>
            </div>
        );
    }
}

export default PopularPage;

PopularPage.propTypes = {
    title: PropTypes.string,
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            page: PropTypes.number,
            total_results: PropTypes.number,
            total_pages: PropTypes.number,
            results: PropTypes.arrayOf
        })
    )
};
