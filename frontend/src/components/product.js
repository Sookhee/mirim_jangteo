import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Axios from 'axios';
import "../style/product.scss";

class ProductList extends Component {
    state = {
        productData: [
            // {
            //     "id":1,
            //     "member_id":"s2018w12",
            //     "name":"e33j",
            //     "product_title":"house",
            //     "product_content":"i want to go home !!!!",
            //     "category":1,
            //     "product_price":10000,
            //     "product_status":0,
            //     "product_deal_status":0,
            //     "product_img":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            //     "product_count":0,
            //     "product_place":"in front of second teachers room",
            //     "product_swap":0,
            //     "createdAt":"2020-05-28T10:50:48.000Z",
            //     "updatedAt":"2020-05-28T10:50:48.000Z"
            // }
        ]
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