const http = require("http");
 
const PORT = 3000;
 
const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Mago do Fogo", type: "Mago", attack: 6, defense: 3 },
  { name: "Cavaleiro das Sombras", type: "Criatura", attack: 5, defense: 6 },
  { name: "Feiticeira da Lua", type: "Mago", attack: 3, defense: 7 },
];
 
 

 
 
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
 
   if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>ola sou eu</h1>");
  }

  if (req.url === "/cartas") {
    const items = cards.map(card => `<li>${card.name}</li>`)
    res.end(`<ul>
        ${items}
    </ul>`);
    return;
  }

    if (req.url === "/cartas/aleatoria") {
      const card = cards[Math.floor(Math.random() * cards.length)];
      res.end(`<ul><li>${card.name}</li></ul>`);
    return;
  }
 
  if (req.url === "/sobre") {
    res.end("<h1>guilherme</h1>");
    return;
  }
 
    if (req.url === "/agora") {
      
      const now = new Date().toLocaleString("pt-PT");
     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`<h1>hora: ${now}</h1>`);
  }
 

  if (req.url === "/Reis-U") {
    res.end("<h1>boas manuel</h1>");
    return;
  }

  if (req.url === "/batatas") {

     res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
     res.end("<h1>batatas👌</h1>");
     
  }

});
 
 
server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});
 
 
 
 
 