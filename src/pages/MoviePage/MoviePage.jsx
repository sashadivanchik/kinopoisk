import React, { useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './MoviePage.scss';
import { fetchMovie } from '../../store/actions/actions';
import { FETCH_MOVIE_INFO } from '../../store/types/constants';
import Loader from '../../components/Loader/Loader';
import { PAGE_MAIN } from '../../constants/routers/routers';

const MoviePage = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => ({
    movieInfo: state.moviePage.movieInfo
  }));

  const app = useSelector((state) => ({
    loading: state.appReducer.loading
}));

  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovie(FETCH_MOVIE_INFO, id))
  }, [dispatch, id])

  const genresList = (list) => {
    return list.map((item) => (
      <li 
        key={item.id} 
        className='movie-page__genres-item'
      >
        {item.name}
      </li>))
  };

  if (app.loading) {
    return <Loader />
  }

  const { 
    title, 
    overview, 
    genres, 
    release, 
    posterPath 
  } = movie.movieInfo;
  
  return (   
    <div className='movie-page'>
      <img className='movie-page__poster' src={posterPath} alt='poster'/>
      <div className='movie-page__info-container'>
        <div className='movie-page__title'>{title}</div>
        <div className='movie-page__overview'>{overview}</div>
        <div className='movie-page__release'>Date of release: {release}</div>
        <ul className='movie-page__genres-list'>Genres: {genres && genresList(genres)}</ul>
        <NavLink className='movie-page__link' to={PAGE_MAIN} >На главную</NavLink>
      </div>      
    </div>
  )
};

export default MoviePage;