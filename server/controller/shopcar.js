const express = require('express');
const router = express.Router();

router.get('/buynow',(req,res)=>{
    console.log(req.query)
    let inform=JSON.parse(req.query.inform)
    console.log(inform)
    let img=inform.img;
    let price=inform.price;
    let title=inform.title;
    let count=req.query.count;
    let username=req.query.username;
    let sql = `insert into buyorder(title,price,img,count,username) 
    values ("${title}","${price}","${img}","${count}","${username}")`
    mydb.query(sql, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
})
router.get('/addcar',(req,res)=>{
    console.log(req.query)
    let inform=JSON.parse(req.query.inform)
    console.log(inform)
    let img=inform.img;
    let price=inform.price;
    let title=inform.title;
    let count=req.query.count;
    let username=req.query.username;
    let sql = `insert into shopcar(title,price,img,count,username) 
    values ("${title}","${price}","${img}","${count}","${username}")`
    mydb.query(sql, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
})


module.exports = router