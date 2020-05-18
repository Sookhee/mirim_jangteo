import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "../style/product.css";

class ProductList extends Component {
    render() {
        return (
            <div className="product-list">
                <div className="wrap-product">
                    <Item prod_id="11"/>
                    <Item prod_id="22"/>
                    <Item prod_id="33"/>
                    <Item prod_id="44"/>
                </div>
            </div>
        );
    }
}

class Item extends Component {
    render() {
        return (
            <div className="item">
                <NavLink to={"/product/" + this.props.prod_id} prod_id="11">
                    <img src="https://i.picsum.photos/id/20/300/200.jpg" className="img"></img>
                    <div className="title">상품 명</div>
                    <div className="seller">판매자</div>
                    <div className="price">가격</div>
                </NavLink>
            </div>
        );
    }
}

export default ProductList;