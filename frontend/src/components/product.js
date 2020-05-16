import React, { Component } from "react";
import Nav from "./nav";
import ProductList from './product-list';
class Product extends Component {
    render() {
        return (
            <div className="product">
                <Nav/>
                <ProductList/>        
            </div>
        );
    }
}

export default Product;