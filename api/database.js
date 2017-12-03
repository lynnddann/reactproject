/*var mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/test1707");*/  //连接到test1707 数据库
   
var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost:27017/test1707';

/**
 * 连接
 */
mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});
