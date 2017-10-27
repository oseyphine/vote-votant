const express = require('express');
const app = express();
let getCfdtDB = require("./models/cfdtdb.js");
console.log(getCfdtDB);
app.use(express.static(__dirname + '/public'));

// db.collection("votant").find().toArray((err, response) => {
// 	 console.log(response)
// });

// **** PAGE PAR DEFAUT ***

// app.get('/', function(req, res) {
//     res.setHeader('Content-Type', 'text/html');
//     res.end('Vous êtes à l\'accueil, ça va ?');
// });

// **** INDEX ***

app.get('/index', function(req, res) {
    getCfdtDB.getAllVotant( (err, votants) =>{
        getCfdtDB.getAllVote( (err, votes)=> {
            res.render('index.ejs',{
                vote: votes,
                votant: votants
            })
        });
    });
});

// **** HOME ***

app.get('/home', function(req, res) {
    getCfdtDB.getAllVotant( (err, votants) =>{
        getCfdtDB.getAllVote( (err, votes)=> {
            res.render('home.ejs',{
                vote: votes,
                votant: votants
            })
        });
    });
});

// **** CHOIX ***

app.get('/choix', function(req, res) {
    getCfdtDB.getAllVotant( (err, votants) =>{
        getCfdtDB.getAllVote( (err, votes)=> {
            res.render('choix.ejs',{
                vote: votes,
                votant: votants
            })
        });
    });
});

// **** CONFIRMATION ***

app.get('/confirmation', function(req, res) {
    getCfdtDB.getAllVotant( (err, votants) =>{
        getCfdtDB.getAllVote( (err, votes)=> {
            res.render('confirmation.ejs',{
                vote: votes,
                votant: votants
            })
        });
    });
});

// **** AVOTE! ***

app.get('/avoter', function(req, res) {
    getCfdtDB.getAllVotant( (err, votants) =>{
        getCfdtDB.getAllVote( (err, votes)=> {
            res.render('avoter.ejs',{
                vote: votes,
                votant: votants
            })
        });
    });
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.set("views", "./public/views");
app.set("views engine", "ejs");

app.listen(8080);