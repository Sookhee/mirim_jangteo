    import React, { Component } from "react";
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
                        <div className="detail-before-sub">착한 판매자, 착한 가격. 모두 미림 장터에서 만나보세요!<span role="img"> 😎</span></div>
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
            if(state === 0){ return '판매 중'}
            else if(state === 1){ return '거래 진행 중'}
            else if(state === 2){ return '거래 완료'}
            else{ return ''}
        }

        replaceProdState = (state) => {
            if(state === 0){ return '새 상품'}
            else if(state === 1){ return '거의 새 상품'}
            else if(state === 2){ return '중고'}
            else{ return ''}
        }

        replaceProdSwap = (state) => {
            if(state === 0){ return '가능'}
            else if(state === 1){ return '불가능'}
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
                    <div className="wrap-item-out">
                        <div className="item-profile" style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1559251606-c623743a6d76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"})`}}></div>
                        <div className="seller-info">
                            <div className="wrap-item">
                                <div className="item-title-seller">판매자</div>
                                <div className="item-cont-seller">{"정민지"}</div>
                            </div>
                            <div className="wrap-item">
                                <div className="item-title-seller">학과</div>
                                <div className="item-cont-seller">{"뉴미디어 소프트웨어"}</div>
                            </div>
                            <div className="wrap-item">
                                <div className="item-title-seller">연락처</div>
                                <div className="item-cont-seller">{"010-4010-6613"}</div>
                            </div>
                        </div>
                    </div>                    
                </div>
            );
        }
    }

    export default Detail;