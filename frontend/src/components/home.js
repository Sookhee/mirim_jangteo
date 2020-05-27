import React from "react";
import "../style/home.scss";
import Banner from "./banner";
import ProductList from "./product";


const Home = () => {

    return (
        <div className="home">
            <Banner/>
            <div className="cont-title">미림장터 카테고리별 인기 상품</div>
            <ProductList/>
        </div>
    );
}

export default Home;