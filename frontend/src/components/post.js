import React, { Component } from "react";
import "../style/post.scss";

class Post extends Component {
    render() {
        return (
            <div className="post">
                <form>
                    <div className="question">상품 명</div>
                    <div className="info">
                        <input type="text" placeholder="최대 30자까지 입력 가능!" maxLength="30"/>
                    </div>
                    <div className="question">카테고리</div>
                    <div className="info">
                        <div className="wrap-radio">
                            <input type='radio' value='1' name='category' id='cate1'/>
                            <label htmlFor='cate1'><div className="wrap-label label-30">패션의류</div></label>
                            <input type='radio' value='2' name='category' id='cate2'/>
                            <label htmlFor='cate2'><div className="wrap-label label-30">식품/영양</div></label>
                            <input type='radio' value='3' name='category' id='cate3'/>
                            <label htmlFor='cate3'><div className="wrap-label label-30">생활/문구</div></label>
                        </div>
                        <div className="wrap-radio">
                            <input type='radio' value='4' name='category' id='cate4'/>
                            <label htmlFor='cate4'><div className="wrap-label label-30">디지털</div></label>
                            <input type='radio' value='5' name='category' id='cate5'/>
                            <label htmlFor='cate5'><div className="wrap-label label-30">문화/예술</div></label>
                            <input type='radio' value='6' name='category' id='cate6'/>
                            <label htmlFor='cate6'><div className="wrap-label label-30">기타</div></label>
                        </div>
                    </div>
                    <div className="question">판매 가격</div>
                    <div className="info">
                        <div className=" wrap-button">
                            <input type="number" placeholder="숫자만 입력해주세요..!"/>
                            <button type="button">무료나눔</button>
                        </div>
                    </div>
                    <div className="question">상품 설명</div>
                    <div className="info">
                        <textarea type="text" placeholder="크기, 색상, 사용 기간 등 자세한 정보를 입력해주시면 더욱 수월하게 거래할 수 있습니다."/>
                    </div>
                    <div className="question">상품 상태</div>
                    <div className="info wrap-radio">
                        <input type='radio' value='새 상품' name='stat' id='stat1'/>
                        <label htmlFor='stat1'><div className="wrap-label label-30">새 상품</div></label>
                        <input type='radio' value='거의 새 상품' name='stat' id='stat2'/>
                        <label htmlFor='stat2'><div className="wrap-label label-30">거의 새 상품</div></label>
                        <input type='radio' value='중고' name='stat' id='stat3'/>
                        <label htmlFor='stat3'><div className="wrap-label label-30">중고</div></label>
                    </div>
                    <div className="question">거래 장소</div>
                    <div className="info">
                        <input type="text"/>
                    </div>
                    <div className="question">교환 여부</div>
                    <div className="info wrap-radio">
                        <input type='radio' value='가능' name='change' id='change1'/>
                        <label htmlFor='change1'><div className="wrap-label label-50">가능</div></label>
                        <input type='radio' value='불가능' name='change' id='change2'/>
                        <label htmlFor='change2'><div className="wrap-label label-50">불가능</div></label>
                    </div>
                    <div className="question">사진 첨부</div>
                    <div className="info">
                        <input type="file"/>
                    </div>
                    <button type="submit" className="submit-button">상품 등록</button>
                </form>
            </div>
        );
    }
}

export default Post;