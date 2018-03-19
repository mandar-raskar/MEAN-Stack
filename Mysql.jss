var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static('public'));

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'abc'
});

connection.connect();

app.get('/', function(req,res){
	res.sendFile(_dirname +'/home/mandar/Programs/Mysql.html');
});

app.post('/data', function(req,res){
  var username = req.body.uname;
  //var password = req.body.password;
  //var cpassword = req.body.cpassword;
  //var email = req.body.uemail;

  connection.query("INSERT INTO 'Data' (uname) VALUES (?)", username.toString(), function(err,result){
  	if (err) throw err;
  	
  	console.log('1 record inserted');
  });
  res.send(username);
});

connection.end();

app.listen(3000,function(){
	console.log('server is running');
})


