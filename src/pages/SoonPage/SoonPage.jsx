import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './SoonPage.scss';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Error } from '../../components/Errors/Erorr';
import { fetchMovies } from '../../store/actions/actions';
import { UPCOMING_MOVIES_URL } from '../../api/constants';
import { FETCH_UPCOMING_MOVIES } from '../../store/types/constants';
import Loader from '../../components/Loader/Loader';
import ReactPagination from '../../components/Pagination/Pagination';

const SoonPage = () => {
    const dispatch = useDispatch();

    const props = useSelector((state) => ({
        upcoming: state.upcomingMovies.upcomingList,
        total: state.upcomingMovies.totalResults,
        loading: state.appReducer.loading
    }));

    const [activePage, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchMovies(UPCOMING_MOVIES_URL, FETCH_UPCOMING_MOVIES, activePage))
    }, [dispatch, activePage])

    const changePage = (activePage) => {
        setPage(activePage)
    };

    const renderSoonList = () => {
        if (props.upcoming.length) {
            return (
                <MoviesList movies={props.upcoming} />
            );
        }
        return <Error text='Массив фильмов пуст' />;
    };

    if(props.loading) {
        return <Loader />
    }

    return (
        <div className='soon-page'>
            <div className='soon-page__container'>
                {renderSoonList()}
            </div>
            <ReactPagination 
                page={activePage}
                func={changePage}
                total={props.total}
            />
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
