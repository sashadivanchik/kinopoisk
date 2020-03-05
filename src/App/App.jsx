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

import './App.scss';
import { fetchMovies } from '../API/fetchMovies';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popularMovies: [],
            upcomingMovies: []
        };
    }

    componentDidMount() {
        const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=84ecb8320b91dea5c8ff7bc8404b9b0c`;
        const urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=84ecb8320b91dea5c8ff7bc8404b9b0c`;
        fetchMovies(
            urlPopular,
            this.addPopularMovies
        );
        fetchMovies(
            urlUpcoming,
            this.addUpcomingMovies
        );
    }

    addPopularMovies = data => {
        this.setState({
            popularMovies: [data]
        });
    };

    addUpcomingMovies = data => {
        this.setState({
            upcomingMovies: [data]
        });
    };

    render() {
        const popularMovies = this.state
            .popularMovies;
        const upcomingMovies = this.state
            .upcomingMovies;
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
