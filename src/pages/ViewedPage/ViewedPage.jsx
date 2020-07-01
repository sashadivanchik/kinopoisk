import React from 'react';
import {useSelector} from 'react-redux';

import './ViewedPage.scss';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Error } from '../../components/Errors/Erorr';

const ViewedPage = () => {
    const movies = useSelector((state) => ({
        viewed: state.viewedMovies.viewed
    }))

    const renderViewedList = () => {
        if (movies.viewed.length) {
            return (
                <MoviesList movies={movies.viewed} />
            );
        }
        return <Error text='Массив фильмов пуст' />;
    };

    return (
        <div className='viewed-page'>
            <h1 className='viewed-page__title'>
                Просмотренные
            </h1>
            <div className='soon-page__container'>
                {renderViewedList()}
            </div>
        </div>
    );
}

export default ViewedPage;
