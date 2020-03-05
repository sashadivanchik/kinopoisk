import React from 'react';
import PropTypes from 'prop-types';

import { PreviewWidget } from '../../Components/PreviewWidget/PreviewWidget';

import joker from '../../static/images/Joker.jpg';
import dunkirk from '../../static/images/Dunkirk.jpg';
import bladeRunner from '../../static/images/Blade-Runner-2049.jpg';
import replicas from '../../static/images/Replicas.jpg';
import serenity from '../../static/images/Serenity.jpg';
import assasin from '../../static/images/Assasin.jpg';

import './MainPage.scss';

const movies1 = [
    { src: joker, id: 1 },
    { src: dunkirk, id: 2 },
    { src: bladeRunner, id: 3 },
    { src: replicas, id: 4 },
    { src: serenity, id: 5 },
    { src: assasin, id: 6 }
];

class MainPage extends React.Component {
    render() {
        const { popular, upcoming } = this.props;
        return (
            <div className='main-page'>
                {popular.length > 0 && (
                    <PreviewWidget
                        title={'Популярное'}
                        movies={
                            popular[0].results
                        }
                    />
                )}
                {upcoming.length > 0 && (
                    <PreviewWidget
                        title={'Скоро в кино'}
                        movies={
                            upcoming[0].results
                        }
                    />
                )}
                <PreviewWidget
                    title={'Просмотренные'}
                    movies={movies1}
                />
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
