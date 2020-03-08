import React from 'react';
import PropTypes from 'prop-types';

import { CreateList } from '../CreateList/CreateList';
import { sawArray } from '../../utils/sawArray';

import './PreviewWidget.scss';

export const PreviewWidget = props => {   
    const renderList = () => {
        const movies = sawArray(props.movies, 0, 6);
        if(movies.length) {
            return (
                <CreateList movies={movies} namePage={'preview-widget'} />
            )
        }
        return null;
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
