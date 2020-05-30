import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import '../style/signup.scss';

export default class SignUp extends Component {
    render() {
        return (
            <div className="signup">
                <div className="signup-form">
                <div className="logo"></div>
                    <div className="title">우리 학교 중고거래, 미림 장터에서 시작하세요!</div>
                    <div className="login-hr-wrap">
                        <div className="login-hr-title">회원가입</div>
                        <div className="login-hr"></div>
                    </div>
                    <form>
                        <div className="wrap-input">
                            <input type="text" className="email"
                            placeholder="이메일"/>
                            <div>@</div>
                            <input type="text" value="e-mirim.hs.kr" className="fix-email" readOnly/>
                        </div>
                        <div className="wrap-input">
                            <input type="password"
                            placeholder="비밀번호 (영문자, 숫자, 특수문자 8-30자)"/>
                        </div>
                        <div className="wrap-input">
                            <input type="password"
                            placeholder="비밀번호 확인"/>
                        </div>
                        <div className="wrap-input">
                            <input type="number"
                            placeholder="전화번호 (숫자만)"/>
                        </div>
                        <button className="login-btn">회원가입</button>
                    </form>
                    <div className="wrap-link">
                        이미 가입하신 회원인가요?
                        <NavLink to="./sign-in">로그인</NavLink>
                    </div>

                    <div className="login-hr"></div>
                </div>
            </div>
        );
    }
}