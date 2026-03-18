const http = require("http");

// hum client ko message isi se bhejenge
// const server = http.createServer((req, res) => {
//   res.end("Hello World");
// });

// Routing
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello Coder Army");
  } else if (req.url === "/about") {
    res.end("This is about page");
  }else if(req.url === "/contact"){
    res.end("Contact Page");
  }
});

server.listen(4000, () => {
  console.log("I'm listening on port number 4000");
});

// How to host 1. Bahar jake host kar sakte h
//2. System me host kar sakte h --> localhost  --> node index.js
