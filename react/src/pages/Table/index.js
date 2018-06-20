import React, {Component} from 'react';

class Table extends Component {

  componentDidMount() {
    console.log('Table')
  }

  render() {
    return (
      <div id="page-environment-data" style={{ padding: '30px', paddingTop: '80px' }} >
        Table
        <h1>Table</h1>
        <h1>Table</h1>
      </div>
    );
  }
}

export default Table;
