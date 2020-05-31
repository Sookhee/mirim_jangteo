
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

const session = require('express-session');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// const storeRouter = require('./routes/store');

const models = require('./models/index');
// var sequelize = require('./models').sequelize;

const app = express();

app.use(cors());

// const sequelize = require('sequelize');
// const Op = sequelize.Op;
//
// var {User} = require('./models');
// var {Sale} = require('./models');
// var {Product} = require('./models');
// var {Like} = require('./models');
// var {Banner} = require('./models');



// 마이페이지 정보 가져오기
app.get('/mypage/:id', function(req, res, next) {
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
app.get('/myproduct/:member_id', function(req, res, next) {
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
      res.send(productList);
    }
  });
});

// 찜한 상품
app.get('/like/:member_id', function(req, res, next) {
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
      res.send(likeList);
    }
  });
});


// 카테고리별 인기있는 상품 8개 (끝)
app.get('/popular/:category', (req, res) => {
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
app.get('/banner/:id', function(req, res, next) {
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
app.get('/search/:keyword/:order/:page', function(req, res, next) {
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
      // 여기서 페이지를 같이 보내줘야 페이징이 되려나
      res.send(JSON.stringify(searchList));
    }
  });
});

// 상품 게시 (get 으로 테스트했을 때 데이터 들어감)
app.post('/post', function(req, res, next) {
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
app.get('/detail/:id', function (req, res, next) {
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

app.listen(5000, () => {
  console.log('5000 포트로 연결됨');
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