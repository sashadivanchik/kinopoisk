import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './PopularPage.scss';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Error } from '../../components/Errors/Erorr';
import { fetchMovies } from '../../store/actions/actions';
import { POPULAR_MOVIES_URL } from '../../api/constants';
import { FETCH_POPULAR_MOVIES } from '../../store/types/constants';

const PopularPage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => ({
        popular: state.popularMovies.popularList,
    }))

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchMovies(POPULAR_MOVIES_URL, FETCH_POPULAR_MOVIES, page))
    }, [dispatch])

    const renderPopularList = () => {
        if (movies.popular.length) {
            return (
                <MoviesList movies={movies.popular} />
            );
        }
        return <Error text='Массив фильмов пуст' />;
    };

    return (
        <div className='popular-page'>
            <h1 className='popular-page__title'>
                Популярное
            </h1>
            <div className='popular-page__container'>
                {renderPopularList()}
            </div>
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
