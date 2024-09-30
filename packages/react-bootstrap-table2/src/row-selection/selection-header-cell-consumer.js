import React from 'react';
import SelectionContext from '../contexts/selection-context';

export default (Component) => function () {
  return (
    <SelectionContext.Consumer>
      { (selectRow) => <Component { ...selectRow } /> }
    </SelectionContext.Consumer>
  );
};
