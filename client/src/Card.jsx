function Card({ name, attack, type }) {
  return (
    <li className="card">
      <b>{name}</b> — ataque {attack}
    </li>
  );
}

export default Card;
