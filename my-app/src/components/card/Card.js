import "./Card.css";
import data from "../../data/decks.json";

function Card(props) {
  const decks = data.decks;
  const name = decks ? decks[props.currentDeckIndex].content.name : "No Deck Selected";
  const content = decks ? decks[props.currentDeckIndex].cards[props.currentCardIndex].content.text : "Empty Card"; 

  return (
    <div className="Card">
        <h1>{name}</h1>
        <p>{content}</p>
    </div>
  );
}

export default Card;
