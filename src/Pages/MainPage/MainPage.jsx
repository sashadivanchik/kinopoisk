import React from 'react';
import { PreviewWidget } from '../../Components/PreviewWidget/PreviewWidget';

import joker from '../../static/images/Joker.jpg';
import dunkirk from '../../static/images/Dunkirk.jpg';
import bladeRunner from '../../static/images/Blade-Runner-2049.jpg';
import replicas from '../../static/images/Replicas.jpg';
import serenity from '../../static/images/Serenity.jpg';
import assasin from '../../static/images/Assasin.jpg';

import './MainPage.scss';

const movies = [
    { src: joker },
    { src: dunkirk },
    { src: bladeRunner },
    { src: replicas },
    { src: serenity },
    { src: assasin }
];

class MainPage extends React.Component {
    render() {
        return (
            <div className='main-page'>
                <PreviewWidget
                    title={'Популярное'}
                    movies={movies}
                />
                <PreviewWidget
                    title={'Скоро в кино'}
                    movies={movies}
                />
                <PreviewWidget
                    title={'Просмотренные'}
                    movies={movies}
                />
            </div>
        );
    }
}

export default MainPage;
