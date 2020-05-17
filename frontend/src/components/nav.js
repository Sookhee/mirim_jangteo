import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "../style/nav.css";

class Nav extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg">
                    <div className="nav-item">
                        <NavLink to={"/mypage"}>찜한 상품</NavLink>
                    </div>
                    <div>
                        <NavLink to={"/alert"}>알림</NavLink>
                    </div>
                    <div>
                        <NavLink to={"/logout"}>로그아웃</NavLink>
                    </div>
                </div>
                <div className="navbar navbar-expand-lg">
                    <div className="nav-item">
                        <NavLink to={"/"}>Main</NavLink>
                    </div>
                    <div className="nav-item">
                        <form>
                            <input type="text"></input>
                            <button type="submit">검색</button>
                        </form>
                    </div>
                    <div>
                        <NavLink to={"/post"}>판매하기</NavLink>
                    </div>
                    <div>
                        <NavLink to={"/mypage"}>마이페이지</NavLink>
                    </div>
                    <div>
                        미림톡
                    </div>
                    <div>
                        <NavLink to="/list">상품</NavLink>
                    </div>
                </div>
                

            </div>
        );
    }
}

export default Nav;