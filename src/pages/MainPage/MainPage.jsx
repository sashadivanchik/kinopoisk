import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MainPage.scss';
import { fetchPrewiev } from '../../store/actions/actions';
import { PreviewWidget } from '../../components/PreviewWidget/PreviewWidget';
import { POPULAR_MOVIES_URL, UPCOMING_MOVIES_URL } from '../../api/constants';
import { FETCH_POPULAR_PREVIEW, FETCH_UPCOMING_PREVIEW } from '../../store/types/constants';
import Loader from '../../components/Loader/Loader';
import { PAGE_SEARCH } from '../../constants/routers/routers';

const MainPage = () => {
    const dispatch = useDispatch();

    const props = useSelector((state) => ({
        popular: state.prewievMovies.popular,
        upcoming: state.prewievMovies.upcoming,
        viewed: state.viewedMovies.viewed,
        loading: state.appReducer.loading
    }));

    let history = useHistory();

    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(fetchPrewiev(POPULAR_MOVIES_URL, FETCH_POPULAR_PREVIEW))
        dispatch(fetchPrewiev(UPCOMING_MOVIES_URL, FETCH_UPCOMING_PREVIEW))
    }, [dispatch]);

    const fromTheEnd = (array, value) => {
        return array.slice(value)
    };

    const onSearch = () => {
            history.push(`${PAGE_SEARCH}?search=${search}`);
            setSearch('');   
    };

    const onSearchKeyPress = (event) => {
        if (search === '') {
            return;
        }

        if (event.key === 'Enter') {
            onSearch()
        }
    };

    const onSearchClick = () => {
        if (search === '') {
            return;
        }
        onSearch()
    };

    const renderPopularWidget = () => {
        if (props.popular.length) {
            return (
                <PreviewWidget
                    title='Популярное'
                    movies={props.popular} 
                />
            );
        }
        return null;
    };

    const renderUpcomingWidget = () => {
        if (props.upcoming.length) {
            return (
                <PreviewWidget 
                    title='Скоро в кинотеартах' 
                    movies={props.upcoming} 
                />
            );
        }
        return null;
    };

    const renderViewedWidget = () => {
        const lastViewed = fromTheEnd(props.viewed, -6);
        if (props.viewed.length) {
            return (
                <PreviewWidget 
                    title='Просмотренные' 
                    movies={lastViewed} 
                />
            );
        }
        return null;
    };

    if (props.loading) {
        return <Loader />
    }

    return (
        <div className='main-page'>
            <div className='main-page__search'>
                <input 
                    className='main-page__input'
                    type='text'
                    name='search' 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                    onKeyPress={onSearchKeyPress}
                />
                <button
                    className='main-page__button-search'
                    onClick={onSearchClick}
                >
                    Поиск
                </button>
            </div>
            <div className='main-page__container'>
                {renderPopularWidget()}
                {renderUpcomingWidget()}
                {renderViewedWidget()}
            </div>
        </div>
    );
    
}

export default MainPage;
