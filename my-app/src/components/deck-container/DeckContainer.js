import "./DeckContainer.css"
import Deck from "../deck/Deck"
import { Link } from "react-router-dom";

function DeckContainer() {

  return (
    <div className="DeckContainer">
      <Link to="/card-page"><Deck/></Link>
      <Link to="/card-page"><Deck/></Link>
      <Link to="/card-page"><Deck/></Link>
    </div>
  );
}

export default DeckContainer;
