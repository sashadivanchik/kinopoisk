import { FETCH_POPULAR_MOVIES } from '../types/constants';

const initialState =  {
  popularList: []
};

export const popularMovies = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POPULAR_MOVIES: {
      return {
        ...state,
        popularList: action.payload
      }
    }
    default: return state;
  }
};