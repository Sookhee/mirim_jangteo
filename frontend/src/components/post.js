import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import "../style/post.scss";

const Post = () => {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [content, setContent] = useState('')
    const [status, setStatus] = useState('')
    const [place, setPlace] = useState('')
    const [swap, setSwap] = useState('')
    const [img, setImg] = useState('https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')
    
    const submitProductData = () => {
        fetch(`http://localhost:5000/store/post?title=${title}&category=${category}&price=${price}&content=${content}&status=${status}&place=${place}&swap=${swap}&img=${img}`)
        .then(alert('상품 등록에 성공했습니다'))
        .catch( err => console.log(err))
    }


    return (
        <div className="post">
            <div className="post-banner">
                <div className="banner-img"></div>
                <div className="banner-wrap-text container">
                    <div className="banner-title">판매하기</div>
                    <div className="banner-sub">사용하지 않는 물건들을 미림 장터에 팔아보세요 (✿´‿`)</div>
                </div>
            </div>
            <div className="before-form container">
                <div className="wrap-before">
                    <NavLink to=""><div className="goback">메인으로</div></NavLink>
                    <div className="post-root"><NavLink to="">전체 상품</NavLink> &nbsp;&nbsp;>&nbsp;&nbsp;<span className="post-hl">새 상품 등록</span></div>
                </div>
                <details className="tip">
                    <summary>&nbsp;&nbsp;상품을 빠르게 판배할 수 있는 꿀팁!&nbsp;&nbsp;🤘</summary>
                    <ol>
                        <li>상품명은 짧고 강력하게!</li>
                        <li>알맞는 카테고리를 선택해주세요.</li>
                        <li>사진은 상품을 가장 잘 표현할 수 있는 것으로 첨부해주세요.</li>
                        <li>합리적인 가격을 제시해주세요.</li>
                        <li>욕설, 광고, 홍보, 장난 등이 포함된 답변은 통보 없이 삭제될 수 있습니다.</li>
                    </ol>
                </details>
            </div>
            <div className="container">
            <div className="post-form-wrap">
                <form onSubmit={submitProductData}>
                    <div className="question">상품명</div>
                    <div className="wrap-input"><input type="text" onChange={e => {setTitle(e.target.value)}}/></div>

                    <div className="question">카테고리</div>
                        <div className="wrap-input">
                            <input type='radio' value='0' name='category' id='cate0' onClick={e => {setCategory(e.target.value)}}/>
                            <label htmlFor='cate0'><div className="wrap-label">식품건강</div></label>
                            <input type='radio' value='1' name='category' id='cate1' onClick={e => {setCategory(e.target.value)}}/>
                            <label htmlFor='cate1'><div className="wrap-label">패션의류</div></label>
                            <input type='radio' value='2' name='category' id='cate2' onClick={e => {setCategory(e.target.value)}}/>
                            <label htmlFor='cate2'><div className="wrap-label">디지털</div></label>
                            <input type='radio' value='3' name='category' id='cate3' onClick={e => {setCategory(e.target.value)}}/>
                            <label htmlFor='cate3'><div className="wrap-label">문화예술</div></label>
                            <input type='radio' value='4' name='category' id='cate4' onClick={e => {setCategory(e.target.value)}}/>
                            <label htmlFor='cate4'><div className="wrap-label">생활문구</div></label>
                            <input type='radio' value='5' name='category' id='cate5' onClick={e => {setCategory(e.target.value)}}/>
                            <label htmlFor='cate5'><div className="wrap-label">기타</div></label>
                        </div>

                        <div className="question">가격</div>
                        <div className="wrap-input"><input type="number" min="0" max="100000" onChange={e => {setPrice(e.target.value)}}/></div>

                        <div className="question">상품 설명</div>
                        <div className="wrap-input"><textarea onChange={e => {setContent(e.target.value)}}></textarea></div>

                        <div className="question">상품 상태</div>
                        <div className="wrap-input">
                        <input type='radio' value='0' name='stat' id='stat1' onClick={e => {setStatus(e.target.value)}}/>
                            <label htmlFor='stat1'><div className="wrap-label">새 상품</div></label>
                            <input type='radio' value='1' name='stat' id='stat2' onClick={e => {setStatus(e.target.value)}}/>
                            <label htmlFor='stat2'><div className="wrap-label">거의 새 상품</div></label>
                            <input type='radio' value='2' name='stat' id='stat3' onClick={e => {setStatus(e.target.value)}}/>
                            <label htmlFor='stat3'><div className="wrap-label">중고</div></label>
                        </div>

                        <div className="question">거래 장소</div>
                        <div className="wrap-input"><input type="text" onChange={e => {setPlace(e.target.value)}}/></div>

                        <div className="question">교환 여부</div>
                        <div className="wrap-input">
                            <input type='radio' value='0' name='change' id='change1' onClick={e => {setSwap(e.target.value)}}/>
                            <label htmlFor='change1'><div className="wrap-label">가능</div></label>
                            <input type='radio' value='1' name='change' id='change2' onClick={e => {setSwap(e.target.value)}}/>
                            <label htmlFor='change2'><div className="wrap-label">불가능</div></label>
                        </div>

                        <div className="question">사진</div>
                        <div className="wrap-input"><input type="file"/></div>

                        <div className="wrap-post-button">
                            <button className="cancel" type="reset">초기화</button>
                            <button className="submit" type="submit">상품 등록</button>
                        </div>
                    </form>
                </div>
            </div>            
        </div>
    );
}

export default Post;