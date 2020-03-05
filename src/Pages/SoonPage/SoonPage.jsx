import React from 'react';
import PropTypes from 'prop-types';

import './SoonPage.scss';

class SoonPage extends React.Component {
    createList = movies => {
        const path =
            'https://image.tmdb.org/t/p/w500';
        return (
            <ul className='soon-page__list'>
                {movies.map(item => (
                    <li
                        className='soon-page__item'
                        key={item.id}
                    >
                        <img
                            className='soon-page__image'
                            src={`${path}${item.poster_path}`}
                            alt='баннер'
                        />
                        <h1 className='soon-page__movie-title'>
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
            <div className='soon-page'>
                <h1 className='soon-page__title'>
                    Скоро в кинотеатрах
                </h1>
                <div className='soon-page__container'>
                    {movies.length > 0 &&
                        this.createList(
                            movies[0].results
                        )}
                </div>
            </div>
        );
    }
}

export default SoonPage;

SoonPage.propTypes = {
    title: PropTypes.string,
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            dates: PropTypes.object,
            page: PropTypes.number,
            total_results: PropTypes.number,
            total_pages: PropTypes.number,
            results: PropTypes.arrayOf
        })
    )
};
