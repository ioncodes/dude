const express = require('express');
const pug = require('pug');
const app = express();

app.set('view_engine', 'pug');
app.use('/uikit', express.static(__dirname + '/node_modules/uikit/dist/'));
app.use('/css', express.static(__dirname + '/public/css/'));
app.use('/js', express.static(__dirname + '/public/js/'));

const home = pug.compileFile('templates/home.pug');

app.get('/', function (req, res) {
  res.send(home({
    token: 'sd'
  }));
});

app.listen(3000, function () {
  console.log('dude is listening on port 3000!');
});
