import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "../style/product.css";

class ProductList extends Component {

    constructor(props){
        super(props);
        this.state = {
            productData: [
                {
                    id: 11,
                },
                {
                    id: 22,
                },
                {
                    id: 33,
                },
                {
                    id: 44,
                },
                {
                    id: 55,
                },
                {
                    id: 66,
                },
                {
                    id: 77,
                },
                {
                    id: 88,
                }
            ]
        }
    }

    render() {
        return (
            <div className="product-list">
                <div className="wrap-product">
                    {
                    this.state.productData.map((product, i) => {
                        return (
                            <Item key={i}
                                prod_id={product.id}
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
    render() {
        return (
            <div className="item">
                <NavLink to={"/product/" + this.props.prod_id} prod_id={this.props.prod_id}>
                    <img src="https://i.picsum.photos/id/20/300/200.jpg" className="img"></img>
                    <div className="wrap-content">
                        <div className="title">상품 명</div>
                        <div className="seller">판매자</div>
                        <div className="price">가격</div>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default ProductList;