import React, { Component } from "react";
import {NavLink, Route} from "react-router-dom";
import "../style/detail.css";

const Detail = ({match}) => {
    return (
        <div className="detail">
            <hr/>
            전체 > {"음식"}
            <hr/>
            <div className="product">
                <img src="https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
                <div className="wrap-info">
                    <div className="title">미림 앞 마트[투게더]</div>
                    <div className="price">4,000원</div>
                    <hr/>
                    <table>
                        <tr>
                            <td>거래 상태</td>
                            <td>판매중</td>
                            <td><button>찜</button></td>
                        </tr>
                        <tr>
                            <td>상품 상태</td>
                            <td>새 상품</td>
                            <td><button>구매하기</button></td>
                        </tr>
                        <tr>
                            <td>교환 여부</td>
                            <td>불가능</td>
                            <td><button>미림톡</button></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="explain">
                <div className="wrap-menu-nav">
                    <NavLink to={"/product/" + match.params.prod_id + "/product-info"}>상품 정보</NavLink>
                    <NavLink to={"/product/" + "11" + "/seller-info"}>판매자 정보</NavLink>
                </div>
                <div className="wrap-explain">
                    <Route path={"/product/:prod_id"} exact={"true"} component={InfoProduct} prod_id={match.params.prod_id}/>
                    <Route path={"/product/:prod_id/product-info"} component={InfoProduct}/>
                    <Route path={"/product/:prod_id/seller-info"} component={InfoSeller}/>
                </div>
            </div>
        </div>
    );
}

class InfoProduct extends Component{
    render(){
        return(
        <div>상품 상세</div>
        );
    }
}

class InfoSeller extends Component{
    render(){
        return(
            <div>판매자 정보</div>
        );
    }
}

export default Detail;