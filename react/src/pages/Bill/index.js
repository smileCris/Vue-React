import React, {Component} from 'react';

class Bill extends Component {

  componentDidMount() {
    console.log('Bill')
  }

  render() {
    return (
      <div id="page-environment-data" style={{ padding: '30px', paddingTop: '80px' }} >
        Bill
        <h1>Bill</h1>
        <h1>Bill</h1>
      </div>
    );
  }
}

export default Bill;
