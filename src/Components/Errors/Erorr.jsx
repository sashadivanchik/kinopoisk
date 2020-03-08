import React from 'react';
import PropTypes from 'prop-types';

import './Error.scss';

export const ListError = ({text}) => {
    return (
        <p className={'title'} >{text}</p>
    );
};

ListError.propTypes = {
    text: PropTypes.string,
};
