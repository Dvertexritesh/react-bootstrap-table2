/* eslint no-return-assign: 0 */
import React from 'react';
import PropTypes from 'prop-types';

function EditorIndicator({ invalidMessage }) {
  return (
    <div className="alert alert-danger in" role="alert">
      <strong>{ invalidMessage }</strong>
    </div>
  );
}

EditorIndicator.propTypes = {
  invalidMessage: PropTypes.string
};

EditorIndicator.defaultProps = {
  invalidMessage: null
};
export default EditorIndicator;
