const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express'); 

const app = express();

const privateKey = fs.readFileSync('/etc/letsencrypt/live/stream.wnam.ru/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/stream.wnam.ru/fullchain.pem', 'utf8');

app.use(express.static('/var/www/html'));

http.createServer({
}, app).listen(8080, () => {
  console.log('http server listen on port 8080');
});


https.createServer({
  key: privateKey,
  cert: certificate
}, app).listen(445, () => {
  console.log('https server listen on port 445');
});
