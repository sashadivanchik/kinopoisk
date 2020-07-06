import React from 'react';
import { useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { addInViewed } from '../../store/actions/actions';
import { PAGE_MOVIE } from '../../constants/routers/routers';

export const MoviesList = ({movies}) => {
    const dispatch = useDispatch();
    const addViewed = (id) => {
        const viewedMovie = movies.find(item => item.id === id)
        dispatch(addInViewed(viewedMovie))
    }
    const renderList = () => {
        return movies.map(item => (
            <NavLink
                className={'movies-list__link'} 
                to={`${PAGE_MOVIE}${item.id}`}
                key={item.id}>
                <li
                    className={'movies-list__item'}
                    key={item.id}
                    onClick={() => addViewed(item.id)}
                >
                    <img
                        className={'movies-list__image'}
                        src={ 
                            item.posterPath
                        }
                        alt='баннер'
                    />
                    <h1 className={'movies-list__title'}>
                        {item.title}
                    </h1>
                </li>
            </NavLink>
        ))
    }
    return (
        <ul className={'movies-list'}>
            {renderList(movies)}
        </ul>
    )
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            page: PropTypes.number,
            total_results: PropTypes.number,
            total_pages: PropTypes.number,
            results: PropTypes.arrayOf
        })
    ),
    namePage: PropTypes.string
}