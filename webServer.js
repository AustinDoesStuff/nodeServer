const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.render('index.hbs', {
        pageTitle: 'Welcome',
        curYear: new Date().getFullYear(),
        welcomeMessage: 'Ur an idiot, lol'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About',
        curYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({errorMessage: "you dun effed up"});
});

app.listen(3000);
