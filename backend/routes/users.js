const express = require('express');

const router = express.Router();

const models = require('../models');
var {User} = require('../models');
var {Sale} = require('../models');
var {Product} = require('../models');
var {Like} = require('../models');

const { QueryTypes } = require('sequelize');
// const crypto = require('crypto');

// 마이페이지 정보 가져오기
router.get('/mypage/:id', function(req, res, next) {
    // TODO: member_id 는 세션에서 가져오기
    var member_id = 'jyomi';

    User.findOne({
        where: {member_id: member_id}
    }).then((user) => {
        res.json({
            name: user.name,
            phone: user.phone
        });
    }).catch(err => {
        console.error('err: ' + err);
    });

});

// 내 판매 상품
router.get('/myproduct', function(req, res, next) {
    // TODO: member_id 세션에서 가져오기
    var member_id = 'jyomi';
    Product.findAll({
        where: {
            member_id: id
        },
        order: 'createdAt DESC',
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

// 찜한 상품
router.get('/like', function(req, res, next) {
    // TODO: member_id 세션에서 가져오기
    var member_id = 'jyomi';

    const query = 'SELECT p.id, p.name, p.product_title, p.product_content, p.product_price FROM products AS p ' +
        'JOIN like_lists AS l ON (p.id = l.product_id and l.member_id = :member_id';

    models.sequelize.query(
        query,
        {
            replacements: { member_id: 'member_id' },
            type: QueryTypes.SELECT
        }
    ).then((result) => {
        res.json(result);
    }).catch( err => {
        console.error('err: ' + err);
    });

});



router.get('/sign-up', function(req, res, next) {
  res.render('users/signup');
});

router.post('/sign-up', async function(req, res, next) {
  // let body = req.body;
  //
  // let inputPassword = body.password;
  // let result = models.user.create({
  //   name: body.userName,
  //   email: body.userEmail,
  //   password: inputPassword
  // });

  // 암호화
  // let salt = Math.round(new Date().valueOf() * Math.random()) + "";
  // let hashPassword = crypto.createHash('sha512').update(inputPassword + salt).digest("hex");
  // let result = models.user.create({
  //   name: body.userName,
  //   email: body.userEmail,
  //   password: hashPassword,
  //   salt: salt
  // });

  res.redirect('/users/sign-up')

});

router.get('/sign-in', function(req, res, next) {
  let session = req.session;
  
  res.render('users/login', {
    session: session
  });
});

router.post('/sign-in', async function(req, res, next) {
  let body = req.body;

  let result = await models.user.findOne({
    where: {
      email: body.email
    }
  });

  let dbPassword = result.dataValues.password;
  let inputPassword = body.password;

  if (dbPassword = inputPassword) {
    console.log('비밀번호 일치');

    req.session.email = body.userEmail;

    res.redirect('/users');

  //  view 에서 if (session.email) { } else { } 사용

  } else {
    console.log('비밀번호 불일치');
    res.redirect('/users/sign-in');
  }

});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.clearCookie('sid');

  res.redirect('/users/sign-in');
});


module.exports = router;
