const express = require('express');

const router = express.Router();

// const models = require('../models');
var {User} = require('../models');
var {Sale} = require('../models');
var {Product} = require('../models');
var {Like} = require('../models');
// const crypto = require('crypto');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/users/mypage');
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

router.get('/mypage/:user_id', function(req, res, next) {
  // if (req.cookies) {
  //   console.log(req.cookies);
  var user, products, likes;

    // member_id 는 세션에서 가져오기
    User.find({where: {member_id: id}})
        .then((member) => {
          Sale.count({where: {member_id: id}})
              .then((count) => {
                console.log('name: ' + member.name + ' phone: ' + member.phone + ' sell_count: ' + count);
                user = {
                  id: 1,
                  name: member.name,
                  phone: member.phone,
                  sell_count: count };
              });
        });
    
    Product.find({where: {member_id: id}})
        .then((product) => {
          products = {
            id: product.product_id,
            title: product.product_title,
            seller: product.name,
            price: product.product_price,
            image: product.product_img
          }
        });

    Like.find({where: {member_id: id}}, {order: 'createdAt DESC'})
        .then((like) => {
          Product.find({where: {product_id: like.product_id}})
              .then((prd) => {
                likes = {
                  id: prd.product_id,
                  title: prd.product_title,
                  seller: prd.name,
                  price: prd.product_price,
                  image: prd.product_img
                }
              });
        });

    res.json({
      user: user,
      products: products,
      likes: likes
    });

    // res.render('users/mypage');
  // } else {
  //   console.log('로그인하세요');
  //   res.redirect('/users/sign-in');
  // }
});

module.exports = router;
