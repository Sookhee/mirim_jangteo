import React, {Component} from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";

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

class App extends Component {
  state = {
    isLogin: true,
    user_id: 4568
  };

  render() {
    return (
      <div className="app">
        
        {
          this.state.isLogin ? 
          (
            <div>
              <Nav user_id={this.state.user_id}/>
              <div className="wrap">
                <Route path="/" exact={true} component={Home}/>
                <Route path="/list/:keyword" component={Product}/>
                <Route path="/list" exact={true} component={Product}/>
                <Route path="/post" component={Post}/>
                <Route path="/mypage/:user_id" component={Mypage}/>
                <Route path="/product/:prod_id" component={Detail}/>
              </div>
              <Footer/>
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
    );
  }
}

export default App;