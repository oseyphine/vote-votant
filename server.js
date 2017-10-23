let express = require('express');
let app = express();
let getCfdtDB = require("./models/cfdtdb.js");
 console.log(getCfdtDB)

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end('Vous êtes à l\'accueil, ça va ?');
});

app.get('/index', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('index.ejs', {});
});

app.get('/home', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('home.ejs', {});
});

// app.get('/choix', function(req, res) {
//     res.setHeader('Content-Type', 'text/html');
//     res.render('choix.ejs', {});
// });

// app.get('/confirmation', function(req, res) {
//     res.setHeader('Content-Type', 'text/html');
//     res.render('confirmation.ejs', {});
// });

// app.get('/avoter', function(req, res) {
//     res.setHeader('Content-Type', 'text/html');
//     res.render('avoter.ejs', {});
// });

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(express.static(__dirname + '/public'));

app.set("views", "./public/views");
app.set("views engine", "ejs");

app.listen(8080);