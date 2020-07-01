import React, { Component } from "react";
import "../style/banner.scss";

class Banner extends Component {

    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="wrap-banner">
                        미림 장터 배너입니다.
                    </div>
                </div>
            </div>
        );
    }
}


export default Banner;