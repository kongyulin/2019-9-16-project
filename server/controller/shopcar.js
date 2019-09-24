const express = require('express');
const router = express.Router();

// 立即购买
router.get('/buynow', (req, res) => {
    let inform = JSON.parse(req.query.inform)
    let img = inform.img;
    let price = inform.price;
    let title = inform.title;
    let count = req.query.count;
    let username = req.query.username;
    let sql = `insert into buyorder(title,price,img,count,username) 
            values ("${title}","${price}","${img}","${count}","${username}")`
    mydb.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        } else {
            res.send({
                msg: '去结算',
                shopData: result
            })
        }
    })
})

// 加入购物车
router.get('/addcar', (req, res) => {
    let inform = JSON.parse(req.query.inform)
    let img = inform.img;
    let price = inform.price;
    let title = inform.title;
    let count = req.query.count;
    let username = req.query.username;
    let sql = `select * from shopcar where username = '${req.query.username}' and title='${inform.title}' `;
    mydb.query(sql, (err, result) => {
        if (result.length == 0) {
            let sql = `insert into shopcar(title,price,img,count,username) 
            values ("${title}","${price}","${img}","${count}","${username}")`
            mydb.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    res.send({
                        msg: '添加成功',
                        shopData: result
                    })
                }
            })
        } else if (result.length == 1) {
            res.json({
                msg: '商品已在购物车',
                code: 1
            })
        }
    })
})

// 根据用户名查询购物车内的数据
router.get('/searchCar', (req, res) => {
    let sql = `select * from shopcar where username = '${req.query.username}'`;
    mydb.query(sql, (err, results) => {
        if (!err) {
            res.json(results)
        }
    })
})

// 删除购物车内的数据
router.get('/deleteShopcar', (req, res) => {
    let sql = `DELETE FROM shopcar WHERE id='${req.query.id}'`;
    mydb.query(sql, (err, results) => {
        if (!err) {
            res.json(results)
        }
    })
})

// 将订单提交到数据库
router.get('/myOrder',(req,res)=>{
    let myorder=req.query.myOrder;
    let myorder1=[];
    for(let i=0;i<myorder.length;i++){
        myorder1.push(JSON.parse(req.query.myOrder[i]))
    }
    for(let i=0;i<myorder1.length;i++){
        let title=myorder1[i].title;
        let price=myorder1[i].price;
        let img=myorder1[i].img;
        let count=myorder1[i].count;
        let username=myorder1[i].username;
        let sql = `insert into buyorder(title,price,img,count,username) 
            values ("${title}","${price}","${img}","${count}","${username}")`
            mydb.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    if(i==myorder1.length-1){
                        res.json(result)
                    }
                }
            })
    }
})

// 取出订单
router.get('/getMyorder',(req,res)=>{
    let sql = `select * from buyorder where username='${req.query.username}'`;
    mydb.query(sql, (err, results) => {
        if (!err) {
            res.json(results)
        }
    })
})

module.exports = router