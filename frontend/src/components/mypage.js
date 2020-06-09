import React, {useState, useEffect} from "react";
import {NavLink, Route} from 'react-router-dom';
import Item from './item';
import "../style/mypage.scss";


const Mypage = ({match}) => {

    const onClickEditPhone = () => {
        alert('전화번호 변경문의는\nmirim_jangteo@gmail.com로 메일 보내주시면\n주말, 공휴일 제외 2일 이내로 변경해드립니다.')
    }

    const [profile, setProfile] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/users/mypage/s2018w18`)
        .then(response => response.json())
        .then(response => setProfile(response[0]))
        .then(console.log(profile))
        .catch(err => console.log(err))
    });


    // http://localhost:5000/users/mypage/s2018w18
    // http://localhost:5000/users/myproduct/s2018w18
    // http://localhost:5000/users/like/s2018w18
    // memberId, productId 보내서 likeList 추가 or 삭제하기
    // detail 화면에 찜 여부 받기 => 나중에
    // 카테고리별 상품 목록 받기
    // http://localhost:5000/store/search/%EA%B0%90%EA%B7%A4/0/0 => 0: 인기순, 1: 최신순
    // post null 체크 required



    return(
        <div className="mypage">
            <div className="mypage-before">
                <div className="mypage-title">마이페이지</div>
                <div className="mypage-sub">내가 찜한 상품, 판매 중인 상품을 한 눈에 볼 수 있어요 👀</div>
            </div>
            <div className="mypage-wrap">
                <div className="mypage-info-left">
                    <div className="mypage-info-profile" style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80"})`}}></div>
                    <div className="mypage-hr"></div>
                    <div className="mypage-wrap-info">
                        <div className="profile-info">{profile.name}</div>
                        <div className="profile-info">{"뉴미디어 소프트웨어"}</div>
                        <div className="profile-info">{profile.phone} <button onClick={onClickEditPhone}>수정</button></div>
                    </div>
                </div>
            </div>
            <div className="mypage-wrap-menu">
                <div className="wrap-item">
                <NavLink to={`/mypage/${match.params.user_id}`} exact={true} activeStyle={{borderBottom: '1px solid #609ae9'}}>내가 등록한 상품</NavLink>
                <div className="item-mg"></div>
                <NavLink to={`/mypage/${match.params.user_id}/pick`} activeStyle={{borderBottom: '1px solid #609ae9'}}>내가 찜한 상품</NavLink>
                </div>
            </div>
            <div className="mypage-route">
                <Route path={`/mypage/:user_id`} exact={true} component={() => <SellingProductInfo/>}/>
                <Route path={`/mypage/:user_id/pick`} component={() => <PickedProductInfo/>}/>
            </div>
        </div>
    )
}


const SellingProductInfo = () => {

    const [sellingData, setSellingData] = useState([])

    const getProductData = () => {
        fetch(`http://localhost:5000/store/popular/0`)
        .then(response => response.json())
        .then(response => {setSellingData(response)})
        .catch(err => console.log(err))
    }

    return(
        <div className="selling-wrap">
            {getProductData()}
            <div className="selling-before">내가 등록한 상품 <span>({16})</span></div>
            <div className="wrap-selling-item">
            {
                sellingData.map((product, i) => {
                    return (
                        <Item key={i}
                            prod_id={product.id}
                            prod_img={product.product_img}
                            prod_title={product.product_title}
                            prod_seller={product.name}
                            prod_price={product.product_price}
                            prod_isSell={product.product_deal_status}
                        />
                        );
                    })
                }
            </div>
        </div>
    )
}

const PickedProductInfo = () => {

    const [pickData, setPickData] = useState([])

    const getProductData = () => {
        fetch(`http://localhost:5000/store/popular/0`)
        .then(response => response.json())
        .then(response => {setPickData(response)})
        .catch(err => console.log(err))
    }

    return(
        <div className="pick-wrap">
            {getProductData()}
            <div className="selling-before">내가 찜한 상품 <span>({16})</span></div>
            <div className="wrap-selling-item">
            {
                pickData.map((product, i) => {
                    return (
                        <Item key={i}
                            prod_id={product.id}
                            prod_img={product.product_img}
                            prod_title={product.product_title}
                            prod_seller={product.name}
                            prod_price={product.product_price}
                            prod_isSell={product.product_deal_status}
                        />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Mypage;