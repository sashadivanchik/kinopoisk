import {  
  ADD_VIEWED_MOVIES, SHOW_LOADER, HIDE_LOADER, CLEAR_VIEWED_MOVIES, 
} from '../types/constants';

import noPoster from '../../static/images/no-poster.jpg';

export const IMAGE_PATH = `https://image.tmdb.org/t/p/w500`;

const getImageURL = path => {
  if (path) {
    return `${IMAGE_PATH}${path}`;
  } 
  return noPoster;
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER
  }
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  }
};

export const fetchPrewiev = (url, actionType) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const responce = await fetch(url);
      const json = await responce.json();
      const transformData = json.results.map(item => {
        return {
          id: item.id,
          title: item.title,
          posterPath: getImageURL(item.poster_path)
        }
      });
      setTimeout(() => {
        dispatch({ type: actionType, payload: transformData})  
        dispatch(hideLoader()); 
      }, 2000)
    } catch (e) {
      console.error(e)
    } 
  } 
};

export const fetchMovies = (url, actionType, page) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader())
      const responce = await fetch(`${url}&page=${page}`);
      const json = await responce.json();
      const transformData = json.results.map(item => {
        return {
          id: item.id,
          title: item.title,
          posterPath: getImageURL(item.poster_path)
        }
      });
      setTimeout(() => {
        dispatch({ type: actionType,
          payload: {
            movies: transformData,
            total: json.total_results
          }})  
        dispatch(hideLoader()); 
      }, 2000)
    } catch (e) {
      console.error(e);
    } 
  } 
};

export const fetchMovie = (actionType, id) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader())
      const responce = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=84ecb8320b91dea5c8ff7bc8404b9b0c`);
      const json = await responce.json();
      setTimeout(() => {
        dispatch({ type: actionType, payload: {
          title: json.original_title,
          overview: json.overview,
          genres: json.genres,
          release: json.release_date,
          posterPath: getImageURL(json.poster_path)
        }})  
        dispatch(hideLoader()); 
      }, 2000)
    } catch (e) {
      console.error(e);
    } 
  } 
};

export const searchMovie = (actionType, search, page) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader())
      const responce = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=84ecb8320b91dea5c8ff7bc8404b9b0c&query=${search}&page=${page}`);
      const json = await responce.json();
      const transformData = json.results.map(item => {
        return {
          id: item.id,
          title: item.title,
          posterPath: getImageURL(item.poster_path)
        }
      });
      setTimeout(() => {
        dispatch({ type: actionType,
            payload: { 
              transformData,
              total: json.total_results
            }})  
        dispatch(hideLoader()); 
      }, 2000)
    } catch (e) {
      console.error(e);
    } 
  } 
};

export const addInViewed = (movie) => {
  return {
    type: ADD_VIEWED_MOVIES,
    payload: {
      movie
    }
  }
};

export const clearViewedMovies = () => {
  return {
    type: CLEAR_VIEWED_MOVIES,
    payload: {
      clear: []
    }
  }
};