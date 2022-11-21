import './DeckPage.css';
import DeckContainer from '../components/deck-container/DeckContainer';

function DeckPage(props) {
  props.setIsDeckPageOpen(true); // show title in top-container in App.js
  props.setIsShared(false); // don't split the deck
  
    return (
        <div className="DeckPage">
          <DeckContainer setCurrentDeckIndex={props.setCurrentDeckIndex} setCurrentCardIndex={props.setCurrentCardIndex}/>
        </div>
      );
}

export default DeckPage;
