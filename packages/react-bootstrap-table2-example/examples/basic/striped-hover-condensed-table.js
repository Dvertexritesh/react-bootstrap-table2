import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const sourceCode = `\
import BootstrapTable from 'react-bootstrap-table-next';
// omit...

<BootstrapTable
  keyField="id"
  data={ products }
  columns={ columns }
  striped
  hover
  condensed
/>
`;

export default function () {
  return (
    <div>
      <BootstrapTable
        keyField="id"
        data={ products }
        columns={ columns }
        striped
        hover
        condensed
      />
      <Code>{ sourceCode }</Code>
    </div>
  );
}
