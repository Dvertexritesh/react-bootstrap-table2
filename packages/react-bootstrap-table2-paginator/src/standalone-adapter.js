/* eslint react/prop-types: 0 */
import React from 'react';

export default (WrappedComponent) => function ({
  page,
  sizePerPage,
  ...rest
}) {
  return (
    <WrappedComponent
      { ...rest }
      currPage={ page }
      currSizePerPage={ sizePerPage }
    />
  );
};
