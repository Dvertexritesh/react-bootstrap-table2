/* eslint react/require-default-props: 0 */
import React from 'react';
import PropTypes from 'prop-types';

function Caption(props) {
  if (!props.children) return null;

  const caption = props.bootstrap4 ? (
    <caption style={ { captionSide: 'top' } }>{props.children}</caption>
  ) : (
    <caption>{props.children}</caption>
  );

  return caption;
}

Caption.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  bootstrap4: PropTypes.bool
};

export default Caption;
