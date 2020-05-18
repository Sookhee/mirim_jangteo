import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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

class App extends Component {
  state = {
    isLogin: true,
  };

  render() {
    return (
      <div className="App">
        {
          this.state.isLogin ? 
          (
            <div>
              <Nav/>
              <div>
                <Route path="/" exact={"true"} component={Home}/>
                <Route path="/list" component={Product}/>
                <Route path="/post" component={Post}/>
                <Route path="/mypage" component={Mypage}/>
                <Route path="/product/:prod_id" component={Detail}/>
              </div>
              <Footer/>
            </div>
          )
          :
          (
            <Switch>
              <Route path="/" exact={"true"} component={Login}/>
              <Route path="/sign-in" component={Login}/>
              <Route path="/sign-up" component={SignUp}/>
            </Switch>
          )
        }
      </div>
    );
  }
}
// function App() {
//   return (
//     <Router>
//       <div className="App">

//         <Switch>
//           
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;