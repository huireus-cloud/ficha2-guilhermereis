import Card from "./Card";

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Mago do Fogo", type: "Feitiço", attack: 6, defense: 3 },
  { name: "Cavaleiro das Sombras", type: "Criatura", attack: 5, defense: 6 },
  { name: "Feiticeira da Lua", type: "Feitiço", attack: 3, defense: 7 },
];

function App() {
  return (
    <main>
      <h1>A minha coleção</h1>
      <ul>
        {cards.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </ul>
    </main>
  );
}

export default App;
