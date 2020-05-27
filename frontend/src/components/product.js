import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Axios from 'axios';
import "../style/product.scss";

class ProductList extends Component {

    getProductData = () => {
        Axios.get(`http://newsapi.org/v2/top-headlines?country=kr&apiKey=c6e1f1772e1b4036ab8c212686e2ec4a`)
        .then(function(response){
            console.log(response.data.articles);
        })
        .catch(function(error){
            console.log(error);
        })
    };

    constructor(props){
        super(props);
        this.state = {
            productData: [
                {
                    id: 11,
                    img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                    title: "귤 드실분..?",
                    seller: "정민지",
                    price: 10000
                },
                {
                    id: 22,
                    img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
                    title: "한대음 티켓 판매합니다",
                    seller: "안지원",
                    price: 10000
                },
                {
                    id: 33,
                    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                    title: "mbti 키링 주문 받아요",
                    seller: "김수경",
                    price: 4000
                },
                {
                    id: 44,
                    img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80",
                    title: "txt 미개봉 앨범 가져가실분",
                    seller: "정지원",
                    price: 0
                },
                {
                    id: 55,
                    img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                    title: "python 기초 도서",
                    seller: "남정윤",
                    price: 10000
                },
                {
                    id: 66,
                    img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                    title: "감동란 4개입",
                    seller: "정민지",
                    price: 2000
                },
                {
                    id: 77,
                    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80",
                    title: "방울토마토 나눠드실분?",
                    seller: "전은정",
                    price: 1000
                },
                {
                    id: 88,
                    img: "https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                    title: "하이큐 1-12권 누가좀 사주세요",
                    seller: "정민지",
                    price: 12000
                }
            ]
        }
    }

    render() {
        return (
            <div className="product">
                {this.getProductData()}
                <div className="wrap-product">
                    {
                    this.state.productData.map((product, i) => {
                        return (
                            <Item key={i}
                                prod_id={product.id}
                                prod_img={product.img}
                                prod_title={product.title}
                                prod_seller={product.seller}
                                prod_price={product.price}
                            />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

class Item extends Component {

    pricerWithCommas(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    render() {
        return (
            <div className="item">
                <NavLink to={"/product/" + this.props.prod_id}
                prod_id={this.props.prod_id}
                prod_img={this.props.img}
                prod_title={this.props.title}
                prod_seller={this.props.seller}
                prod_price={this.props.price}>
                    <img src={this.props.prod_img} className="img"></img>
                    <div className="wrap-content">
                        <div className="title">{this.props.prod_title}</div>
                        <div className="seller">{this.props.prod_seller}</div>
                        <div className="price">{this.pricerWithCommas(this.props.prod_price)}원</div>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default ProductList;