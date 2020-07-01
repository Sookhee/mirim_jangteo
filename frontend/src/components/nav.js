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
                <div className="nav-top">
                    <div className="container">
                        <div className="nav-flex-wrap">
                            <div className="nav-flex-item">
                                <NavLink to={"/mypage/" + this.context.userId + "/pick"} activeStyle={{color: '#ffffff', background: '#609ae9'}}>찜한 상품</NavLink>
                            </div>
                            <div className="nav-flex-item">
                                <NavLink to={"/notice"} className="nav-link-item" activeStyle={{color: '#ffffff', background: '#609ae9'}}>공지사항</NavLink>
                                <NavLink to={"/sign-in"} className="nav-link-item">로그아웃</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-bottom">
                    <div className="container">
                        <div className="nav-flex-wrap">
                            <div className="nav-flex-item">
                            <NavLink to={"/"} exact={true}>
                                    <div className="main"></div>
                            </NavLink>
                            <form>
                                <input type="text"
                                className="searchbar"
                                placeholder="찾고 싶은 상품명을 입력해주세요"
                                value={this.state.search}
                                onChange={this.handleChange}/>
                                <NavLink
                                    to={"/list/" + this.state.search}
                                    state={{search: this.state.search}}>
                                    <button type="submit"></button>
                                </NavLink>
                            </form>
                            </div>
                            <div className="nav-flex-item">
                            <NavLink to={"/post"} className="nav-in-item" activeStyle={{color: '#609ae9'}}>판매하기</NavLink>
                            <NavLink to={"/mypage/" + this.context.userId} className="nav-in-item" activeStyle={{color: '#609ae9'}}>마이페이지</NavLink>
                            <NavLink to={"/mirim-talk"} className="nav-in-item" activeStyle={{color: '#609ae9'}}>미림톡</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Nav;