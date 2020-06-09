    import React, { Component, useState } from "react";
    import {NavLink, Route} from "react-router-dom";
    import "../style/detail.scss";
    import HeartTrue from "../img/detail-heart2.png";
    import HeartFalse from "../img/detail-heart1.png";

    class Detail extends Component {

        constructor(props){
            super(props);
            this.state = {
                isPicked: false,
                heart: HeartFalse,
                prod: {}
            }
        }
        

        onClickHeart = () => {
            if(this.state.isPicked){
                this.setState({
                    ...this.state,
                    isPicked: false,
                    heart: HeartFalse
                })
            }
            else{
                this.setState({
                    ...this.state,
                    isPicked: true,
                    heart: HeartTrue
                })
            }
        }

        componentDidMount() {
            fetch(`http://localhost:5000/store/detail/${this.props.match.params.prod_id}`)
            .then(response => response.json())
            .then(
                response => {
                this.setState({
                    ...this.state,
                    prod: response,
                })
            })
            .then(response => {console.log(this.state)})
            .catch(err => console.log(err))
        }

        render(){
            return (
                <div className="detail">
                    <div className="detail-before">
                        <div className="detail-before-title">우리 학교 중고 거래는 미림 장터</div>
                        <div className="detail-before-sub">착한 판매자, 착한 가격. 모두 미림 장터에서 만나보세요! 😎</div>
                    </div>

                    <div className="detail-mid">
                        <NavLink to=""><div className="goback">목록으로</div></NavLink>
                    </div>

                    <div className="wrap-detail">
                        <div className="wrap-form">
                            <div className="wrap-left">
                                <div className="pro-img" style={{backgroundImage: `url(${this.state.prod.product_img})`}}></div>
                                <div className="wrap-btn">
                                    <NavLink to="/mirim-talk"><div className="pro-talk"></div></NavLink>
                                    <img src={this.state.heart} className="pro-pick" onClick={this.onClickHeart}/>                      
                                </div>
                            </div>
                            <div className="wrap-right">
                                <div className="wrap-menu">
                                    <NavLink to={"/product/" + this.props.match.params.prod_id} exact={true} className="menu-item" activeStyle={{borderBottom:"2px solid #609ae9"}}>상품 소개</NavLink>
                                    <NavLink to={"/product/" + this.props.match.params.prod_id + "/seller-info"} className="menu-item" activeStyle={{borderBottom:"2px solid #609ae9"}}>판매자 소개</NavLink>
                                </div>
                                <div className="wrap-router">
                                    <Route path={"/product/" + this.props.match.params.prod_id} exact={true} component={() => <InfoProduct prod={this.state.prod}/>}/>
                                    <Route path={"/product/" + this.props.match.params.prod_id + "/seller-info"} component={InfoSeller}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    class InfoProduct extends Component{

        pricerWithCommas = (price) => {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        replaceProdDealState = (state) => {
            if(state == 0){ return '판매 중'}
            else if(state == 1){ return '거래 진행 중'}
            else if(state == 2){ return '거래 완료'}
            else{ return ''}
        }

        replaceProdState = (state) => {
            if(state == 0){ return '새 상품'}
            else if(state == 1){ return '거의 새 상품'}
            else if(state == 2){ return '중고'}
            else{ return ''}
        }

        replaceProdSwap = (state) => {
            if(state == 0){ return '가능'}
            else if(state == 1){ return '불가능'}
            else{ return ''}
        }

        render(){
            return(
                <div className="wrap-info">
                    <div className="wrap-item">
                        <div className="item-title">상품명</div>
                        <div className="item-cont">{this.props.prod.product_title}</div>
                    </div>
                    <div className="wrap-item">
                        <div className="item-title">가격</div>
                        <div className="item-cont">{this.pricerWithCommas(this.props.prod.product_price *= 1)}원</div>
                    </div>
                    <hr/>
                    <div className="wrap-item">
                        <div className="item-title">거래 상태</div>
                        <div className="item-cont">{this.replaceProdDealState(this.props.prod.product_deal_status)}</div>
                    </div>
                    <div className="wrap-item">
                        <div className="item-title">상품 상태</div>
                        <div className="item-cont">{this.replaceProdState(this.props.prod.product_status)}</div>
                    </div>
                    <div className="wrap-item">
                        <div className="item-title">교환 여부</div>
                        <div className="item-cont">{this.replaceProdSwap(this.props.prod.product_swap)}</div>
                    </div>
                    <hr/>
                    <div className="wrap-item">
                        <div className="item-title">상품 소개</div>
                        <div className="item-cont">{this.props.prod.product_content}</div>
                    </div>
                </div>
            );
        }
    }

    class InfoSeller extends Component{

        constructor(props){
            super(props);
            this.state = {
                seller: {}
            }
        }

        componentDidMount() {
            fetch(`http://localhost:5000/store/detail/${this.props.match.params.prod_id}`)
            .then(response => response.json())
            .then(
                response => {
                this.setState({
                    ...this.state,
                    seller: response,
                })
            })
            .then(response => {console.log(this.state)})
            .catch(err => console.log(err))
        }

        
        render(){
            return(
                <div className="wrap-info">
                    <div className="wrap-item">
                        <div className="item-profile" style={{backgroundImage:`url(${'data:image/jpeg;base64,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'})`}}>d</div>
                        <div className="seller-info">
                            <div className="wrap-item">
                                <div className="item-title">판매자</div>
                                <div className="item-cont">{"정민지"}</div>
                            </div>
                            <div className="wrap-item">
                                <div className="item-title">학과</div>
                                <div className="item-cont">{"뉴미디어 소프트웨어"}</div>
                            </div>
                            <div className="wrap-item">
                                <div className="item-title">연락처</div>
                                <div className="item-cont">{"010-4010-6613"}</div>
                            </div>
                        </div>
                    </div>                    
                </div>
            );
        }
    }

    export default Detail;