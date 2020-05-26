import React, {useState} from "react";
import {NavLink, Route} from 'react-router-dom';
import "../style/mypage.scss";

import ProductList from './product';

const Mypage = ({match}) => {

    const [userState, setUserState] = useState({
        user:
        {
            name: '길동이',
            phone: '010-4010-6613',
            sell_count: 10,
        }
    })

    const setPhone = () => {
        alert('전화번호 정보 수정은\nmirim_jangteo@gmail.com으로 문의 부탁드립니다!');
    }

    return (
        <div className="mypage">
            <div className="wrap-profile">
                <img src="https://images.unsplash.com/photo-1525373612132-b3e820b87cea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/>
                <div className="profile-item">
                    <div className="name">{userState.user.name}네 장터</div>
                    <div>상품 판매 횟수 : </div>
                    <div>연락처 : 010-0000-0000 <button onClick={setPhone}>[ 전화번호 수정 ]</button></div>
                </div>
            </div>
            <div className="wrap-menu-nav">
                <NavLink to={"/mypage/" + match.params.user_id}
                className="nav-item"
                exact={true}
                activeStyle={{color: '#ffffff', background: '#abdddc'}}
                >
                    내 판매 상품
                </NavLink>
                <NavLink 
                to={"/mypage/" + match.params.user_id + "/pick"}
                className="nav-item"
                activeStyle={{color: '#ffffff', background: '#abdddc'}}
                >
                    내가 찜한 상품
                </NavLink>
            </div>
            <div className="wrap-menu">
                <Route path={"/mypage/:user_id"} exact={true} component={ProductList}/>
                <Route path={"/mypage/:user_id/pick"} component={ProductList}/>
            </div>    
        </div>
    );
}

export default Mypage;