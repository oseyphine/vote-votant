const express = require('express');
const app = express();
let getCfdtDB = require("./models/cfdtdb.js");

app.use(express.static(__dirname + '/public'));

// db.collection("votant").find().toArray((err, response) => {
// 	 console.log(response)
// });

// app.get('/', function(req, res) {
//     res.setHeader('Content-Type', 'text/html');
//     res.end('Vous êtes à l\'accueil, ça va ?');
// });

// app.get('/index', function(req, res) {
//     res.setHeader('Content-Type', 'text/html');
// 		res.render('index.ejs', 
// 			{
// 				vote : 
// 				getCfdtDB.getAllVote((err, response) =>{ 
// 					console.log(response)
// 					for (let i=0; i<response.length; i++){
// 						console.log(response[i])
// 					}
// 				}),
// 				votant:
// 				getCfdtDB.getAllVotant((err1, response1) =>{
// 					console.log(response1)
// 					for (let i=0; i<response.length; i++){
// 						console.log(response1[i])
// 					}				
// 				})
// 			});
// 	});

app.get('/home', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    getCfdtDB.getAllVotant((err, response) =>{
 		console.log(response);
 		res.render('home.ejs', {votant : response});
	});
});

app.get('/home', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
	
    getCfdtDB.getAllVote((err, response) =>{
 		console.log(response);
 		res.render('home.ejs', {vote : response});
	});
});

app.get('/choix', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    getCfdtDB.getAllVotant((err, response) =>{
 		console.log(response);
 		res.render('choix.ejs', {votant : response});
	});
});

// app.get('/choix', function(req, res) {
//     res.setHeader('Content-Type', 'text/html');
//     getCfdtDB.getAllVote((err, response) =>{
//  		console.log(response);
//  		res.render('choix.ejs', {vote : response});
// 	});
// });

app.get('/confirmation', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('confirmation.ejs', {});
});

app.get('/avoter', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('avoter.ejs', {});
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.set("views", "./public/views");
app.set("views engine", "ejs");

app.listen(8080);