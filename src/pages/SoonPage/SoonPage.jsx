import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './SoonPage.scss';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Error } from '../../components/Errors/Erorr';
import {fetchMovies} from '../../store/actions/actions';
import { UPCOMING_MOVIES_URL } from '../../api/constants';
import { FETCH_UPCOMING_MOVIES } from '../../store/types/constants';
import Loader from '../../components/Loader/Loader';

const SoonPage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => ({
        upcoming: state.upcomingMovies.upcomingList,
    }));

    const app = useSelector((state) => ({
        loading: state.appReducer.loading
    }));

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchMovies(UPCOMING_MOVIES_URL, FETCH_UPCOMING_MOVIES, page))
    }, [dispatch])

    const renderSoonList = () => {
        if (movies.upcoming.length) {
            return (
                <MoviesList movies={movies.upcoming} />
            );
        }
        return <Error text='Массив фильмов пуст' />;
    };

    if(app.loading) {
        return <Loader />
    }

    return (
        <div className='soon-page'>
            <h1 className='soon-page__title'>
                Скоро в кинотеатрах
            </h1>
            <div className='soon-page__container'>
                {renderSoonList()}
            </div>
        </div>
    );
}

export default SoonPage;

// SoonPage.propTypes = {
//     title: PropTypes.string,
//     movies: PropTypes.arrayOf(
//         PropTypes.shape({
//             dates: PropTypes.object,
//             page: PropTypes.number,
//             total_results: PropTypes.number,
//             total_pages: PropTypes.number,
//             results: PropTypes.arrayOf
//         })
//     )
// };
