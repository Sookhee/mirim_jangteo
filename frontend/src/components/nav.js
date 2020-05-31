import React, { Component } from "react";
import {AppContext} from '../Context';
import {NavLink} from "react-router-dom";
import "../style/nav.scss";

class Nav extends Component {
    static contextType = AppContext;
    
    state = {
        search: ''
    }
    
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    onClick = () => {
        alert(this.state.search);
    }
    
    render() {
        return (
            <div className="nav">
                <div className="wrap-nav top">
                    <div className="navbar">
                        <div className="nav-item">
                            <NavLink to={"/mypage/" + this.context.userId + "/pick"} activeStyle={{color: '#ffffff', background: '#609ae9'}}>찜한 상품</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink to={"/alert"} className="in-item" activeStyle={{color: '#ffffff', background: '#609ae9'}}>알림</NavLink>
                            <NavLink to={"/sign-in"} className="in-item">로그아웃</NavLink>
                        </div>
                    </div>
                </div>
                <div className="wrap-nav bottom">
                    <div className="navbar">
                        <div className="nav-item-wrap">
                            <NavLink
                            to={"/"}
                            exact={true}>
                                <div className="main"></div>
                            </NavLink>
                            <form>
                                <input type="text"
                                className="searchbar"
                                placeholder="찾고 싶은 상품명을 입력해주세요"
                                value={this.state.search}
                                onChange={this.handleChange}/>
                                <NavLink
                                    to={"/list/" + this.state.search}>
                                    <button type="submit"></button>
                                </NavLink>
                            </form>
                        </div>
                        <div className="nav-item-wrap wrap-menu">
                            <NavLink to={"/post"} className="in-item" activeStyle={{color: '#609ae9'}}>판매하기</NavLink>
                            <NavLink to={"/mypage/" + this.context.userId} className="in-item" activeStyle={{color: '#609ae9'}}>마이페이지</NavLink>
                            <NavLink to={"/mirim-talk"} className="in-item" activeStyle={{color: '#609ae9'}}>미림톡</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;