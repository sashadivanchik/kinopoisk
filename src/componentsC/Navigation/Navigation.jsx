import React from '../../pages/MainPage/node_modules/react';
import { NavLink } from 'react-router-dom';
import {
    PAGE_MAIN,
    PAGE_POPULAR,
    PAGE_SOON,
    PAGE_VIEWED
} from '../../constants/routers/routers';

import './Navigation.scss';

export const Navigation = () => {
    const links = [
        {
            page: 'Главная',
            route: PAGE_MAIN
        },
        {
            page: 'Популярное',
            route: PAGE_POPULAR
        },
        {
            page: 'Скоро в кинотеатрах',
            route: PAGE_SOON
        },
        {
            page: 'Просмотренные',
            route: PAGE_VIEWED
        }
    ];

    return (
        <nav className='navigation'>
            <ul className='navigation__list'>
                {links.map((item, index) => (
                    <li
                        className='navigation__item'
                        key={index}
                    >
                        <NavLink
                            exact={true}
                            className='navigation__link'
                            to={item.route}
                        >
                            {item.page}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
