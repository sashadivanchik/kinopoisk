import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './PopularPage.scss';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Error } from '../../components/Errors/Erorr';
import { fetchMovies } from '../../store/actions/actions';
import { POPULAR_MOVIES_URL } from '../../api/constants';
import { FETCH_POPULAR_MOVIES } from '../../store/types/constants';
import Loader from '../../components/Loader/Loader';
import ReactPagination from '../../components/Pagination/Pagination';

const PopularPage = () => {
    const dispatch = useDispatch();

    const props = useSelector((state) => ({
        popular: state.popularMovies.popularList,
        total: state.popularMovies.totalResults,
        loading: state.appReducer.loading
    }))

    const [activePage, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchMovies(POPULAR_MOVIES_URL, FETCH_POPULAR_MOVIES, activePage))
    }, [dispatch, activePage])

    const changePage = (activePage) => {
        setPage(activePage)
    };

    const renderPopularList = () => {
        if (props.popular.length) {
            return (
                <MoviesList movies={props.popular} />
            );
        }
        return <Error text='Массив фильмов пуст' />;
    };

    if (props.loading) {
        return <Loader />
    }

    return (
        <div className='popular-page'>
            <div className='popular-page__container'>
                {renderPopularList()}
            </div>
            <ReactPagination 
                page={activePage}
                func={changePage}
                total={props.total}
            />
        </div>
    );
}

export default PopularPage;
