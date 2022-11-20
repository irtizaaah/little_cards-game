import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
        <h1>{props.name}</h1>
        <p>{props.text}</p>
    </div>
  );
}

export default Card;
