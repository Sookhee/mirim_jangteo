const express = require('express');
const router = express.Router();
const mysql_odbc = require('../db/db_conn')();
const connection = mysql_odbc.init();

// const sequelize = require('sequelize');
// const Op = sequelize.Op;
//
// var {User} = require('../models');
// var {Sale} = require('../models');
// var {Product} = require('../models');
// var {Like} = require('../models');
// var {Banner} = require('../models');

// 카테고리별 인기있는 상품 8개 (끝)
router.get('/popular/:category', (req, res) => {
    const category = req.params.category;
    const query = 'SELECT * FROM products WHERE product_status = 0 AND category = ? ORDER BY product_count DESC LIMIT 8';

    const productList = [];
    connection.query(query, [category], (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            for(let i = 0; i < result.length; i++){
                productList[i] = result[i];
            }
            res.send(JSON.stringify(productList))
        }
    });
});

// 배너 (끝)
router.get('/banner/:id', function(req, res, next) {
    const id = req.params.id;
    const query = 'SELECT * FROM banners WHERE id = ? ORDER BY createdAt DESC';

    const bannerList = [];
    connection.query(query, [id], (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            for (let i = 0; i < result.length; i++) {
                bannerList[i] = result[i];
            }
            res.send(JSON.stringify(bannerList));
        }
    });
});

// 검색 (페이징 빼고 끝)
router.get('/search/:keyword/:order/:page', function(req, res, next) {
    // 키워드랑 현재 무슨 페이지인지 가져오기
    const keyword = req.params.keyword;
    const order = req.params.order;
    const page = req.params.page;
    // const page = 1;
    // order = 0: 인기순, order = 1: 최신순
    let query = '';

    if (order == 0)
        query = "SELECT * FROM products WHERE product_title LIKE concat('%', ?, '%') OR product_content LIKE concat('%', ?, '%') ORDER BY product_count DESC";
    else if (order == 1)
        query = "SELECT * FROM products WHERE product_title LIKE concat('%', ?, '%') OR product_content LIKE concat('%', ?, '%') ORDER BY createdAt DESC";

    const searchList = [];
    connection.query(query, [keyword, keyword], (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            for (let i = 0; i < result.length; i++) {
                searchList[i] = result[i];
            }
            searchList.push({length: result.length});
            // 여기서 페이지를 같이 보내줘야 페이징이 되려나
            res.send(JSON.stringify(searchList));
        }
    });
});

// 상품 게시 (get 으로 테스트했을 때 데이터 들어감)
router.post('/post', function(req, res, next) {
    // TODO: member_id 는 세션에서 가져오기
    const member_id = 's2018w18';
    let member_name = '';

    const title = req.body.title;
    const category = req.body.category;
    const price = req.body.price;
    const content = req.body.content;
    const status = req.body.status;
    const place = req.body.place;
    const swap = req.body.swap;
    const image = req.body.image;
    // const title = 'strawberry milk';
    // const category = 2;
    // const price = 30000;
    // const content = 'delicious strawberry ~';
    // const status = 0;
    // const place = '3-3';
    // const swap = 0;
    // const image = 'https://pds.joins.com/news/component/htmlphoto_mmdata/201502/04/htm_20150204185442c010c011.jpg';

    let query = 'SELECT name FROM members WHERE member_id = ?';

    connection.query(query, [member_id], (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            member_name = result[0].name;

            const values = [member_id, member_name, title, content, category, price, status, image, place, swap];

            query = 'INSERT INTO products(member_id, name, product_title, product_content, category, product_price, ' +
                'product_status, product_img, product_place, product_swap) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            connection.query(query, values, (err, result) => {
                if (err) {
                    return res.send(err);
                } else {
                    console.log('상품 등록 완료');
                    const product_id = result.insertId;
                    res.send(result.insertId);
                }
            });
        }
    });
});

// 상품 자세히 보기 (끝)
router.get('/detail/:id', function (req, res, next) {
    let id = req.params.id;
    id *= 1;

    const query = 'SELECT * FROM products WHERE id = ?';

    const productList = [];
    connection.query(query, [id], (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            for (let i = 0; i < result.length; i++) {
                productList[i] = result[i];
            }
            res.send(productList);
        }
    });
});

