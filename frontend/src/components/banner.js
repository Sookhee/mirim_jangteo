import React, { Component } from "react";
import "../style/banner.scss";

import Banner1 from '../img/banner1.png'
import Banner2 from '../img/banner2.png'

class Banner extends Component {

    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="wrap-banner">
                        <div id="slider">
                            <figure>
                            <div
                                className="banner-item"
                                style={{ backgroundImage: `url(${Banner1})` }}
                            ></div>
                            <div
                                className="banner-item"
                                style={{ backgroundImage: `url(${Banner2})` }}
                            ></div>
                            <div
                                className="banner-item"
                                style={{ backgroundImage: `url(${Banner1})` }}
                            ></div>
                            <div
                                className="banner-item"
                                style={{ backgroundImage: `url(${Banner2})` }}
                            ></div>
                            <div
                                className="banner-item"
                                style={{ backgroundImage: `url(${Banner1})` }}
                            ></div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Banner;