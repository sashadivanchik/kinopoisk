import React from 'react';
import PropTypes from 'prop-types';

import { CreateList } from '../../Components/CreateList/CreateList';

import './SoonPage.scss';


class SoonPage extends React.Component {
    renderSoonList = () => {
        const { movies } = this.props;
        if(movies.length) {
            return (
                <CreateList movies={movies[0].results} namePage={'popular-page'} />
            );
        }
        return null;
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
