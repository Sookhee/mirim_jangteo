import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Axios from 'axios';
import "../style/product.scss";

class BannerList extends Component {
    state = {
        bannerData: []
    }

    getBannerData = () => {
        fetch('http://localhost:5000/banner')
            .then(response => response.json())
            .then(response => this.setState({bannerData: response}))
            .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getBannerData()
    }

    render() {
        return (
            <div className="banner">
                <div className="wrap-banner">
                    {
                        this.state.bannerData.map((banner, i) => {
                            return (
                                <Item key={i}
                                      prod_id={banner.id}
                                      prod_img={banner.banner_img}
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
            <div className="banner">
                {console.log(this.props.prod_id)}
                <NavLink to={"/product/" + this.props.prod_id}>
                    <img src={this.props.prod_img} className="img"></img>
                </NavLink>
            </div>
        );
    }
}

export default BannerList;