import './DeckPage.css';
import Nav from '../components/nav/Nav';
import DeckContainer from '../components/deck-container/DeckContainer';

function DeckPage(props) {
    return (
        <div className="DeckPage">
          <div className="top_container">
            <Nav/>
            <h1 className="header">Pick a Deck.</h1>
          </div>
          <DeckContainer setCurrentDeckIndex={props.setCurrentDeckIndex}/>
        </div>
      );
}

export default DeckPage;
