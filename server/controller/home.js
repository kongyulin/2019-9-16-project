const express = require('express');
const router = express.Router();
router.get('/home', (req, res) => {
    let sql = `SELECT * FROM slider`
    mydb.query(sql, (err, result) => {
        if (!err) {
            res.send(result)
        }
    })

})


module.exports = router