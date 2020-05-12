import { combineReducers } from 'redux';
import movies from './movies';

const reducers = {
  movies
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
