import "./Deck.css";
import {Link} from "react-router-dom";
import {useState} from "react";

function Deck(props) {
  const [isHelpButtonClicked, setIsHelpButtonClicked] = useState(false);

  const handleClickHelp = () => {
    console.log(isHelpButtonClicked)
    setIsHelpButtonClicked(!isHelpButtonClicked);
  }

  return (
    <div className="Deck">
        <div className = "help_button" onClick={handleClickHelp}>
            <h3>{isHelpButtonClicked ? "X" : "?"}</h3>
        </div>
          <div className={isHelpButtonClicked ? "hide" : "show"} onClick={()=>props.setCurrentDeckIndex(props.index)}>
          <Link to="/card-page">
            <div className ="image_container">
                  <img src={require("../../data/" + props.imageURL)} alt="Deck"/>
              </div>
              <div className = "text_container">
                  <h1>{props.name}</h1>
                  <h2>By {props.author}</h2>
              </div>
          </Link>
          </div>
        <div className={isHelpButtonClicked ? "show" : "hide"}>props.summary</div>
    </div>
  );
}

export default Deck;
