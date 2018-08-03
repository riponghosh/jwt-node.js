var express=require('express');
const app=express();
var jwt = require('jsonwebtoken');

var user={
	name:'ripon',
	email:'ripon@gmail.com'
}

app.get('/',function(req,res){
	res.json({
		text:'this is index'
	});
	console.log('index');
});

app.get('/api',function(req,res){
	res.json({
		text:'this is api'
	});
	console.log('api');
});

app.get('/api/protected',function(req,res){
	var token = jwt.sign(user,"secretcheck");
	res.json({
		text:'this is api protected',
		token:token,
		decoded:jwt.verify(token, 'secretcheck')
	});
	console.log('api');
});


app.listen(3000,function(){
	console.log('App listening on port 3000');
});