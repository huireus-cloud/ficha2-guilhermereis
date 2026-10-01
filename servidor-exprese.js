const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Início</h1>");
});

app.get("/cartas", (req, res) => {
      const items = cards.map(card => `<li>${card.name}</li>`)
    res.end(`<ul>
        ${items}
    </ul>`);
    return;
});

app.get("/cartas/aleatoria", (req, res) => {
  const card = cards[Math.floor(Math.random() * cards.length)];
  res.end(`<ul><li>${card.name}</li></ul>`);
});

app.get("/sobre", (req, res) => {
    res.end("<h1>guilherme</h1>");
    return;
});

app.get("/agora", (req, res) => {
  const now = new Date().toLocaleString("pt-PT");
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<h1>hora: ${now}</h1>`);
});

app.get("/Reis-U", (req, res) => {
  res.end("<h1>boas manuel</h1>");
    return;
});

app.get("/batatas", (req, res) => {
     res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
     res.end("<h1>batatas👌</h1>");
});

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(3000, () => console.log("http://localhost:3000"));