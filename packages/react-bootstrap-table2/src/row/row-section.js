import React from 'react';
import PropTypes from 'prop-types';

function RowSection({ content, colSpan }) {
  return (
    <tr>
      <td
        data-toggle="collapse"
        colSpan={ colSpan }
        className="react-bs-table-no-data"
      >
        { content }
      </td>
    </tr>
  );
}

RowSection.propTypes = {
  content: PropTypes.any,
  colSpan: PropTypes.number
};

RowSection.defaultProps = {
  content: null,
  colSpan: 1
};

export default RowSection;
