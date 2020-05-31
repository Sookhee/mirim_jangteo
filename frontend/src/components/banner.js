import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Axios from 'axios';
import "../style/banner.scss";

class Banner extends Component {

    render() {
        return (
            <div className="banner">
                <div className="wrap-banner">
                    미림 장터 배너입니다.
                </div>
            </div>
        );
    }
}

class Item extends Component {

    render() {
        return (
            <div className="banner">
                {console.log(this.props.prod_id)}
                <NavLink to={"/product/" + this.props.prod_id}>
                    <img src={this.props.prod_img} className="img"></img>
                </NavLink>
            </div>
        );
    }
}

export default Banner;