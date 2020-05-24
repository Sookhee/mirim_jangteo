const express = require('express');
const router = express.Router();

const sequelize = require('sequelize');
const Op = sequelize.Op;

var {User} = require('../models');
var {Sale} = require('../models');
var {Product} = require('../models');
var {Like} = require('../models');
var {Banner} = require('../models');

/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.redirect('/store/list/1');
});

// 고민 중: /list/:category or ajax 사용
router.get('/list', function(req, res, next) {
    // 현재 페이지 읽어옴.
    // var page = req.params.page;
    // TODO: category 읽어오기
    var category = 1;

    var banners, products;
    Banner.find({order: 'createdAt DESC'})
        .then((banner) => {
            banners = {
                id: banner.banner_id,
                image: banner.banner_img
            }
        });

    Product.find({
        where: {
            product_status: 0,
            category: category
        },
        order: 'product_count DESC',
        limit: 8
    }).then((product) => {
        products = {
            id: product.product_id,
            title: product.product_title,
            seller: product.name,
            price: product.product_price,
            image: product.product_img
        }
    });

    res.json({
        banner: banners,
        product: products
    });
});

router.get('/list/:search', function(req, res, next) {
    var search = req.body.search;
    res.redirect('/list/' + search +'/1');
});

router.get('/list/:search/:page', function(req, res, next) {
    var page = req.params.page;
    var search = req.params.search;
    // order = 0 이면 인기순, order = 1 이면 최신순
    var order = 0;

    var orders, products;

    if (order === 0)
        orders = 'product_count';
    else
        orders = 'createdAt';

    Product.findAll({
        where: {
            product_title: {
                [Op.like]: '%' + search + '%'
            }
        },
        order: orders + 'DESC'
    }).then((product) => {
        products = {
            id: product.product_id,
            title: product.product_title,
            seller: product.name,
            price: product.product_price,
            image: product.product_img
        };

        res.json({
            products: products,
            page: page,
            length: products.length - 1,
            page_num: 20,
            pass: true
        });
    }).catch( err => {
        console.error('err: ' + err);
    });
});

router.get('/post', function(req, res, next) {
    res.render('write');
});

router.post('/post', function(req, res, next) {
    // TODO: user 세션에서 가져오기
    const user = 1;
    let user_name;

    User.find({
        where: {member_id: user}
    }).then((users) => {
        user_name = users.name;
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

    let product_id;

    Product.create({
        member_id: user,
        name: user_name,
        product_title: title,
        product_content: content,
        category: category,
        product_price: price,
        product_status: status,
        product_img: image,
        product_place: place,
        product_swap: swap
    }).then(result => {
        product_id = result.product_id;
        // res.json(result);
        res.redirect('/detail/' + product_id);
    }).catch(err => {
        console.error('err: ' + err);
    });

});

router.get('/detail/:index', function(req, res, next) {
    res.render('detail');
});

module.exports = router;
