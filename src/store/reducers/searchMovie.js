import { FETCH_SEARCH_MOVIE } from '../types/constants';

const initialState = {
  resultsSearch: [],
  totalResults: 0 
};

export const searchMovie = (state = initialState, action) => {
  switch(action.type) {
    
    case FETCH_SEARCH_MOVIE: {
      const {transformData, total} = action.payload
      return {        
        ...state,
        resultsSearch: transformData,
        totalResults: total
      }
    }
    default: return state;
  }
};