import React, { Component } from "react";
import '../style/notice.scss';

class Notice extends Component {

    render() {
        return (
            <div className="notice-detail">
                <div className="container">
                    <div className="notice-detail-background">
                        <div className="wrap-title">
                            <div className="title">안녕하세요, 미림장터 운영진입니다</div>
                            <div className="wrap-meta-data">
                                <div className="data">작성자</div>
                                <div className="data">미림장터 운영진</div>
                                <div className="border"></div>
                                <div className="data">작성시간</div>
                                <div className="data">2020.07.08. 14:24</div>
                            </div>
                        </div>
                        <div className="notice-content">
                            안녕하세요, 미림장터 운영진입니다. 반갑습니다. 잘부탁드립니다.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notice;