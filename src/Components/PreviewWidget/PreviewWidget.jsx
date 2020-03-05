import React from 'react';
import PropTypes from 'prop-types';

import './PreviewWidget.scss';

export const PreviewWidget = props => {
    const path =
        'https://image.tmdb.org/t/p/w500';
    const movies = props.movies.slice(0, 6);
    return (
        <div className='preview-widget'>
            <h1 className='preview-widget__title'>
                {props.title}
            </h1>
            <div className='preview-widget__container'>
                <ul className='preview-widget__list'>
                    {movies.map(item => (
                        <li
                            className='preview-widget__item'
                            key={item.id}
                        >
                            <img
                                className='preview-widget__image'
                                src={
                                    item.src ||
                                    `${path}${item.poster_path}`
                                }
                                alt='баннер'
                            />
                            <h1 className='preview-widget__movie-title'>
                                {item.title}
                            </h1>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

PreviewWidget.propTypes = {
    title: PropTypes.string,
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string
        })
    )
};
