import "./DeckContainer.css"
import Deck from "../deck/Deck"
import { Link } from "react-router-dom";
import data from "../../data/decks.json";

function DeckContainer(props) {

  let deckComponents = data.decks.map((deck, index)=> 
      <Deck 
        className = "deck"
        name={deck.content.name} 
        author={deck.content.author} 
        imageURL={deck.content.imageURL} 
        summary={deck.content.summary} 
        index={index} 
        key={deck.id}
        setCurrentDeckIndex={props.setCurrentDeckIndex}
        setCurrentCardIndex={props.setCurrentCardIndex}
      />
  );

  return (
    <div className="DeckContainer">
      {deckComponents}
    </div>
  );
}

export default DeckContainer;
