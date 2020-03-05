import React from 'react';
import PropTypes from 'prop-types';

import './PreviewWidget.scss';

export const PreviewWidget = props => {
    return (
        <div className='preview-widget'>
            <h1 className='preview-widget__title'>
                {props.title}
            </h1>
            <div className='preview-widget__container'>
                <ul className='preview-widget__list'>
                    {props.movies.map(
                        (item, index) => (
                            <li
                                className='preview-widget__item'
                                key={index}
                            >
                                <img
                                    className='preview-widget__image'
                                    src={item.src}
                                    alt='баннер'
                                />
                            </li>
                        )
                    )}
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
