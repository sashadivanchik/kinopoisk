import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import './ViewedPage.scss';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import ReactPagination from '../../components/Pagination/Pagination';

const ViewedPage = () => {
    const movies = useSelector((state) => ({
        viewed: state.viewedMovies.viewed
    }));

    const [activePage, setPage] = useState(1);
    const [startIndex, setIndex] = useState(0);

    const changePage = (activePage) => {
        setPage(activePage)
        setIndex((activePage - 1) * 20)
    };

    const getViewed = () => {       
        return movies.viewed.slice(startIndex, startIndex + 20);
    };

    const renderViewedList = () => {
        const viewed = getViewed();
        if (viewed.length) {
            return (
                <MoviesList movies={viewed} />
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
            {movies.viewed.length >= 20 && (
                    <ReactPagination 
                        page={activePage}
                        func={changePage}
                        total={movies.viewed.length}
                    />
            )}
        </div>
    );
}

export default ViewedPage;
