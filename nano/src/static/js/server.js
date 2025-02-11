
var fs = require('fs');
var http = require('http');
var https = require('https');

var privateKey = '';
var certificate = '';

if (fs.existsSync('poweradmin.com.br.key')) {
  //openssl x509 -text -in poweradmin.com.br.pem -out poweradmin.com.br.crt
  privateKey = fs.readFileSync('poweradmin.com.br.key', 'utf8');
  certificate = fs.readFileSync('poweradmin.com.br.crt', 'utf8');
}

var credentials = { key: privateKey, cert: certificate };

const compression = require('compression');
const express = require("express");
const path = require("path");
const app = express();

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res);
};

app.use(compression({ filter: shouldCompress, threshold: 0 }));
app.use("/src", express.static(path.resolve(__dirname, "src")));

app.get("/", (req, res) => { res.sendFile(path.resolve(__dirname, "./index_dashboard.html")); });

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

console.log("Server running...")

httpServer.listen(10961);
httpsServer.listen(443);