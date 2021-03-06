import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "../style/item.scss";

class Item extends Component {

    pricerWithCommas(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    render() {
        return (
            <div className="item">
                <NavLink to={"/product/" + this.props.prod_id}>
                    <div className="img" style={{backgroundImage: `url(${this.props.prod_img})`}}></div>
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

export default Item;