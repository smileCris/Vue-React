import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Container from "./pages/Container/index";
import Admin from "./pages/Admin/index";
import Alertpwd from "./pages/Alertpwd/index";
import Bill from "./pages/Bill/index";
import Count from "./pages/Count/index";
import List from "./pages/List/index";
import Member from "./pages/Member/index";
import Menu from "./pages/Menu/index";
import Setting from "./pages/Setting/index";
import Table from "./pages/Table/index";
import Login from "./pages/Login/index";

const App = () => (

  <main>
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/manage"/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/alertpwd' component={Alertpwd}/>
        <Route path='/manage' render={()=>
          <Container>
            <Route exact path='/manage/table' component={Table}/>
            <Route exact path='/manage/bill' component={Bill}/>
            <Route exact path='/manage/member' component={Member}/>
            <Route exact path='/manage/menu' component={Menu}/>
            <Route exact path='/manage/count' component={Count}/>
            <Route exact path='/manage/setting' component={Setting}/>
            <Route exact path='/manage/admin' component={Admin}/>
            <Route exact path='/manage/list' component={List}/>
          </Container>
        }/>
        <Route render={() => '404'}/>
      </Switch>
    </BrowserRouter>
  </main>


)

export default App
