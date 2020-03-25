import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';

export const MoviesList = ({movies}) => {
    const renderList = () => {
        const path =
            'https://image.tmdb.org/t/p/w500';
        return movies.map(item => (
            <li
                className={'movies-list__item'}
                key={item.id}
            >
                <img
                    className={'movies-list__image'}
                    src={
                        item.src ||
                        `${path}${item.poster_path}`
                    }
                    alt='баннер'
                />
                <h1 className={'movies-list__title'}>
                    {item.title}
                </h1>
            </li>
        ))
    }
    return (
        <ul className={'movies-list'}>
                {renderList(movies)}
        </ul>
    )
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            page: PropTypes.number,
            total_results: PropTypes.number,
            total_pages: PropTypes.number,
            results: PropTypes.arrayOf
        })
    ),
    namePage: PropTypes.string
}