//
// // 카테고리별 인기있는 상품 8개
// router.get('/popular/:category', function(req, res, next) {
//     // 카테고리 불러오기
//     // var category = req.params.category;
//     var category = 1;
//     var pdt = {};
//
//     Product.findAll({
//         where: {
//             product_status: 0,
//             category: category
//         },
//         order: 'product_count DESC',
//         limit: 8
//     }).then((products) => {
//         pdt[0] = {
//             id: products.product_id,
//             title: products.product_title,
//             seller: products.name,
//             price: products.product_price,
//             image: products.product_img
//         };
//         var pdtStr = JSON.stringify(pdt);
//         res.send(pdtStr);
//     }).catch((err) => {
//         console.error('err: ' + err);
//     });
//
// });
//
// // 배너
// router.get('/banner/:id', function(req, res, next) {
//     // 배너 아이디 불러와서 하나하나 가져오기
//     var id = req.params.banner_id;
//
//     Banner.findAll({
//         where: {
//             banner_id: id
//         },
//         order: 'createdAt DESC'
//     }).then((banner) => {
//         res.json({
//             id: banner.banner_id,
//             image: banner.banner_img
//         });
//     }).catch(err => {
//         console.error('err: ' + err);
//     })
// });
//
// // 검색
// router.get('/search/:keyword/:page', function(req, res, next) {
//     // 키워드랑 현재 무슨 페이지인지 가져오기
//     var keyword = req.params.keyword;
//     var page = req.params.page;
//     // 인기순인지 최신순인지 불러오기
//     // TODO: order = 0: 인기순, order = 1: 최신순
//     // 소녀나라 예시: <a href="/shop/list.php?page=1&cate=0104&orby=1">신상품</a>
//     var order = 0;
//
//     Product.findAll({
//         where: {
//             [Op.or]: [
//                 {product_title: {
//                     [Op.like]: '%' + keyword + '%'
//                     }},
//                 {product_content: {
//                     [Op.like]: '%' + keyword + '%'
//                     }}
//             ]
//         },
//         order: 'product_count DESC'
//     }).then((products) => {
//         res.json({
//             id: products.product_id,
//             title: products.product_title,
//             seller_id: products.member_id,
//             seller: products.name,
//             content: products.product_content,
//             image: products.product_img,
//             page: page,
//             length: products.length - 1,
//             limit: 20,
//             pass: true
//         });
//     }).catch(err => {
//         console.error('err: ' + err);
//     });
// });
//
// // 상품 게시
// router.post('/post', function(req, res, next) {
//     // TODO: member_id 는 세션에서 가져오기
//     const member_id = 'jyomi';
//     let member_name = '';
//
//     User.find({
//         where: {member_id: member_id}
//     }).then((user) => {
//         member_name = user.name
//     }).catch(err => {
//         console.error('err: ' + err);
//     });
//
//     const title = req.body.title;
//     const category = req.body.category;
//     const price = req.body.price;
//     const content = req.body.content;
//     const status = req.body.status;
//     const place = req.body.place;
//     const swap = req.body.swap;
//     const image = req.body.image;
//
//     Product.create({
//         member_id: member_id,
//         name: member_name,
//         product_title: title,
//         product_content: content,
//         category: category,
//         product_price: price,
//         product_status: status,
//         product_img: image,
//         product_place: place,
//         product_swap: swap
//     }).then((result) => {
//         res.json({
//             product_id: result.product_id
//         });
//     }).catch(err => {
//         console.error('err: ' + err);
//     });
//
// });
//
// // 상품 자세히 보기
// router.get('/detail/:id', function (req, res, next) {
//     var id = req.params.product_id;
//
//     Product.findOne({
//         where: {product_id: id}
//     }).then((product) => {
//         res.json({
//             id: id,
//             seller: product.name,
//             title: product.product_title,
//             content: product.product_content,
//             category: product.category,
//             price: product.product_price,
//             status: product.product_status,
//             deal_status: product.product_deal_status,
//             image: product.product_img,
//             count: product.product_count,
//             place: product.product_place,
//             swap: product.product_swap
//         });
//     }).catch(err => {
//         console.error('err: ' + err);
//     });
// });
//
module.exports = router;