import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {saveState, loadState} from './localStorage';

const reduxTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); 

const persistedState = loadState('viewedMovies');

const store = createStore(rootReducer, persistedState, compose(applyMiddleware(thunk), reduxTools));

store.subscribe(() => {
    const state = store.getState();
    saveState({
        viewedMovies: state.viewedMovies
    }, 'viewedMovies');
});

export default store;