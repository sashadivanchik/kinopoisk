import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import './Pagination.scss';

const ReactPagination = (props) => {
  const {page, func, total} = props;

  return (
    <Pagination
      hideNavigation
      activePage={page}
      itemsCountPerPage={20}
      totalItemsCount={total}
      pageRangeDisplayed={7}
      onChange={func}
      itemClass='pagination__item'
      itemClassFirst='pagination__first'
      itemClassLast='pagination__last'
      linkClass='pagination__link'
      activeLinkClass='pagination__active-link'
      firstPageText='первая'
      lastPageText='последняя'
    />
  )
};

export default ReactPagination;

ReactPagination.propTypes = {
  page: PropTypes.number,
  func: PropTypes.func,
  total: PropTypes.number
}