import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Banner from "./banner";
import ProductList from "./product-list";
import "../style/home.css";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Banner/>
                <ProductList/>          
            </div>
        );
    }
}

export default Home;