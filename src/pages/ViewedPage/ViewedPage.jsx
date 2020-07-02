import React from 'react';
import {useSelector} from 'react-redux';

import './ViewedPage.scss';
import { MoviesList } from '../../components/MoviesList/MoviesList';

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
    };

    if (!movies.viewed.length) {
        return <p 
                className='viewed-page__notice'
            >
                Тут появится список просмотренных фильмов
            </p>
    }

    return (
        <div className='viewed-page'>
            <h1 className='viewed-page__title'>
                Просмотренные
            </h1>
            <div className='viewed-page__container'>
                {renderViewedList()}
            </div>
        </div>
    );
}

export default ViewedPage;
