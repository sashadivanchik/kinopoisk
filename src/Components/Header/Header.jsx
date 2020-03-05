import React from 'react';
import { Navigation } from '../Navigation/Navigation';

import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <h1 className='header__title'>
                    Кинопоиск
                </h1>
                <Navigation />
            </div>
        );
    }
}

export default Header;
