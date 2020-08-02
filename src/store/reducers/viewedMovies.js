import { ADD_VIEWED_MOVIES, CLEAR_VIEWED_MOVIES } from '../types/constants';

const initialState = {
  viewed: [],
};

export const viewedMovies = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIEWED_MOVIES: {
      const { viewed } = state;
      const { movie } = action.payload;
      const unique = viewed.some(elem => elem.id === movie.id);
      if (unique) {
        return state;
      }
      return {
        ...state,
        viewed: [...viewed, movie]
      }
    } 
    case CLEAR_VIEWED_MOVIES: {
      const { clear } = action.payload;
      return {
        viewed: clear
      }    
    }  
    default: return state;
  }
};
