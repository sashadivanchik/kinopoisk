import { FETCH_PREWIEV_POPULAR, FETCH_PREWIEV_EXPECTED, ADD_VIEWED_MOVIES } from '../types/constants';
import { POPULAR_MOVIES_URL, UPCOMING_MOVIES_URL } from '../../api/constants';

export const IMAGE_PATH = `https://image.tmdb.org/t/p/w500`;

const getImageURL = path => {
  return `${IMAGE_PATH}${path}`;
};

export const fetchPrewievPopular = () => {
  return async (dispatch) => {
    try {
      console.log('старт прелоадера если есть')
      const responce = await fetch(POPULAR_MOVIES_URL);
      const json = await responce.json();
      const transformData = json.results.map(item => {
        return {
          id: item.id,
          title: item.title,
          posterPath: getImageURL(item.poster_path)
        }
      });
      dispatch({ type: FETCH_PREWIEV_POPULAR, payload: transformData})
    } catch (e) {
      console.log(e)
      console.log('ошибка')
    } finally {
      console.log('если есть прелоадер то выключит')
    }   
  } 
}

export const fetchPrewievExpected = () => {
  return async (dispatch) => {
    try {
      console.log('старт прелоадера если есть')
      const responce = await fetch(UPCOMING_MOVIES_URL);
      const json = await responce.json();
      const transformData = json.results.map(item => {
        return {
          id: item.id,
          title: item.title,
          posterPath: getImageURL(item.poster_path)
        }
      });
      dispatch({ type: FETCH_PREWIEV_EXPECTED, payload: transformData})
    } catch (e) {
      console.log(e)
      console.log('ошибка')
    } finally {
      console.log('если есть прелоадер то выключит')
    }   
  } 
}

export const addInViewed = (movie) => {
  return {
    type: ADD_VIEWED_MOVIES,
    payload: {
      movie
    }
  }
}