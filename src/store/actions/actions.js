import {  
  ADD_VIEWED_MOVIES, SHOW_LOADER, HIDE_LOADER, 
} from '../types/constants';

export const IMAGE_PATH = `https://image.tmdb.org/t/p/w500`;

const getImageURL = path => {
  return `${IMAGE_PATH}${path}`;
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
      console.log('старт прелоадера если есть');
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
      }, 5000)
    } catch (e) {
      console.log(e);
      console.log('ошибка');
    } finally {
      console.log('если есть прелоадер то выключит');  
    }   
  } 
};

export const fetchMovies = (url, actionType, page) => {
  return async (dispatch) => {
    try {
      console.log('старт прелоадера если есть')
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
      dispatch({ type: actionType, payload: transformData})
    } catch (e) {
      console.log(e);
      console.log('ошибка');
    } finally {
      console.log('если есть прелоадер то выключит');
      dispatch(hideLoader());   
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