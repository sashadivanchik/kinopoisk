import { combineReducers } from 'redux';
import {prewievMovies} from './prewievMovies';
import {viewedMovies} from './viewedMovies';
import {popularMovies} from './popularMovies'
import {upcomingMovies} from './upcomingMovies';
import {appReducer} from './appReducer';

const reducers = {
  prewievMovies,
  viewedMovies,
  popularMovies,
  upcomingMovies,
  appReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
