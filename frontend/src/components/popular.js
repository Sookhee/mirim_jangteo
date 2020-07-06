import React, { Component } from "react";
import Axios from 'axios';
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
        cateData: '0',
        cateBanner: cateBanner1,
        productData:{},
        productData_show: [],
        productData_0: [],
        productData_1: [],
        productData_2: [],
        productData_3: [],
        productData_4: [],
        productData_5: [],
        productData_6: [],
        isChecked: [true, false, false, false, false, false, false],
    }


    setCategory0 = () => {this.setState({ ...this.state.productData, cateBanner: cateBanner1, productData_show: this.state.productData_0, cateData: '0', isChecked: [true, false, false, false, false, false, false] }); console.log(this.state.productData)}
    setCategory1 = () => {this.setState({ ...this.state.productData, cateBanner: cateBanner2, productData_show: this.state.productData_1, cateData: '1', isChecked: [false, true, false, false, false, false, false] }); console.log(this.state.productData)}
    setCategory2 = () => {this.setState({ ...this.state.productData, cateBanner: cateBanner3, productData_show: this.state.productData_2, cateData: '2', isChecked: [false, false, true, false, false, false, false] }); console.log(this.state.productData)}
    setCategory3 = () => {this.setState({ ...this.state.productData, cateBanner: cateBanner4, productData_show: this.state.productData_3, cateData: '3', isChecked: [false, false, false, true, false, false, false] }); console.log(this.state.productData)}
    setCategory4 = () => {this.setState({ ...this.state.productData, cateBanner: cateBanner5, productData_show: this.state.productData_4, cateData: '4', isChecked: [false, false, false, false, true, false, false] }); console.log(this.state.productData)}
    setCategory5 = () => {this.setState({ ...this.state.productData, cateBanner: cateBanner6, productData_show: this.state.productData_5, cateData: '5', isChecked: [false, false, false, false, false, true, false] }); console.log(this.state.productData)}
    setCategory6 = () => {this.setState({ ...this.state.productData, cateBanner: cateBanner7, productData_show: this.state.productData_6, cateData: '6', isChecked: [false, false, false, false, false, false, true] }); console.log(this.state.productData)}



    getProductData = () => {
        fetch(`http://localhost:5000/store/popular`)
        .then(response => response.json())
        .then(response => this.setProductData(response))
        .catch(err => console.log(err))
    }

    setProductData = (prod) => {
        // 인기순위 카테고리 모두
        this.setState({productData: prod})

        this.setState({productData_show: prod[0]})

        this.setState({productData_0: prod[0]})
        this.setState({productData_1: prod[1]})
        this.setState({productData_2: prod[2]})
        this.setState({productData_3: prod[3]})
        this.setState({productData_4: prod[4]})
        this.setState({productData_5: prod[5]})
        this.setState({productData_6: prod[6]})
    }

    componentDidMount(){
        this.getProductData()
    }

    render() {
        const { productData, cateData } = this.state
        return (
            <div className="popular">
                <div className="container">
                    <div className="category">
                        <div className="category-wrap">
                            <input type='radio' value='1' name='category' id='cate1' checked={this.state.isChecked[0]}/>
                            <label htmlFor='cate1'><div className="wrap-label" onClick={this.setCategory0}>전체 </div></label>
                            <div className="category-blank"></div>
                            <input type='radio' value='1' name='category' id='cate2' checked={this.state.isChecked[1]}/>
                            <label htmlFor='cate2'><div className="wrap-label"  onClick={this.setCategory1}>식품건강</div></label>
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
                            <div className="cate-intro-img" style={{backgroundImage: `url(${this.state.cateBanner})`}}></div>
                        </div>
                        {
                            this.state.productData_show.map((product, i) => {
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
            </div>
        );
    }
}

export default PopularList;