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
                                    <input type='radio' value='1-1' name='q1' id='radio1-1' onChange={this.handleOptionChangeQuiz1}/>
                                    <label htmlFor='radio1-1'>의류잡화</label>
                                    <input type='radio' value='1-2' name='q1' id='radio1-2' onChange={this.handleOptionChangeQuiz1}/>
                                    <label htmlFor='radio1-2'>생활문구</label>
                                    <input type='radio' value='1-3' name='q1' id='radio1-3' onChange={this.handleOptionChangeQuiz1}/>
                                    <label htmlFor='radio1-3'>식료품</label>
                                </div>
                                <div className="wrap-radio">
                                    <input type='radio' value='1-4' name='q1' id='radio1-4' onChange={this.handleOptionChangeQuiz1}/>
                                    <label htmlFor='radio1-4'>전자제품</label>
                                    <input type='radio' value='1-5' name='q1' id='radio1-5' onChange={this.handleOptionChangeQuiz1}/>
                                    <label htmlFor='radio1-5'>문화예술</label>
                                    <input type='radio' value='1-6' name='q1' id='radio1-6' onChange={this.handleOptionChangeQuiz1}/>
                                    <label htmlFor='radio1-6'>스타굿즈</label>
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
                                    <input type='radio' value='2-1' name='q2' id='radio2-1' onChange={this.handleOptionChangeQuiz2}/>
                                    <label htmlFor='radio2-1'>새 상품</label>
                                    <input type='radio' value='2-2' name='q2' id='radio2-2' onChange={this.handleOptionChangeQuiz2}/>
                                    <label htmlFor='radio2-2'>거의 새 상품</label>
                                    <input type='radio' value='2-3' name='q2' id='radio2-3' onChange={this.handleOptionChangeQuiz2}/>
                                    <label htmlFor='radio2-3'>중고</label>
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
                                    <input type='radio' value='3-1' name='q3' id='radio3-1' onChange={this.handleOptionChangeQuiz3}/>
                                    <label htmlFor='radio3-1'>가능</label>
                                    <input type='radio' value='3-2' name='q3' id='radio3-2' onChange={this.handleOptionChangeQuiz3}/>
                                    <label htmlFor='radio3-2'>불가능</label>
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