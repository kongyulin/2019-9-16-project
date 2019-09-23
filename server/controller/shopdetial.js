const express = require('express');
const router = express.Router();

router.post('/shoplist',(req,res)=>{
    let sql = `SELECT * FROM shoplist`
    mydb.query(sql, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
})
router.get('/searchlist',(req,res)=>{
    // console.log(req.query)
    let sql = `SELECT * FROM shoplist where title like '%${req.query.searchword}%'`
    mydb.query(sql, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })
})


module.exports = router