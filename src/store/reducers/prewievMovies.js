import { FETCH_PREWIEV_POPULAR, FETCH_PREWIEV_EXPECTED } from '../types/constants';

const initialState = {
  popular: [],
  expected: []
};

export const prewievMovies = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PREWIEV_POPULAR: 
      return {
        ...state,
        popular: action.payload
      }
    case FETCH_PREWIEV_EXPECTED:
      return {
        ...state,
        expected: action.payload
      }
    default: return state;
  }
};
