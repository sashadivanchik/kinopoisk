import React from 'react';
import PropTypes from 'prop-types';

export const CreateList = ({movies, namePage}) => {
    const path =
            'https://image.tmdb.org/t/p/w500';
    return (
        <ul className={`${namePage}__list`}>
                {movies.map(item => (
                    <li
                        className={`${namePage}__item`}
                        key={item.id}
                    >
                        <img
                            className={`${namePage}__image`}
                            src={
                                item.src ||
                                `${path}${item.poster_path}`
                            }
                            alt='баннер'
                        />
                        <h1 className={`${namePage}__movie-title`}>
                            {item.title}
                        </h1>
                    </li>
                ))}
            </ul>
    )
};

CreateList.propTypes = {
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