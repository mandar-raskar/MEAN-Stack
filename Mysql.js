var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var fs = require('fs');
var path = require('path');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static('public'));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'Mandar',
  password : '123456789',
  database : 'mydb',
  port	   : '3306'
});

connection.connect();

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname +'/Mysql.html'));
});

app.post('/data', function(req,res){
  var username = req.body.uname;
  var password = req.body.password;
  var cpassword = req.body.cpassword;
  var email = req.body.uemail;

  connection.query("insert into register (name,password,email) VALUES (?,?,?)", [username.toString(),password.toString(),email.toString()], function(err,result){
  	if (err) throw err;
  	
  	console.log('1 record inserted');
  });
  res.send(username);
  res.send(password);
  res.send(email);
});

app.post('/data1', function(req,res){
	connection.query("select password from register where email = '"+ email , function(err,result){
		if (err) throw err;
		
	})
})

//connection.end();

app.listen(3000,function(){
	console.log('server is running');
})


