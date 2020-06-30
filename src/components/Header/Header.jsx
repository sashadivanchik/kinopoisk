import React from 'react';

import './Header.scss';
import { Navigation } from '../Navigation/Navigation';
import { EnterRegistration } from '../EnterRegistration/EnterRegistration';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__container'>
                <h1 className='header__title'>
                    Кинопоиск
                </h1>
                <EnterRegistration />
            </div>
            <Navigation />
        </div>
    );
}

export default Header;
