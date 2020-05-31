import React, { Component, useState } from "react";
import {NavLink, Route} from "react-router-dom";
import "../style/detail.scss";

const Detail = ({match}) => {

    const pricerWithCommas = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="detail">
            
        </div>
    );
}

class InfoProduct extends Component{
    render(){
        return(
        <div className="info">
            {this.props.prod_info}
        </div>
        );
    }
}

class InfoSeller extends Component{
    render(){
        return(
            <div className="info">{this.props.prod_user}</div>
        );
    }
}

export default Detail;