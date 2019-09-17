const express = require('express');
const app=express();
const mysql = require('mysql');

// 跨域
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    // 支持cookie  必须指定具体的域名 
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// 数据库连接
global.mydb = mysql.createConnection({   
    host: 'cdb-a9y1iffo.cd.tencentcdb.com',
    user: 'root',
    password: 'cdhq1234',
    database: 'ThreeFlower',
    port: '10055',
    multipleStatements: true
});
mydb.connect();

app.use('/home',require('./controller/home'))




app.listen(8081,()=>{
    console.log('Server started on 8081')
})
