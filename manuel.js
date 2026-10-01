const express = require('express')
const app = express();
const port = 3000;
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
if (req.url === "/") {
  res.end("<h1>Funciona xe eu sou o melhor</h1>");}

  

  if (req.url === "/ze") {
  res.end("<h1>ze eu sou io melhor</h1>");
  return;
}
});

server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});