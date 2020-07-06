import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

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
    const movies = useSelector((state) => ({
        popular: state.popularMovies.popularList,
        total: state.popularMovies.totalResults
    }))

    const app = useSelector((state) => ({
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
        if (movies.popular.length) {
            return (
                <MoviesList movies={movies.popular} />
            );
        }
        return <Error text='Массив фильмов пуст' />;
    };

    if (app.loading) {
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
                total={movies.total}
            />
        </div>
    );
}

export default PopularPage;

// PopularPage.propTypes = {
//     title: PropTypes.string,
//     movies: PropTypes.arrayOf(
//         PropTypes.shape({
//             page: PropTypes.number,
//             total_results: PropTypes.number,
//             total_pages: PropTypes.number,
//             results: PropTypes.arrayOf
//         })
//     )
// };
