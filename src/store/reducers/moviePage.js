import { FETCH_MOVIE_INFO } from '../types/constants';

const initialState = {
  movieInfo: {}
}

export const moviePage = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MOVIE_INFO: 
      return {
        ...state,
        movieInfo: {...action.payload}
      }
    default: return state;
  }
};