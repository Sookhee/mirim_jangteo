import React, {Component} from 'react';
import { BrowserRouter as Switch, Route, NavLink } from "react-router-dom";
import {Provider} from './Context';

import Nav from "./components/nav";
import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/home";
import Product from "./components/product";
import Post from "./components/post";
import Mypage from "./components/mypage";
import Detail from './components/detail';
import Footer from "./components/footer";
import FalseFooter from "./components/falseFooter";
import "./App.scss";
import "./style/nav.scss";

class App extends Component {

  state = {
    isLogin: true,
    userId: 1234
  }

  setIsLoginFalse = () => {
    // this.setState({
    //   isLogin: false
    // })
    alert('logout')
  }


  handleChange = (e) => {
      this.setState({
          search: e.target.value
      })
  }

  render() {

    const contextValue = {
      isLogin: this.state.isLogin,
      userId: this.state.userId,
      setIsLoginFalse: this.setIsLoginFalse,
    }

    return (
      <Provider value={contextValue}>
        <div className="app">
        {
          this.state.isLogin ? 
          (
            <div>
              <Nav/>
              <div className="wrap">
                <Route path="/" exact={true} component={Home}/>
                <Route path="/list/:keyword" component={Product}/>
                <Route path="/list" exact={true} component={Product}/>
                <Route path="/post" component={Post}/>
                <Route path="/mypage/:user_id" component={Mypage}/>
                <Route path="/product/:prod_id" component={Detail}/>
              </div>
              <Footer/>
              <FalseFooter/>
            </div>
          )
          :
          (
            <div>
              <Switch>
                <Route path="/" exact={true} component={Login}/>
                <Route path="/sign-in" component={Login}/>
                <Route path="/sign-up" component={SignUp}/>
              </Switch>
              <FalseFooter/>
            </div>
          )
        }
      </div>
      </Provider>
      
    );
  }
}

export default App;