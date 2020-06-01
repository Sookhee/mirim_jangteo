const express = require('express');
const router = express.Router();
const mysql_odbc = require('../db/db_conn')();
const connection = mysql_odbc.init();

// const models = require('../models');
// var {User} = require('../models');
// var {Sale} = require('../models');
// var {Product} = require('../models');
// var {Like} = require('../models');
//
// const { QueryTypes } = require('sequelize');
// // const crypto = require('crypto');


router.post('/login', function(req, res, next) {
    const {member_id, pwd} = query;

    let query = "SELECT pwd FROM members WHERE member_id = ?";
    connection.query(query, [member_id], (err, result) => {
        if (err) {
            console.log('아이디 잘못 입력');
            return res.send(err);
        } else {
            const dbPwd = result[0];
            if (pwd === dbPwd) {
                console.log('로그인 완료');
                req.session.logined = true;
                req.session.id = member_id;
                console.log(req.sessionId);
                res.send({id: req.session.id});
            }
        }
    });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.clearCookie('sid');

  res.redirect('/users/login');
});

router.post('/join', async function(req, res, next) {
    const {member_id, pwd, name, phone} = query;

    // crypto...
    // let salt = Math.round(new Date().valueOf() * Math.random()) + "";
    // let hashPassword = crypto.createHash('sha512').update(pwd + salt).digest('hex');
    let values = [member_id, pwd, name, phone];
    let query = "INSERT INTO members VALUES(?, ?, ?, ?, NOW(), NOW())";
    connection.query(query, values, (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            res.send(result.insertId);
        }
    });

});



// 마이페이지 정보 가져오기
router.get('/mypage/:id', function(req, res, next) {
    // TODO: member_id 는 세션에서 가져오기
    const member_id = req.params.id;

    const memberInfo = [];

    const query = 'SELECT * FROM members WHERE member_id = ?';
    connection.query(query, [member_id], (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            if (result === [])
                console.log('값이 없습니다.');
            for (let i = 0; i < result.length; i++) {
                memberInfo[i] = result[i];
            }
            res.send(memberInfo);
        }
    });
});

// 내 판매 상품
router.get('/myproduct/:member_id', function(req, res, next) {
    // TODO: member_id 세션에서 가져오기
    var member_id = 's2018w18';

    const productList = [];
    const query = 'SELECT * FROM products WHERE member_id = ? ORDER BY createdAt DESC';
    connection.query(query, [member_id], (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            for (let i = 0; i < result.length; i++) {
                productList[i] = result[i];
            }
            productList.push({length: result.length});
            res.send(productList);
        }
    });
});

// 찜한 상품
router.get('/like/:member_id', function(req, res, next) {
    // TODO: member_id 세션에서 가져오기
    var member_id = 's2018w01';

    const likeList = [];
    const query = 'SELECT p.id, p.name, p.product_title, p.product_content, p.product_price FROM products AS p ' +
        'JOIN like_lists AS l ON (p.id = l.product_id and l.member_id = ?)';
    connection.query(query, [member_id], (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            for (let i = 0; i < result.length; i++) {
                likeList[i] = result[i];
            }
            likeList.push({length: result.length});
            res.send(likeList);
        }
    });
});














// // 마이페이지 정보 가져오기
// router.get('/mypage/:id', function(req, res, next) {
//     // TODO: member_id 는 세션에서 가져오기
//     var member_id = 'jyomi';
//
//     User.findOne({
//         where: {member_id: member_id}
//     }).then((user) => {
//         res.json({
//             name: user.name,
//             phone: user.phone
//         });
//     }).catch(err => {
//         console.error('err: ' + err);
//     });
//
// });
//
// // 내 판매 상품
// router.get('/myproduct', function(req, res, next) {
//     // TODO: member_id 세션에서 가져오기
//     var member_id = 'jyomi';
//     Product.findAll({
//         where: {
//             member_id: id
//         },
//         order: 'createdAt DESC',
//         limit: 8
//     }).then((products) => {
//         res.json({
//             id: products.product_id,
//             title: products.product_title,
//             seller: products.name,
//             price: products.product_price,
//             image: products.product_img
//         });
//     }).catch((err) => {
//         console.error('err: ' + err);
//     });
// });
//
// // 찜한 상품
// router.get('/like', function(req, res, next) {
//     // TODO: member_id 세션에서 가져오기
//     var member_id = 'jyomi';
//
//     const query = 'SELECT p.id, p.name, p.product_title, p.product_content, p.product_price FROM products AS p ' +
//         'JOIN like_lists AS l ON (p.id = l.product_id and l.member_id = :member_id';
//
//     models.sequelize.query(
//         query,
//         {
//             replacements: { member_id: 'member_id' },
//             type: QueryTypes.SELECT
//         }
//     ).then((result) => {
//         res.json(result);
//     }).catch( err => {
//         console.error('err: ' + err);
//     });
//
// });
//
//
//
// router.get('/sign-up', function(req, res, next) {
//   res.render('users/signup');
// });
//

// router.get('/sign-in', function(req, res, next) {
//   let session = req.session;
//
//   res.render('users/login', {
//     session: session
//   });
// });
//
// router.post('/sign-in', async function(req, res, next) {
//   let body = req.body;
//
//   let result = await models.user.findOne({
//     where: {
//       email: body.email
//     }
//   });
//
//   let dbPassword = result.dataValues.password;
//   let inputPassword = body.password;
//
//   if (dbPassword = inputPassword) {
//     console.log('비밀번호 일치');
//
//     req.session.email = body.userEmail;
//
//     res.redirect('/users');
//
//   //  view 에서 if (session.email) { } else { } 사용
//
//   } else {
//     console.log('비밀번호 불일치');
//     res.redirect('/users/sign-in');
//   }
//
// });
//
// router.get('/logout', function(req, res, next) {
//   req.session.destroy();
//   res.clearCookie('sid');
//
//   res.redirect('/users/sign-in');
// });
//
//
module.exports = router;