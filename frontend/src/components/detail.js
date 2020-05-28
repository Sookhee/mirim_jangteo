import React, { Component, useState } from "react";
import {NavLink, Route} from "react-router-dom";
import "../style/detail.scss";

const Detail = ({match}) => {

    const pricerWithCommas = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="detail">
            <hr/>
            전체 > {console.log(match.params.prod_id)}
            <hr/>
            <div className="product">
                <div className="wrap-info">
                    {console.log(match.params.prod_img)}
                    <img src={match.params.prod_img}/>
                </div>
                <div className="wrap-info">
                    <div className="title">{match.params.prod_title}</div>
                    <div className="price">{pricerWithCommas(55)}원</div>
                    <hr/>
                    <table>
                        <tr>
                            <td>거래 상태</td>
                            <td>{}</td>
                            <td><button>찜</button></td>
                        </tr>
                        <tr>
                            <td>상품 상태</td>
                            <td>{}</td>
                            <td><NavLink to="/mirim-talk" className="prod-button">구매하기</NavLink></td>
                        </tr>
                        <tr>
                            <td>교환 여부</td>
                            <td>{}</td>
                            <td><NavLink to="/mirim-talk" className="prod-button">미림톡</NavLink></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="explain">
                <div className="wrap-menu-nav">
                    <NavLink
                    to={"/product/" + match.params.prod_id}
                    className="nav-item"
                    exact={true}
                    activeStyle={{color: '#ffffff', background: '#abdddc'}}
                    >
                        상품 정보
                    </NavLink>
                    <NavLink
                    to={"/product/" + match.params.prod_id + "/seller-info"}
                    className="nav-item"
                    activeStyle={{color: '#ffffff', background: '#abdddc'}}
                    >
                        판매자 정보
                    </NavLink>
                </div>
                <div className="wrap-explain">
                    <Route path={"/product/:prod_id"} exact={true} render={() => <InfoProduct prod_info={'asd'}/>}/>
                    <Route path={"/product/:prod_id/seller-info"} render={() => <InfoSeller prod_user={'asd'}/>}/>
                </div>
            </div>
        </div>
    );
}

class InfoProduct extends Component{
    render(){
        return(
        <div className="info">
            {this.props.prod_info}
        </div>
        );
    }
}

class InfoSeller extends Component{
    render(){
        return(
            <div className="info">{this.props.prod_user}</div>
        );
    }
}

export default Detail;