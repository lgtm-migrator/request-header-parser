const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const {getIP, getLanguage, getOS} = require('./utils/request-data');
const express = require('express');
const os = require('os');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
app.use(express.static(publicPath));

app.get('/api/whoami', (req, res) => {
  res.send({
    ipaddress: getIP(req),
    language: getLanguage(req),
    software: getOS(req)
  });
});

server.listen(port, () => {
  console.log(`Request Header Parser is listening on port ${port}!`);
})
