import React, { Component } from "react";
import '../style/footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="wrap-footer container">
                    <div className="footer-item-wrap">
                        <div className="footer-item">
                            <div className="footer-logo"></div>
                        </div>
                    </div>
                    <div className="footer-item-wrap">
                        <div className="footer-item">
                            <div>상호 : (주)미림 장터</div>
                            <div>CEO : 전은정</div>
                            <div>CTO : 정민지</div>
                            <div>CSO : 남정윤</div>
                        </div>
                        <div className="footer-item">
                            <div>주소 : 서울시 관악구 신림동 호암로 미림여자정보과학고등학교</div>
                        </div>
                        <div className="footer-item">
                            <div>TEL : 010-4010-6613</div>
                            <div>EMAIL : mirimjangteo@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}