import React, { Component } from 'react';
import { Table, Icon } from 'antd';
import axios from 'axios';
import  "./index.css";

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    axios
      .get(
        'https://easy-mock.com/mock/5b1f331f630e9c3e6b85b766/react0612/list',    
      )
      .then(response => {
        console.log(response)
        this.setState({
          list: response.data.list
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">Action 一 {record.name}</a>
          <span type="vertical" />
          <a href="javascript:;">Delete</a>
          <span type="vertical" />
          <a href="javascript:;" className="ant-dropdown-link">
            More actions <Icon type="down" />
          </a>
        </span>
      ),
    }];

    return (
      <div>
        <h1>List</h1>
        <Table columns={columns} dataSource={this.state.list} />
      </div>
    );
  }
}

export default List;
