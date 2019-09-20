const express = require('express');
const app=express();
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// 启用cookie
let secret = 'app.h5190304.com';
app.use(cookieParser(secret));
// 启用session
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 3600000 }
}))

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

// 首页数据
app.get('/home', (req, res) => {
    let sql = `SELECT * FROM slider`
    mydb.query(sql, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
})


// 登录/注册  子路由
app.use('/user', require('./controller/login'))

// 搜索页面数据  子路由
app.use('/shop',require('./controller/shopdetial'))

// 静态托管
app.use(express.static(__dirname+"/root"))

app.listen(8081,()=>{
    console.log('Server started on 8081')
})
