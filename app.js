var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 5000));

app.get('/getTeam',function (req, res) {
    res.json({count: 5})
});

app.post('/postTeam',function (req, res) {

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
