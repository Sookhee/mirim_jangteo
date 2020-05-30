import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Axios from 'axios';
import "../style/product.scss";

class ProductList extends Component {
    state = {
        productData: []
    }

    getProductData = () => {
        fetch('http://localhost:5000/test')
        .then(response => response.json())
        .then(response => this.setState({productData: response}))
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getProductData()
      }

    render() {
        return (
            <div className="product">
                <div className="wrap-product">
                    {
                    this.state.productData.map((product, i) => {
                        return (
                            <Item key={i}
                                prod_id={product.id}
                                prod_img={product.product_img}
                                prod_title={product.product_title}
                                prod_seller={product.name}
                                prod_price={product.product_price}
                                prod_isSell={product.product_deal_status}
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
                {console.log(this.props.prod_id)}
                <NavLink to={"/product/" + this.props.prod_id}>
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