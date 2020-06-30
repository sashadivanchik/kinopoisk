import React from 'react';

import './SoonPage.scss';

const SoonPage = () => {
    // renderSoonList = () => {
    //     const { movies } = this.props;
    //     if (movies.length) {
    //         return (
    //             <MoviesList movies={movies} />
    //         );
    //     }
    //     return <Error text='Массив фильмов пуст' />;
    // };

    return (
        <div className='soon-page'>
            <h1 className='soon-page__title'>
                Скоро в кинотеатрах
            </h1>
            <div className='soon-page__container'>
                Скоро в кинотеатрах
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
