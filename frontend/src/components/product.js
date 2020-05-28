import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Axios from 'axios';
import "../style/product.scss";

class ProductList extends Component {

    state = {
        productData: []
    }

    getUsuarios = _ => {
        Axios('http://localhost:4000/member')
        .then(response => response.json())
        .then(response => this.setState({productData: response}))
        .then(console.log(this.state.productData))
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="product">
                {this.getProductData()}
                <div className="wrap-product">
                    {
                    this.state.productData.map((product, i) => {
                        return (
                            <Item key={i}
                                prod_id={product.id}
                                prod_img={product.img}
                                prod_title={product.title}
                                prod_seller={product.seller}
                                prod_price={product.price}
                            />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

class Item extends Component {

    pricerWithCommas(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    render() {
        return (
            <div className="item">
                <NavLink to={"/product/" + this.props.prod_id}
                prod_id={this.props.prod_id}
                prod_img={this.props.img}
                prod_title={this.props.title}
                prod_seller={this.props.seller}
                prod_price={this.props.price}>
                    <img src={this.props.prod_img} className="img"></img>
                    <div className="wrap-content">
                        <div className="title">{this.props.prod_title}</div>
                        <div className="seller">{this.props.prod_seller}</div>
                        <div className="price">{this.pricerWithCommas(this.props.prod_price)}원</div>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default ProductList;