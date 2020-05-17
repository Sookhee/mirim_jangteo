import React, { Component } from "react";

class Post extends Component {
    render() {
        return (
            <div className="post">
                <form>
                    <table>
                        <tr>
                            <td>상품명</td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>카테고리</td>
                            <td>
                                <div className="wrap-radio">
                                    {
                                        //input type="radio"
                                    }
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>가격</td>
                            <td>
                                <input type="text"></input>
                                <button>무료나눔</button>
                            </td>
                        </tr>
                        <tr>
                            <td>상품 정보</td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>물건상태</td>
                            <td>
                                <div className="wrap-radio">
                                    {
                                        // input type="radio"
                                    }
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>거래장소</td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>교환 여부</td>
                            <td>
                                <div className="wrap-radio">
                                    {
                                        // input type="radio"
                                    }
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>사진</td>
                            <td>
                                <input type="file"></input>
                            </td>
                        </tr>
                    </table>
                    <button className="post-button" type="submit">상품 등록하기</button>
                </form>
            </div>
        );
    }
}

export default Post;