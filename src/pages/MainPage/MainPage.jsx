import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainPage.scss';
import { fetchPrewievPopular, fetchPrewievExpected } from '../../store/actions/actions';
import { PreviewWidget } from '../../components/PreviewWidget/PreviewWidget';
import { Error } from '../../components/Errors/Erorr'

const MainPage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => ({
        popular: state.prewievMovies.popular,
        expected: state.prewievMovies.expected,
        viewed: state.viewedMovies.viewed
    }))
    
    useEffect(() => {
        dispatch(fetchPrewievPopular())
        dispatch(fetchPrewievExpected())
    }, [dispatch])

    const renderPopularWidget = () => {
        if (movies.popular.length) {
            return (
                <PreviewWidget
                    title='Популярное'
                    movies={movies.popular} 
                />
            );
        }
        return <Error text='Массив фильмов пуст' />;
    };

    const renderUpcomingWidget = () => {
        if (movies.expected.length) {
            return (
                <PreviewWidget 
                    title='Скоро в кинотеартах' 
                    movies={movies.expected} 
                />
            );
        }
        return <Error text='Массив фильмов пуст' />;
    };

    const renderViewedWidget = () => { 
        if (movies.viewed.length) {
            return (
                <PreviewWidget 
                    title='Просмотренные' 
                    movies={movies.viewed} 
                />
            );
        }
        return <Error text='Просмотренных фильмов пок нет' />;
    };

    
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
