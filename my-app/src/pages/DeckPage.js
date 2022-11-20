import './DeckPage.css';
import DeckContainer from '../components/deck-container/DeckContainer';

function DeckPage(props) {
  props.setIsDeckPageOpen(true);
  props.setIsShared(false);
  
    return (
        <div className="DeckPage">
          <DeckContainer setCurrentDeckIndex={props.setCurrentDeckIndex} setCurrentCardIndex={props.setCurrentCardIndex}/>
        </div>
      );
}

export default DeckPage;
