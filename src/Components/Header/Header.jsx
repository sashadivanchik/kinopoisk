import React from 'react';
import { Navigation } from '../Navigation/Navigation';

import './Header.scss';
import { EnterRegistration } from '../EnterRegistration/EnterRegistration';

class Header extends React.Component {
    render() {
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
}

export default Header;
