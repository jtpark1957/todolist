var express = require('express');
var router = express.Router();
var mysql = require('mysql');


const connection = mysql.createConnection({
    host:'localhost',
    // port:3306,
    user:'root',
    password:'',
    database:'todolist'
});
connection.connect();

router.get('/',(req,res) => {
    console.log('http://localhost:3001/api/');
    res.send({title: 'hello react!'});
});
router.post("/idplz", (req,res)=>{
    const serverid = req.body.plzid;
    console.log(serverid);
    const sendText = {
        text : "열심히 코딩 중",
    };
    res.send(sendText);
    
});
router.post("/callbody", (req,res)=>{
    connection.query("SELECT * FROM article",
    function(err,rows,fields){
        if(err){
            console.log("불러오기 실패");
        }else{
            console.log("불러오기 성공");
            console.log(rows[0]['id']);
            res.send(rows[0]);
        }
    })
});
router.post('/text', function(req, res) {
    const text1 = req.body.inText;
    console.log(text1);
  });
router.get('/project/select', function(req,res){
    
    connection.query('SELECT * from article', (err, rows,fields) => {
        if (err) {
            console.log("데이터 가져오기 실패");
        } else {
            res.send(rows);
        }
    })
});


module.exports = router;