import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchMovie } from '../../store/actions/actions';
import { FETCH_SEARCH_MOVIE } from '../../store/types/constants';
import Loader from '../../components/Loader/Loader';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Error } from '../../components/Errors/Erorr';
import ReactPagination from '../../components/Pagination/Pagination';

const ResultPage = () => {
  const dispatch = useDispatch();

  const props = useSelector((state) => ({
    results: state.searchMovie.resultsSearch,
    total: state.searchMovie.totalResults,
    loading: state.appReducer.loading
  }))

  const [activePage, setPage] = useState(1);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let search = useQuery().get('search');

  const changePage = (activePage) => {
    setPage(activePage)
  };

  useEffect(() => {
    dispatch(searchMovie(FETCH_SEARCH_MOVIE, search, activePage))
  }, [search, activePage]) 

  const renderSearchList = () => {
    if (props.results.length) {
        return (
            <MoviesList movies={props.results} />
        );
    }
    return <Error text='Массив фильмов пуст' />;
};

  if (props.loading) {
    return <Loader />
  }

  return (
    <div className='results-page'>
      <div className='results-page__container'>
          {renderSearchList()}
      </div>
      <ReactPagination 
          page={activePage}
          func={changePage}
          total={props.total}
      />
  </div>
  )
};

export default ResultPage;