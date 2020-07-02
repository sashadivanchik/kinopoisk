import { FETCH_POPULAR_MOVIES } from '../types/constants';

const initialState =  {
  popularList: [],
  totalResults: 0
};

export const popularMovies = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POPULAR_MOVIES: {
      const { movies, total } = action.payload;
      return {
        ...state,
        popularList: movies,
        totalResults: total
      }
    }
    default: return state;
  }
};