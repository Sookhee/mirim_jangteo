import React, { Component } from "react";
import "../style/product.scss";
import Item from "./item";

class ProductList extends Component {
    state = {
        productData: [],
        keyword: ''
    }


    setSearchKeyword = () => {
        this.setState({
            keyword: 'sd'
        })
    }

    getProductData = () => {
        fetch('http://localhost:5000/store/popular/0')
        .then(response => response.json())
        .then(response => this.setState({productData: response}))
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getProductData()
      }

    render() {
        const {match} = this.props;

        return (
            <div className="product-wrap">
                <div className="product-wrap-info">
                    <div className="product-wrap-result">
                    '{match.params.keyword}'에 대한 모든 검색 결과 <span>({0})</span>
                    </div>
                </div>
                <div className="wrap-product">
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
                <div className="pagination">
                    <span>1</span>
                </div>
            </div>
        );
    }
}

export default ProductList;