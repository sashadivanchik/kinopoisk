import React from 'react';
import PropTypes from 'prop-types';

import './PopularPage.scss';
import { CreateList } from '../../Components/CreateList/CreateList';
class PopularPage extends React.Component {

    renderPopularList = () => {
        const { movies } = this.props;
        if(movies.lenght) {
            return (
                <CreateList movies={movies[0].results} namePage={'popular-page'} />
            );
        }
        return null;
    };


    render() {       
        return (
            <div className='popular-page'>
                <h1 className='popular-page__title'>
                    Популярное
                </h1>
                <div className='popular-page__container'>
                    {this.renderPopularList()}
                </div>
            </div>
        );
    }
}

export default PopularPage;

PopularPage.propTypes = {
    title: PropTypes.string,
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            page: PropTypes.number,
            total_results: PropTypes.number,
            total_pages: PropTypes.number,
            results: PropTypes.arrayOf
        })
    )
};
