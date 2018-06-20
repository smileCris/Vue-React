import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./index.less";

class Container extends Component {

  componentDidMount() {
    console.log('Container')
  }

  render() {
    return (
      <div className="wrap">
        <div className="left-nav">
            <ul>
              <li>
                <Link to='/manage/table'>
                  <img src={require('../../images/index/m1-icon.png')} alt=""/>
                  <p>餐 台</p>
                </Link>
              </li>
              <li>
                <Link to='/manage/bill'>
                  <img src={require('../../images/index/m2-icon.png')} alt=""/>
                  <p>账 单</p>
                </Link>
              </li>
              <li>
                <Link to='/manage/member'>
                  <img src={require('../../images/index/m3-icon.png')} alt=""/>
                  <p>会 员</p>
                </Link>
              </li>
              <li>
                <Link to='/manage/menu'>
                  <img src={require('../../images/index/m4-icon.png')} alt=""/>
                  <p>菜 单</p>
                </Link>
              </li>
              <li>
                <Link to='/manage/count'>
                  <img src={require('../../images/index/m5-icon.png')} alt=""/>
                  <p>统 计</p>
                </Link>
              </li>
              <li>
                <Link to='/manage/setting'>
                  <img src={require('../../images/index/m6-icon.png')} alt=""/>
                  <p>设 置</p>
                </Link>
              </li>
              <li>
                <Link to='/manage/admin'>
                  <img src={require('../../images/index/m7-icon.png')} alt=""/>
                  <p>管理员</p>
                </Link>
              </li>
              <li>
                <Link to='/manage/list'>
                  <img src={require('../../images/index/m8-icon.png')} alt=""/>
                  <p>打印清单</p>
                </Link>
              </li>
            </ul>
        </div>
        <div className="page-contain">
          <div className="navbar">
            <div className="blank"></div>
            <div className="left">
              <img src={require('../../images/index/icon-shop.png')} alt=""/>
              <p className="large">鱼忘七秒</p><span></span>
              <div className="column">
                <p className="p1">鱼忘【Admin】</p>
                <p className="p2">欢迎您登陆航家·点餐商户后台</p>
              </div>
            </div>
            <div className="middle"></div>
            <div className="right">
              <input id="checkbox" type="checkbox" />
              <label for="checkbox">
                <img src={require('../../images/index/login.png')} alt=""/>
              </label>
              <ul>
                <a><li>修改密码</li></a>
                <a href="login"><li>登出</li></a>
              </ul>
            </div>
          </div>
          <div className="content-wrapper">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
