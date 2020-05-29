import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "../style/login.scss";

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-form">
                    <div className="logo"></div>
                    <div className="title">우리 학교 중고거래, 미림 장터에서 시작하세요!</div>
                    <div className="login-hr-wrap">
                        <div className="login-hr-title">로그인</div>
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
                            placeholder="비밀번호"/>
                        </div>
                        <button className="login-btn">로그인</button>
                    </form>
                    <div className="wrap-link">
                        아직 미림 장터의 회원이 아니신가요?
                        <NavLink to="./sign-up">회원가입</NavLink>
                    </div>

                    <div className="login-hr"></div>
                </div>
            </div>
        );
    }
}

export default Login;