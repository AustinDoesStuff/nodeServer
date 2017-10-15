const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.send({
        name: 'Austin',
        likes: ['Mable', 'Morgan', 'Pizza']
    });
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.get('/bad', (req, res) => {
    res.send({errorMessage: "you dun effed up"});
});

app.listen(3000);
