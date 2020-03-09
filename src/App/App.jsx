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
        popularMovies: [],
        upcomingMovies: [],
        viewedMovies: [
                { src: joker, id: 1 },
                { src: dunkirk, id: 2 },
                { src: bladeRunner, id: 3 },
                { src: replicas, id: 4 },
                { src: serenity, id: 5 },
                { src: assasin, id: 6 }
        ]
    };

    componentDidMount() {
        const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=84ecb8320b91dea5c8ff7bc8404b9b0c`;
        const urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=84ecb8320b91dea5c8ff7bc8404b9b0c`;
        fetchMovies(urlPopular)
            .then(data => this.receiveMovies('popularMovies', data.results))
        fetchMovies(urlUpcoming)
            .then(data => this.receiveMovies('upcomingMovies', data.results))
    }

    receiveMovies = (moviesType, movies) => {
        this.setState({[moviesType]: movies})
    }; 

    render() {
        const {popularMovies, upcomingMovies, viewedMovies} = this.state;
        return (
            <div className='app'>
                <Header />
                <Switch>
                    <Route
                        path={PAGE_MAIN}
                        exact={true}
                    >
                        <MainPage
                            popular={
                                popularMovies
                            }
                            upcoming={
                                upcomingMovies
                            }
                            viewed={
                                viewedMovies
                            }
                        />
                    </Route>
                    <Route path={PAGE_POPULAR}>
                        <PopularPage
                            movies={popularMovies}
                        />
                    </Route>
                    <Route path={PAGE_SOON}>
                        <SoonPage
                            movies={
                                upcomingMovies
                            }
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
