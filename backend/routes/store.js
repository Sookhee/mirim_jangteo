const express = require('express');
const router = express.Router();
const mysql_odbc = require('../db/db_conn')();
const conn = mysql_odbc.init();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.redirect('/store/list/1');
});

router.get('/list/:page', function(req, res, next) {
    var page = req.params.page;
    var sql = "SELECT";
    conn.query(sql, function(err, rows) {
        if (err)
            console.error('error: ' + err);
        console.log(rows.length-1);
        res.render('list', { title: '메인 리스트', rows: rows, page: page,
            length: rows.length-1, page_num: 5, pass: true });
    });
});

router.get('/write', function(req, res, next) {
    res.render('write');
});

router.get('/detail/:index', function(req, res, next) {
    res.render('detail');
});

module.exports = router;
