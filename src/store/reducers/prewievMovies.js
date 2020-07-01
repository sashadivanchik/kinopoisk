import { FETCH_POPULAR_PREVIEW, FETCH_UPCOMING_PREVIEW } from '../types/constants';

const initialState = {
  popular: [],
  upcoming: []
};

export const prewievMovies = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_PREVIEW: 
      return {
        ...state,
        popular: action.payload
      }
    case FETCH_UPCOMING_PREVIEW:
      return {
        ...state,
        upcoming: action.payload
      }
    default: return state;
  }
};
