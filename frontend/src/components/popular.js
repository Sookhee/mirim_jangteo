import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "../style/popular.scss";
import Item from './item';

class PopularList extends Component {
    state = {
        productData: []
    }

    getProductData = () => {
        fetch('http://localhost:5000/popular')
        .then(response => response.json())
        .then(response => this.setState({productData: response}))
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getProductData()
      }

    render() {
        return (
            <div className="popular">
                <div className="category">
                    <div className="category-wrap">
                        <input type='radio' value='1' name='category' id='cate1'/>
                        <label htmlFor='cate1'><div className="wrap-label">전체</div></label>
                        <div className="category-blank"></div>
                        <input type='radio' value='1' name='category' id='cate2'/>
                        <label htmlFor='cate2'><div className="wrap-label">식품건강</div></label>
                        <div className="category-blank"></div>
                        <input type='radio' value='1' name='category' id='cate3'/>
                        <label htmlFor='cate3'><div className="wrap-label">패션의류</div></label>
                        <div className="category-blank"></div>
                        <input type='radio' value='1' name='category' id='cate4'/>
                        <label htmlFor='cate4'><div className="wrap-label">디지털</div></label>
                        <div className="category-blank"></div>
                        <input type='radio' value='1' name='category' id='cate5'/>
                        <label htmlFor='cate5'><div className="wrap-label">문화예술</div></label>
                        <div className="category-blank"></div>
                        <input type='radio' value='1' name='category' id='cate6'/>
                        <label htmlFor='cate6'><div className="wrap-label">기타</div></label>
                        <div className="category-blank"></div>
                        <div className="category-hr"></div>
                    </div>
                </div>
                <div className="wrap-product">
                    <div className="category-intro">
                        <img src=''/>
                    </div>
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

export default PopularList;