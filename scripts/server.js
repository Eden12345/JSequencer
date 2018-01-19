const express = require('express');
const path    = require('path');
const request = require('request');

const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + './../index.html'));
  // console.log('Get Request');
});

app.get('/cors', function (req, res) {
  const url = req.query.url;

  request(url, function (error, response, body) {
    if (error) {
      res.status(422).send(`Failed to connect to ${url}`);
    } else {
      res.send(body);
    }
  });
});

// Start up the server
const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`CORS demo listening on port ${port}`);
});
