import React, {Component} from 'react';

class Count extends Component {

  componentDidMount() {
    console.log('Count')
  }

  render() {
    return (
      <div id="page-environment-data" style={{ padding: '30px', paddingTop: '80px' }} >
        Count
        <h1>Count</h1>
        <h1>Count</h1>
      </div>
    );
  }
}

export default Count;
