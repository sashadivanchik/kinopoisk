import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainPage.scss';
import { fetchPrewiev } from '../../store/actions/actions';
import { PreviewWidget } from '../../components/PreviewWidget/PreviewWidget';
import { POPULAR_MOVIES_URL, UPCOMING_MOVIES_URL } from '../../api/constants';
import { FETCH_POPULAR_PREVIEW, FETCH_UPCOMING_PREVIEW } from '../../store/types/constants';
import Loader from '../../components/Loader/Loader';

const MainPage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => ({
        popular: state.prewievMovies.popular,
        upcoming: state.prewievMovies.upcoming,
        viewed: state.viewedMovies.viewed
    }))

    const app = useSelector((state) => ({
        loading: state.appReducer.loading
    }));
    
    useEffect(() => {
        dispatch(fetchPrewiev(POPULAR_MOVIES_URL, FETCH_POPULAR_PREVIEW))
        dispatch(fetchPrewiev(UPCOMING_MOVIES_URL, FETCH_UPCOMING_PREVIEW))
    }, [dispatch]);

    const fromTheEnd = (array, value) => {
        return array.slice(value)
    };

    const renderPopularWidget = () => {
        if (movies.popular.length) {
            return (
                <PreviewWidget
                    title='Популярное'
                    movies={movies.popular} 
                />
            );
        }
        return null;
    };

    const renderUpcomingWidget = () => {
        if (movies.upcoming.length) {
            return (
                <PreviewWidget 
                    title='Скоро в кинотеартах' 
                    movies={movies.upcoming} 
                />
            );
        }
        return null;
    };

    const renderViewedWidget = () => {
        const lastViewed = fromTheEnd(movies.viewed, -6);
        if (movies.viewed.length) {
            return (
                <PreviewWidget 
                    title='Просмотренные' 
                    movies={lastViewed} 
                />
            );
        }
        return null;
    };

    if (app.loading) {
        return <Loader />
    }

    return (
        <div className='main-page'>
            <h1 className='main-page__title'>
                Главная
            </h1>
            <div className='main-page__container'>
                {renderPopularWidget()}
                {renderUpcomingWidget()}
                {renderViewedWidget()}
            </div>
        </div>
    );
    
}

export default MainPage;

// MainPage.propTypes = {
//     title: PropTypes.string,
//     upcoming: PropTypes.arrayOf(
//         PropTypes.shape({
//             date: PropTypes.object,
//             page: PropTypes.number,
//             total_results: PropTypes.number,
//             total_pages: PropTypes.number,
//             results: PropTypes.arrayOf
//         })
//     ),
//     popular: PropTypes.arrayOf(
//         PropTypes.shape({
//             page: PropTypes.number,
//             total_results: PropTypes.number,
//             total_pages: PropTypes.number,
//             results: PropTypes.arrayOf
//         })
//     ),
//     viewed: PropTypes.arrayOf(
//         PropTypes.shape({
//             src: PropTypes.string,
//             id: PropTypes.id
//         })
//     ),
//     results: PropTypes.arrayOf(
//         PropTypes.shape({
//             popularity: PropTypes.number,
//             vote_count: PropTypes.number,
//             video: PropTypes.bool,
//             poster_path: PropTypes.string,
//             id: PropTypes.number,
//             adult: PropTypes.bool,
//             backdrop_path: PropTypes.string,
//             original_language: PropTypes.string,
//             original_title: PropTypes.string,
//             genre_ids: PropTypes.array,
//             title: PropTypes.string,
//             vote_average: PropTypes.number,
//             overview: PropTypes.string,
//             release_date: PropTypes.string
//         })
//     )
// };
