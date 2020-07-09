import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import '../style/notice.scss';

class Notice extends Component {

    render() {
        return (
            <div className="notice">
                <div className="container">
                    <div className="notice-background">
                        <table>
                            <tr>
                                <td>번호</td>
                                <td>제목</td>
                                <td>작성자</td>
                                <td>작성시간</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><NavLink to="/noticeDetail/0">안녕하세요, 미림장터 운영진입니다.</NavLink></td>
                                <td>미림장터 운영진</td>
                                <td>2020.07.08. 14:24</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notice;