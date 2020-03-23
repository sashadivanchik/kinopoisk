import React from 'react';
import PropTypes from 'prop-types';

import { MoviesList } from '../../Components/MoviesList/MoviesList';

import './SoonPage.scss';
import { Error } from '../../Components/Errors/Erorr';


class SoonPage extends React.Component {
    renderSoonList = () => {
        const { movies } = this.props;
        if (movies.length) {
            return (
                <MoviesList movies={movies} namePage={'soon-page'} />
            );
        }
        return <Error text='Массив фильмов пуст' />;
    };
    render() {
        return (
            <div className='soon-page'>
                <h1 className='soon-page__title'>
                    Скоро в кинотеатрах
                </h1>
                <div className='soon-page__container'>
                    {this.renderSoonList()}
                </div>
            </div>
        );
    }
}

export default SoonPage;

SoonPage.propTypes = {
    title: PropTypes.string,
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            dates: PropTypes.object,
            page: PropTypes.number,
            total_results: PropTypes.number,
            total_pages: PropTypes.number,
            results: PropTypes.arrayOf
        })
    )
};
