var mysql = require('mysql');
var config = require('./db_info').local;

module.exports = function() {
    return {
        init: function() {
            // mysql 에 접속.
            return mysql.createConnection({
                host: config.host,
                port: config.port,
                user: config.user,
                password: config.password,
                database: config.database
            })
        }
    }
};