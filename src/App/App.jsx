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

function App() {
    return (
        <div className='app'>
            <Header />
            <Switch>
                <Route
                    path={PAGE_MAIN}
                    exact={true}
                >
                    <MainPage />
                </Route>
                <Route path={PAGE_POPULAR}>
                    <PopularPage />
                </Route>
                <Route path={PAGE_SOON}>
                    <SoonPage />
                </Route>
                <Route path={PAGE_VIEWED}>
                    <ViewedPage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
