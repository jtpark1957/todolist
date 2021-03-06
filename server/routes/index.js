const express = require('express');
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createPool({
    host:'localhost',
    // port:3306,
    user:'root',
    password:'',
    database:'todolist'
});
router.post('/dbtest', function(req, res)  {

    const title = req.body.title;
    const body = req.body.body;
    const sqlInsert = "INSERT INTO article (regDate, title, body) VALUES (NOW(), ?, ?);"
    db.query(sqlInsert, [title, body], (err, result)=> {
        res.send("hello worlds");
        console.log(err+ "글이 작성되었습니다");
    });
});

router.get("/employees", (req, res) => {
    db.query("SELECT * FROM article", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

router.get('/asd', (req, res) => {
    res.send("asdasdasd");
});
module.exports = router;