import React, { Component } from "react";
import ProductList from './product-list';

class Product extends Component {
    render() {
        return (
            <div className="product">

                <ProductList/>        
            </div>
        );
    }
}

export default Product;