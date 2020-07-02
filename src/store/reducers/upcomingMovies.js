import { FETCH_UPCOMING_MOVIES } from '../types/constants';

const initialState =  {
  upcomingList: [],
  totalResults: 0
};

export const upcomingMovies = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_UPCOMING_MOVIES: {
      const { movies, total } = action.payload;
      return {
        ...state,
        upcomingList: movies,
        totalResults: total
      }
    }
    default: return state;
  }
};