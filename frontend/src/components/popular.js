import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "../style/popular.scss";
import Item from './item';
import cateBanner1 from "../img/cate-banner1.png";
import cateBanner2 from "../img/cate-banner2.png";
import cateBanner3 from "../img/cate-banner3.png";
import cateBanner4 from "../img/cate-banner4.png";
import cateBanner5 from "../img/cate-banner5.png";
import cateBanner6 from "../img/cate-banner6.png";
import cateBanner7 from "../img/cate-banner7.png";

class PopularList extends Component {
    state = {
        productData: [],
        cateData: '0',
        isChecked: [true, false, false, false, false, false, false],
    }

    cateBannerData = {
        '0': cateBanner1,
        '1': cateBanner2,
        '2': cateBanner3,
        '3': cateBanner4,
        '4': cateBanner5,
        '5': cateBanner6,
        '6': cateBanner7,
    }

    setCategory0 = () => {this.setState({ ...this.state.productData, cateData: '0', isChecked: [true, false, false, false, false, false, false] });}
    setCategory1 = () => {this.setState({ ...this.state.productData, cateData: '1', isChecked: [false, true, false, false, false, false, false] });}
    setCategory2 = () => {this.setState({ ...this.state.productData, cateData: '2', isChecked: [false, false, true, false, false, false, false] });}
    setCategory3 = () => {this.setState({ ...this.state.productData, cateData: '3', isChecked: [false, false, false, true, false, false, false] });}
    setCategory4 = () => {this.setState({ ...this.state.productData, cateData: '4', isChecked: [false, false, false, false, true, false, false] });}
    setCategory5 = () => {this.setState({ ...this.state.productData, cateData: '5', isChecked: [false, false, false, false, false, true, false] });}
    setCategory6 = () => {this.setState({ ...this.state.productData, cateData: '6', isChecked: [false, false, false, false, false, false, true] });}



    getProductData = () => {
        fetch(`http://localhost:5000/store/popular/${this.state.cateData}`)
        .then(response => response.json())
        .then(response => this.setState({productData: response}))
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getProductData()
    }

    render() {
        return (
            <div className="popular">
                <div className="category">
                    <div className="category-wrap">
                        <input type='radio' value='1' name='category' id='cate1' checked={this.state.isChecked[0]}/>
                        <label htmlFor='cate1'><div className="wrap-label" onClick={this.setCategory0}>전체 </div></label>
                        <div className="category-blank"></div>

                        <input type='radio' value='1' name='category' id='cate2' checked={this.state.isChecked[1]}/>
                        <label htmlFor='cate2'><div className="wrap-label" onClick={this.setCategory1}>식품건강</div></label>
                        <div className="category-blank"></div>

                        <input type='radio' value='1' name='category' id='cate3' checked={this.state.isChecked[2]}/>
                        <label htmlFor='cate3'><div className="wrap-label" onClick={this.setCategory2}>패션의류</div></label>
                        <div className="category-blank"></div>

                        <input type='radio' value='1' name='category' id='cate4' checked={this.state.isChecked[3]}/>
                        <label htmlFor='cate4'><div className="wrap-label" onClick={this.setCategory3}>디지털</div></label>
                        <div className="category-blank"></div>

                        <input type='radio' value='1' name='category' id='cate5' checked={this.state.isChecked[4]}/>
                        <label htmlFor='cate5'><div className="wrap-label" onClick={this.setCategory4}>문화예술</div></label>
                        <div className="category-blank"></div>

                        <input type='radio' value='1' name='category' id='cate6' checked={this.state.isChecked[5]}/>
                        <label htmlFor='cate6'><div className="wrap-label" onClick={this.setCategory5}>생활문구</div></label>
                        <div className="category-blank"></div>

                        <input type='radio' value='1' name='category' id='cate7' checked={this.state.isChecked[6]}/>
                        <label htmlFor='cate7'><div className="wrap-label" onClick={this.setCategory6}>기타</div></label>

                        <div className="category-hr"></div>
                    </div>
                </div>
                <div className="wrap-product">
                    <div className="category-intro">
                        <img src={this.cateBannerData[this.state.cateData]} className="cate-intro-img"/>
                    </div>
                    {
                    this.state.productData.map((product, i) => {
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
        );
    }
}

export default PopularList;