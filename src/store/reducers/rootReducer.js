import { combineReducers } from 'redux';
import {prewievMovies} from './prewievMovies';
import {viewedMovies} from './viewedMovies';

const reducers = {
  prewievMovies,
  viewedMovies
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
