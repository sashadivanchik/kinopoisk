import React from 'react';
import PropTypes from 'prop-types';

import { PreviewWidget } from '../../Components/PreviewWidget/PreviewWidget';
import { ListError } from '../../Components/Errors/Erorr';

import './MainPage.scss';
class MainPage extends React.Component {

    renderPopularWidget = () => {
        const { popular } = this.props
        if (popular.length) {
            return (
                <PreviewWidget 
                    title={'Популярное'} 
                    movies={popular[0].results} 
                />
            );
        }
        return <ListError text={'Массив пуст'} />
    };

    renderUpcomingWidget = () => {
        const { upcoming } = this.props
        if (upcoming.length) {
            return (
                <PreviewWidget 
                    title={'Скоро в кинотеартах'} 
                    movies={upcoming[0].results} 
                />
            );
        }
        return <ListError text={'Массив пуст'} />
    };

    renderViewedWidget = () => { 
        const { viewed } = this.props;    
        if (viewed.length) {
            return (
                <PreviewWidget 
                    title={'Просмотренные'} 
                    movies={viewed} 
                />
            );
        }
        return <ListError text={'Массив пуст'} />
    };

    render() {
        return (
            <div className='main-page'>
                {this.renderPopularWidget()} 
                {this.renderUpcomingWidget()}
                {this.renderViewedWidget()}
            </div>
        );
    }
}

export default MainPage;

MainPage.propTypes = {
    title: PropTypes.string,
    upcoming: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.object,
            page: PropTypes.number,
            total_results: PropTypes.number,
            total_pages: PropTypes.number,
            results: PropTypes.arrayOf
        })
    ),
    popular: PropTypes.arrayOf(
        PropTypes.shape({
            page: PropTypes.number,
            total_results: PropTypes.number,
            total_pages: PropTypes.number,
            results: PropTypes.arrayOf
        })
    ),
    viewed: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            id: PropTypes.id
        })
    ),
    results: PropTypes.arrayOf(
        PropTypes.shape({
            popularity: PropTypes.number,
            vote_count: PropTypes.number,
            video: PropTypes.bool,
            poster_path: PropTypes.string,
            id: PropTypes.number,
            adult: PropTypes.bool,
            backdrop_path: PropTypes.string,
            original_language: PropTypes.string,
            original_title: PropTypes.string,
            genre_ids: PropTypes.array,
            title: PropTypes.string,
            vote_average: PropTypes.number,
            overview: PropTypes.string,
            release_date: PropTypes.string
        })
    )
};
