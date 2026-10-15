function Card({ name, attack, type }) {
  return (
    <li className="card">
      <b>{name}</b> — ataque {attack}
      {attack >= 6 && <span className="strong">forte</span>}
    </li>
  );
}

export default Card;
