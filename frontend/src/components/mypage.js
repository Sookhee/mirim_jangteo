import React, {useState, useEffect} from "react";
import {NavLink, Route} from 'react-router-dom';
import Item from './item';
import "../style/mypage.scss";


const Mypage = ({match}) => {

    const onClickEditPhone = () => {
        alert('전화번호 변경문의는\nmirim_jangteo@gmail.com로 메일 보내주시면\n주말, 공휴일 제외 2일 이내로 변경해드립니다.')
    }

    const getMajor = (id) => {
        var str = id + "";
        if(str[5] === 's'){
            return "뉴미디어 소프트웨어과"
        }
        else if(str[5] === 'w'){
            return "뉴미디어 웹솔루션과"
        }
        else if(str[5] === 'd'){
            return "뉴미디어 디자인과"
        }
        else{
            return ""
        }
    }

    const [profile, setProfile] = useState([])
    const [sellingData, setSellingData] = useState([])
    const [pickData, setPickData] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/users/mypage/s2018w18`)
        .then(response => response.json())
        .then(response => setProfile(response[0]))
        .catch(err => console.log(err))

        fetch(`http://localhost:5000/users/myproduct/s2018w18`)
        .then(response => response.json())
        .then(response => {setSellingData(response)})
        .catch(err => console.log(err))

        fetch(`http://localhost:5000/users/like/s2018w18`)
        .then(response => response.json())
        .then(response => {setPickData(response)})
        .catch(err => console.log(err))
    });




    return(
        <div className="mypage">
            <div className="mypage-before">
                <div className="banner-img"></div>
                <div className="mypage-wrap-text">
                    <div className="mypage-title">마이페이지</div>
                    <div className="mypage-sub">내가 찜한 상품, 판매 중인 상품을 한 눈에 볼 수 있어요<span role="img"> 👀</span></div>
                </div>
            </div>
            <div className="mypage-wrap">
                <div className="mypage-info-left">
                    <div className="mypage-info-profile" style={{backgroundImage: `url(${"data:image/jpeg;base64,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"})`}}></div>
                    <div className="mypage-hr"></div>
                    <div className="mypage-wrap-info">
                        <div className="profile-info">{profile.name}</div>
                        <div className="profile-info">{getMajor(profile.member_id)}</div>
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
                <Route path={`/mypage/:user_id`} exact={true} component={() => <SellingProductInfo sellingData={sellingData}/>}/>
                <Route path={`/mypage/:user_id/pick`} component={() => <PickedProductInfo pickData={pickData}/>}/>
            </div>
        </div>
    )
}


const SellingProductInfo = (props) => {

    return(
        <div className="selling-wrap">
            <div className="selling-before">내가 등록한 상품 <span>({16})</span></div>
            <div className="wrap-selling-item">
            {
                props.sellingData.map((product, i) => {
                    return (
                        <Item key={i}
                            prod_id={product.id}
                            prod_img={product.product_img}
                            prod_title={product.product_title}
                            prod_seller={product.name}
                            prod_price={parseInt(product.product_price)}
                            prod_isSell={product.product_deal_status}
                        />
                        );
                    })
                }
            </div>
        </div>
    )
}

const PickedProductInfo = (props) => {

    return(
        <div className="pick-wrap">
            <div className="pick-before">내가 찜한 상품 <span>({16})</span></div>
            <div className="wrap-pick-item">
            {
                props.pickData.map((product, i) => {
                    return (
                        <Item key={i}
                            prod_id={product.id}
                            prod_img={product.product_img}
                            prod_title={product.product_title}
                            prod_seller={product.name}
                            prod_price={parseInt(product.product_price)}
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