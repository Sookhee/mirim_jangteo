import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../style/home.css";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg">
                    <div className="nav-item">
                        Home
                    </div>
                    <div className="nav-item">
                        <form>
                            <input type="text"></input>
                            <button type="submit">검색</button>
                        </form>
                    </div>
                    <div>
                        판매하기
                    </div>
                    <div>
                        마이페이지
                    </div>
                    <div>
                        미림톡
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Home;