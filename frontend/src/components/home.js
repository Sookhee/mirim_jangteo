import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Banner from "./banner";
import ProductList from "./product";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Banner/>
                <div className="cont-title">미림장터 카테고리별 인기 상품</div>
                <ProductList/>          
            </div>
        );
    }
}

export default Home;