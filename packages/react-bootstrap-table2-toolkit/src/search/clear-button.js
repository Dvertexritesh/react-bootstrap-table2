import React from 'react';
import PropTypes from 'prop-types';

function ClearButton({
  onClear,
  text,
  className
}) {
  return <button className={ `btn btn-default ${className}` } onClick={ onClear }>{ text }</button>;
}

ClearButton.propTypes = {
  onClear: PropTypes.func.isRequired,
  className: PropTypes.string,
  text: PropTypes.string
};

ClearButton.defaultProps = {
  text: 'Clear',
  className: ''
};

export default ClearButton;
