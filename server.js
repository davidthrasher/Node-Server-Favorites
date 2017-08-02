var http = require("http");
var fs = require("fs");
var url = require("url");

var PORT = 8080;

var server = http.createServer(handleRequest);


function handleRequest(req, res) {

  var urlParts = url.parse(req.url);

  switch(urlParts.pathname) {
    case "/":
    displayIndex(req, res);
    break;

    case "/food":
    displayFood(req, res);
    break;

    case "/frameworks":
    displayFrameworks(req, res);
    break;

    case "/movies":
    displayMovies(req, res);
    break;
    default:
    display404(urlParts.pathname, req, res);
  }
}

function displayIndex(req, res) {
  fs.readFile(__dirname + "/index.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function displayFood(req, res) {
  fs.readFile(__dirname + "/food.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function displayFrameworks(req, res) {
  fs.readFile(__dirname + "/frameworks.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function displayMovies(req, res) {
  fs.readFile(__dirname + "/movies.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}

server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});
