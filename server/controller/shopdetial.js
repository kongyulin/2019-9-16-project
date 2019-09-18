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


module.exports = router