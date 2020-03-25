import React from 'react';

import { Switch, Route } from 'react-router-dom';
import {
    PAGE_MAIN,
    PAGE_POPULAR,
    PAGE_SOON,
    PAGE_VIEWED
} from '../constants/routers/routers';

import MainPage from '../Pages/MainPage';
import PopularPage from '../Pages/PopularPage';
import SoonPage from '../Pages/SoonPage';
import ViewedPage from '../Pages/ViewedPage';
import Header from '../Components/Header';

import { fetchMovies } from '../API/fetchMovies';

import joker from '../static/images/Joker.jpg';
import dunkirk from '../static/images/Dunkirk.jpg';
import bladeRunner from '../static/images/Blade-Runner-2049.jpg';
import replicas from '../static/images/Replicas.jpg';
import serenity from '../static/images/Serenity.jpg';
import assasin from '../static/images/Assasin.jpg';


import './App.scss';
class App extends React.Component {
    state = {
        popular: [],
        upcoming: [],
        viewed: [
                { src: joker, id: 1 },
                { src: dunkirk, id: 2 },
                { src: bladeRunner, id: 3 },
                { src: replicas, id: 4 },
                { src: serenity, id: 5 },
                { src: assasin, id: 6 }
        ]
    };

    componentDidMount() {
        this.getPopularAndUpcomingMoviesData();
    }

    getPopularAndUpcomingMoviesData = () => {
        const types = ['popular', 'upcoming'];
        
        fetchMovies(types)
            .then(moviesTypes => types.forEach((func, index) => {
                const { results } = moviesTypes[index];
                this.receiveMovies(func, results)}
            ));
    }

    receiveMovies = (moviesType, movies) => {
        this.setState({[moviesType]: movies})
    }; 

    render() {
        const {popular, upcoming, viewed} = this.state;
        return (
            <div className='app'>
                <Header />
                <Switch>
                    <Route
                        path={PAGE_MAIN}
                        exact={true}
                    >
                        <MainPage
                            popular={popular}
                            upcoming={upcoming}
                            viewed={viewed}
                        />
                    </Route>
                    <Route path={PAGE_POPULAR}>
                        <PopularPage
                            movies={popular}
                        />
                    </Route>
                    <Route path={PAGE_SOON}>
                        <SoonPage
                            movies={upcoming}
                        />
                    </Route>
                    <Route path={PAGE_VIEWED}>
                        <ViewedPage />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;
