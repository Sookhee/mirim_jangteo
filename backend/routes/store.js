const express = require('express');
const router = express.Router();

const sequelize = require('sequelize');
const Op = sequelize.Op;

var {User} = require('../models');
var {Sale} = require('../models');
var {Product} = require('../models');
var {Like} = require('../models');
var {Banner} = require('../models');

// 카테고리별 인기있는 상품 8개
router.get('/popular/:category', function(req, res, next) {
    // 카테고리 불러오기
    var category = req.params.category;

    Product.findAll({
        where: {
            product_status: 0,
            category: category
        },
        order: 'product_count DESC',
        limit: 8
    }).then((products) => {
        res.json({
            id: products.product_id,
            title: products.product_title,
            seller: products.name,
            price: products.product_price,
            image: products.product_img
        });
    }).catch((err) => {
        console.error('err: ' + err);
    });
    
});

// 배너
router.get('/banner/:id', function(req, res, next) {
    // 배너 아이디 불러와서 하나하나 가져오기
    var id = req.params.banner_id;

    Banner.findAll({
        where: {
            banner_id: id
        },
        order: 'createdAt DESC'
    }).then((banner) => {
        res.json({
            id: banner.banner_id,
            image: banner.banner_img
        });
    }).catch(err => {
        console.error('err: ' + err);
    })
});

// 검색
router.get('/search/:keyword/:page', function(req, res, next) {
    // 키워드랑 현재 무슨 페이지인지 가져오기
    var keyword = req.params.keyword;
    var page = req.params.page;
    // 인기순인지 최신순인지 불러오기
    // TODO: order = 0: 인기순, order = 1: 최신순
    // 소녀나라 예시: <a href="/shop/list.php?page=1&cate=0104&orby=1">신상품</a>
    var order = 0;

    Product.findAll({
        where: {
            [Op.or]: [
                {product_title: {
                    [Op.like]: '%' + keyword + '%'
                    }},
                {product_content: {
                    [Op.like]: '%' + keyword + '%'
                    }}
            ]
        },
        order: 'product_count DESC'
    }).then((products) => {
        res.json({
            id: products.product_id,
            title: products.product_title,
            seller_id: products.member_id,
            seller: products.name,
            content: products.product_content,
            image: products.product_img,
            page: page,
            length: products.length - 1,
            limit: 20,
            pass: true
        });
    }).catch(err => {
        console.error('err: ' + err);
    });
});

// 상품 게시
router.post('/post', function(req, res, next) {
    // TODO: member_id 는 세션에서 가져오기
    const member_id = 'jyomi';
    let member_name = '';

    User.find({
        where: {member_id: member_id}
    }).then((user) => {
        member_name = user.name
    }).catch(err => {
        console.error('err: ' + err);
    });

    const title = req.body.title;
    const category = req.body.category;
    const price = req.body.price;
    const content = req.body.content;
    const status = req.body.status;
    const place = req.body.place;
    const swap = req.body.swap;
    const image = req.body.image;

    Product.create({
        member_id: member_id,
        name: member_name,
        product_title: title,
        product_content: content,
        category: category,
        product_price: price,
        product_status: status,
        product_img: image,
        product_place: place,
        product_swap: swap
    }).then((result) => {
        res.json({
            product_id: result.product_id
        });
    }).catch(err => {
        console.error('err: ' + error);
    });

});

// 상품 자세히 보기
router.get('/detail/:id', function (req, res, next) {
    var id = req.params.product_id;

    Product.findOne({
        where: {product_id: id}
    }).then((product) => {
        res.json({
            id: id,
            seller: product.name,
            title: product.product_title,
            content: product.product_content,
            category: product.category,
            price: product.product_price,
            status: product.product_status,
            deal_status: product.product_deal_status,
            image: product.product_img,
            count: product.product_count,
            place: product.product_place,
            swap: product.product_swap
        });
    }).catch(err => {
        console.error('err: ' + err);
    });
});

module.exports = router;
