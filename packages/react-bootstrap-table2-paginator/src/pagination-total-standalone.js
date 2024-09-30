import React from 'react';
import PaginationTotal from './pagination-total';
import standaloneAdapter from './standalone-adapter';
import paginationTotalAdapter from './pagination-total-adapter';

function PaginationTotalStandalone(props) {
  return <PaginationTotal { ...props } />;
}

export default
standaloneAdapter(paginationTotalAdapter(PaginationTotalStandalone));
