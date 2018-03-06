var express = require('express');
var router = express.Router();
var mysql = require('mysql');
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {

    var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database : process.env.DB_NAME
    });

    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT izena FROM kalea ORDER BY izena", function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    });

});

module.exports = router;
