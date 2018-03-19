var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var path = require('path');
var fs = require('fs');
var mysql = require('mysql');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static('public'));
//app.use(express.static(__dirname + '/home/mandar/Programs'))

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'Mandar',
	password : '123456789',
	database : 'Mandar',
	port : '3306'
});

connection.connect();

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/Formvalidation.html'));
	

});


app.post('/data',function(req,res){
	//res.sendFile(path.join(__dirname + '/Formvalidation.html'));
	var firstname = req.body.fname;
	var lastname = req.body.lname;
	var password = req.body.upass;
	var cpassword = req.body.cpass;
	var email = req.body.uemail;
	var address = req.body.uadd;
	var gender = req.body.ugen;
	var dob = req.body.udob;
	var mobile = req.body.umob;

	connection.query("insert into register1 (fname,lname,pass,cpass,email,address,gender,dob,Mobile) VALUES (?,?,?,?,?,?,?,?,?)",[firstname.toString(),lastname.toString(),password.toString(),cpassword.toString(),email.toString(),address.toString(),gender.toString(),dob.toString(),mobile.toString()], function(err,result){
		if (err) throw err;

	});
	res.send(firstname + 'successfully registered')

});

app.get('/login', function(req,res){
	res.sendFile(path.join(__dirname + '/login.html'));
	

});


app.get('/login',function(req,res){
	var email = req.query.uname;
	var pass = req.query.upass;
	
	connection.query("select password from register1 where email = '" + email + "'", 
		function (err, rows, fields) {
		  if (err)
		  	throw err
		 if(rows[0].password.localeCompare(pass) == 0){
		 	console.log('user authetication complete');
		 	res.send('welcome to our application');
		 }
		 else{
			res.send("password incorrect"); 	
		 }
	});
});

app.listen(3000,function(){
	console.log('server is running');
})