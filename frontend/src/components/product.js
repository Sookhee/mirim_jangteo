import React, { useState, useEffect } from "react";
import "../style/product.scss";
import Item from "./item";

const ProductList = ({match}) => {

    const [keyword, setKeyword] = useState('')
    const [productData, setProductData] = useState([])
    const [productLength, setProductLength] = useState(0)


    useEffect(() => {

        if(match.params.keyword === undefined){
            setKeyword(' ')
        }
        else{
            setKeyword(' ')
            setKeyword(match.params.keyword)
        }

        getProductList()
        getProductLength()
    });

    const getProductList = () => {
        fetch(`http://localhost:5000/store/search/${keyword}/0/0`)
        .then(response => response.json())
        .then(response => setProductData( response.data))
        .catch(err => console.log(err))
    }

    const getProductLength = () => {
        fetch(`http://localhost:5000/store/search/${keyword}/0/0`)
        .then(response => response.json())
        .then(response => setProductLength(response.length))
        .catch(err => console.log(err))
    }

      return (
        <div className="product-wrap">
            <div className="product-wrap-info">
                <div className="product-wrap-result">
                '{match.params.keyword}'에 대한 모든 검색 결과 <span>({productLength})</span>
                </div>
            </div>
            <div className="wrap-product">
                {
                productData.map((product, i) => {
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
            <div className="pagination">
                <span>1</span>
            </div>
        </div>
    );
}

export default ProductList;