import React from 'react';
import PropTypes from 'prop-types';

import './PreviewWidget.scss';
import { CreateList } from '../CreateList/CreateList';

export const PreviewWidget = props => {
    const movies = props.movies.slice(0, 6);
    return (
        <div className='preview-widget'>
            <h1 className='preview-widget__title'>
                {props.title}
            </h1>
            <div className='preview-widget__container'>
                {movies.length > 0 && <CreateList movies={movies} namePage={'preview-widget'} />}
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
