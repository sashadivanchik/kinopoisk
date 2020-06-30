import React from 'react';
import PropTypes from 'prop-types';

import { MoviesList } from '../MoviesList/MoviesList';

import './PreviewWidget.scss';

export const PreviewWidget = props => {   
    const sliceArray = (start, end) => {
        const { movies } = props;
        return movies.slice(start, end);
    };

    const renderList = () => {
        const movies = sliceArray(0, 6);
        return (
            <MoviesList movies={movies} />
        )
    };

    return (
        <div className='preview-widget'>
            <h1 className='preview-widget__title'>
                {props.title}
            </h1>
            <div className='preview-widget__container'>
                {renderList()}
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
