import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "../style/nav.css";

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="navbar navbar-expand-lg">
                    <div className="nav-item">
                        <NavLink to={"/mypage"}>찜한 상품</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to={"/alert"} className="in-item">알림</NavLink>
                        <NavLink to={"/logout"} className="in-item">로그아웃</NavLink>
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
                    <div className="nav-item wrap-nav-item">
                        <NavLink to={"/post"} className="in-item">판매하기</NavLink>
                        <NavLink to={"/mypage"} className="in-item">마이페이지</NavLink>
                        <NavLink to={"/mirim-talk"} className="in-item">미림톡</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;