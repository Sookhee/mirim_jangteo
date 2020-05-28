const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '52.14.5.225',
  user: 'mirim_jangteo',
  password: 'mirim123789jangteo',
  database: 'mirim_jangteo'
});

connection.connect(err => {
  if(err) {
    return err;
  }
});

// const session = require('express-session');
//
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// const storeRouter = require('./routes/store');

const models = require('./models/index');
// var sequelize = require('./models').sequelize;

const app = express();

app.use(cors());

const sequelize = require('sequelize');
const Op = sequelize.Op;

var {User} = require('./models');
var {Sale} = require('./models');
var {Product} = require('./models');
var {Like} = require('./models');
var {Banner} = require('./models');


//
// // 마이페이지 정보 가져오기
// app.get('/mypage/:id', function(req, res, next) {
//   // TODO: member_id 는 세션에서 가져오기
//   var member_id = 'jyomi';
//
//   User.findOne({
//     where: {member_id: member_id}
//   }).then((user) => {
//     res.json({
//       name: user.name,
//       phone: user.phone
//     });
//   }).catch(err => {
//     console.error('err: ' + err);
//   });
//
// });
//
// // 내 판매 상품
// app.get('/myproduct', function(req, res, next) {
//   // TODO: member_id 세션에서 가져오기
//   var member_id = 'jyomi';
//   Product.findAll({
//     where: {
//       member_id: id
//     },
//     order: 'createdAt DESC',
//     limit: 8
//   }).then((products) => {
//     res.json({
//       id: products.product_id,
//       title: products.product_title,
//       seller: products.name,
//       price: products.product_price,
//       image: products.product_img
//     });
//   }).catch((err) => {
//     console.error('err: ' + err);
//   });
// });
//
// // 찜한 상품
// app.get('/like', function(req, res, next) {
//   // TODO: member_id 세션에서 가져오기
//   var member_id = 'jyomi';
//
//   const query = 'SELECT p.id, p.name, p.product_title, p.product_content, p.product_price FROM products AS p ' +
//       'JOIN like_lists AS l ON (p.id = l.product_id and l.member_id = :member_id';
//
//   models.sequelize.query(
//       query,
//       {
//         replacements: { member_id: 'member_id' },
//         type: QueryTypes.SELECT
//       }
//   ).then((result) => {
//     res.json(result);
//   }).catch( err => {
//     console.error('err: ' + err);
//   });
//
// });




// 카테고리별 인기있는 상품 8개
app.get('/test', (req, res) => {

  const query = 'SELECT * FROM products WHERE product_status = 0 AND category = 1';

  const productList = new Array();
  connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      for(let i = 0; i < result.length; i++){
        productList[i] = result[i];
      }
      res.send(JSON.stringify(productList))
    }
  });
  //
  // Product.find({
  //   where: {
  //     product_status: 0,
  //     category: 1
  //   }
  // }).then((products) => {
  //   return res.json({
  //     data: products
  //   });
  // }).catch(err => {
  //   return res.send(err);
  // })
});



// 카테고리별 인기있는 상품 8개
app.get('/popular/:category', function(req, res, next) {
  // 카테고리 불러오기
  // var category = req.params.category;
  var category = 1;
  var pdt = {};

  Product.findAll({
    where: {
      product_status: 0,
      category: category
    },
    order: 'product_count DESC',
    limit: 8
  }).then((products) => {
    res.json({
      data: products
    });
  }).catch((err) => {
    console.error('err: ' + err);
    res.send(err);
  });

});

// 배너
app.get('/banner/:id', function(req, res, next) {
  // 배너 아이디 불러와서 하나하나 가져오기
  var id = req.params.banner_id;

  Banner.findAll({
    where: {
      banner_id: id
    },
    order: 'createdAt DESC'
  }).then((banner) => {
    res.json({
      data: banner
    });
  }).catch(err => {
    console.error('err: ' + err);
    res.send(err);
  })
});

// 검색
app.get('/search/:keyword/:page', function(req, res, next) {
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
      data: products
    });
  }).catch(err => {
    console.error('err: ' + err);
    res.send(err);
  });
});

// 상품 게시
app.post('/post', function(req, res, next) {
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
      data: result
    });
  }).catch(err => {
    console.error('err: ' + err);
    res.send(err);
  });

});

// 상품 자세히 보기
app.get('/detail/:id', function (req, res, next) {
  var id = req.params.product_id;

  Product.findOne({
    where: {product_id: id}
  }).then((product) => {
    res.json({
      data: product
    });
  }).catch(err => {
    console.error('err: ' + err);
  });
});

app.listen(5000, () => {
  console.log('5000 포트로 연결됨 ??');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/store', storeRouter);

models.sequelize.sync().then( () => {
  console.log(' DB 연결 성공 ');
}).catch(err => {
  console.log(' DB 연결 실패 ');
  console.log(err);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//
// app.use(session({
//   key: 'sid',
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     maxAge: 24000 * 60 * 60
//   }
// }));

module.exports = app;
