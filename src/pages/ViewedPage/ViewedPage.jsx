import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ViewedPage.scss';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import ReactPagination from '../../components/Pagination/Pagination';
import { clearViewedMovies } from '../../store/actions/actions';

const ViewedPage = () => {
    const dispatch = useDispatch();

    const props = useSelector((state) => ({
        viewed: state.viewedMovies.viewed,
        loading: state.appReducer.loading
    }));

    const [activePage, setPage] = useState(1);
    const [startIndex, setIndex] = useState(0);

    const changePage = (activePage) => {
        setPage(activePage)
        setIndex((activePage - 1) * 20)
    };

    const getViewed = () => {       
        return props.viewed.slice(startIndex, startIndex + 20);
    };

    const clearViewed = () => {
        dispatch(clearViewedMovies())
    };

    const renderViewedList = () => {
        const viewed = getViewed();
        if (viewed.length) {
            return (
                <MoviesList movies={viewed} />
            );
        }
    };  

    if (!props.viewed.length) {
        return <p 
                className='viewed-page__notice'
            >
                Тут появится список просмотренных фильмов
            </p>
    }

    return (
        <div className='viewed-page'>
            {props.viewed && (
                <button
                    className='viewed-page__button-clear'
                    onClick={clearViewed}
                >
                    Очистить список
                </button>
            )}
            <div className='viewed-page__container'>
                {renderViewedList()}
            </div>
            {props.viewed.length >= 20 && (
                    <ReactPagination 
                        page={activePage}
                        func={changePage}
                        total={props.viewed.length}
                    />
            )}
        </div>
    );
}

export default ViewedPage;
