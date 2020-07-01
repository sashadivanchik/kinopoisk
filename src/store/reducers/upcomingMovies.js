import { FETCH_UPCOMING_MOVIES } from '../types/constants';

const initialState =  {
  upcomingList: []
};

export const upcomingMovies = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_UPCOMING_MOVIES: {
      return {
        ...state,
        upcomingList: action.payload
      }
    }
    default: return state;
  }
};