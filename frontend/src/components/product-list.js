import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from './nav';
import "../style/product.css";

class ProductList extends Component {
    render() {
        return (
            <div className="product-list">
                <div className="wrap-product">
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
        );
    }
}

class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src="https://i.picsum.photos/id/20/300/200.jpg" className="img"></img>
                <div className="title">상품 명</div>
                <div className="seller">판매자</div>
                <div className="price">가격</div>
            </div>
        );
    }
}

export default ProductList;