import React from '../../pages/MainPage/node_modules/react';
import PropTypes from 'prop-types';

import './Error.scss';

export const Error = ({text}) => {
    return (
        <p className={'title'} >{text}</p>
    );
};

Error.propTypes = {
    text: PropTypes.string,
};
