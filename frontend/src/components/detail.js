import React, { Component, useState } from "react";
import {NavLink, Route} from "react-router-dom";
import "../style/detail.scss";

const Detail = ({match}) => {
    const [prodState, setProdState] = useState({
        product:
        {
            prod_id: 11,
            prod_img: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            prod_title: "레몬 챌린지 하실분..?",
            prod_seller: "정민지ㅣ지지",
            prod_price: 1000,
            prod_isSell: "판매중",
            prod_state: "새 상품",
            prod_isChange: "불가능",
            prod_info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
            prod_user: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,",

        }
    })

    const pricerWithCommas = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div className="detail">
            <hr/>
            전체 > {"음식"}
            <hr/>
            <div className="product">
                <div className="wrap-info">
                    <img src={prodState.product.prod_img}/>
                </div>
                <div className="wrap-info">
                    <div className="title">{prodState.product.prod_title}</div>
                    <div className="price">{pricerWithCommas(prodState.product.prod_price)}원</div>
                    <hr/>
                    <table>
                        <tr>
                            <td>거래 상태</td>
                            <td>{prodState.product.prod_isSell}</td>
                            <td><button>찜</button></td>
                        </tr>
                        <tr>
                            <td>상품 상태</td>
                            <td>{prodState.product.prod_state}</td>
                            <td><NavLink to="/mirim-talk" className="prod-button">구매하기</NavLink></td>
                        </tr>
                        <tr>
                            <td>교환 여부</td>
                            <td>{prodState.product.prod_isChange}</td>
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
                    <Route path={"/product/:prod_id"} exact={"true"} render={() => <InfoProduct prod_info={prodState.product.prod_info}/>}/>
                    <Route path={"/product/:prod_id/seller-info"} render={() => <InfoSeller prod_user={prodState.product.prod_user}/>}/>
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