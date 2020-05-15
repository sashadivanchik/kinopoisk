import React from 'react';
import { Navigation } from '../Navigation/Navigation';

import './Header.scss';
import { Enter } from '../Enter/Enter';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='header__container'>
                    <h1 className='header__title'>
                        Кинопоиск
                    </h1>
                    <Enter />
                </div>
                <Navigation />
            </div>
        );
    }
}

export default Header;
