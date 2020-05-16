import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "../style/nav.css";

class Nav extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg">
                    <div className="nav-item">
                        찜한 상품
                    </div>
                    <div>
                        알림
                    </div>
                    <div>
                        로그아웃
                    </div>
                </div>
                <div className="navbar navbar-expand-lg">
                    <div className="nav-item">
                        <NavLink to={"./"}>Main</NavLink>
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
                    <div>
                        <NavLink to="/product">상품</NavLink>
                    </div>
                </div>
                

            </div>
        );
    }
}

export default Nav;