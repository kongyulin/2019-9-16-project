const express = require('express');
const router = express.Router();

// 登录
router.post('/login', (req, res) => {
    // console.log(req.body)
    let sql = "select * from user where ";
    sql += `name="${req.body.name}" `;
    mydb.query(sql, function (err, results) {
        if (results.length == 0) {
            res.json({
                msg: "none"
            })
        } else if (results.length == 1) {
            console.log(results)
            if (results[0].pass == req.body.pass) {
                res.json({
                    msg: "same",
                    userinfo: results[0]
                })
            } else {
                res.json({
                    msg: "different"
                })
            }
        }
    })
})

// 注册
router.post("/register", function (req, res) {
	// console.log(req.body)
	var sql = "select * from user where 1 ";
	if (req.body.name) {
		sql += " AND name= '" + req.body.name + "'";
	}
	mydb.query(sql, function (err, results) {
		if (results.length > 0) {
			res.json({
				msg: "username_already_exist"
			})
		} else {
			let newsql = `insert into user(name,pass) values ("${req.body.name}","${req.body.pass}")`;
			console.log(newsql)
			mydb.query(newsql, (err, results) => {
				if (err) {
					console.log(err);
					return;
				} else {
					res.json({
						msg: "reg_success"
					})
				}
			})
		}
	})
});

// 修改昵称
router.post('/nickname',(req,res)=>{
	// console.log(req.body)
	let sql =` UPDATE user SET nickname='${req.body.nickname}' WHERE id = ${req.body.id}`;
	mydb.query(sql, (err, result) => {
		if (err) {
			console.log(err);
			return;
		} else {
			let sql = `select * from user where id = ${req.body.id} `;
			mydb.query(sql, (err, result) => {
				if (err) {
					console.log(err);
					return;
				} else {
					res.send(result)
				}
			})
		}
    })
})


module.exports = router