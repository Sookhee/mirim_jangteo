import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Sign Up</h3>

                        <div className="form-group">
                            <label>이메일</label>
                            <input type="email" className="form-control" placeholder="미림계정" />
                        </div>

                        <div className="form-group">
                            <label>이름</label>
                            <input type="text" className="form-control" placeholder="본명" />
                        </div>

                        <div className="form-group">
                            <label>전화번호</label>
                            <input type="text" className="form-control" placeholder="숫자만 입력해주세요" />
                        </div>

                        <div className="form-group">
                            <label>비밀번호</label>
                            <input type="password" className="form-control" placeholder="영어 대소문자, 숫자 조합" />
                        </div>

                        <div className="form-group">
                            <label>비밀번호 재입력</label>
                            <input type="password" className="form-control" placeholder="" />
                        </div>

                        
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="text-right">
                            Already registered <Link to={"/sign-in"}>Sign in?</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}