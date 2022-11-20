import './App.css';
import CardPage from './pages/CardPage';
import DeckPage from './pages/DeckPage';
import {Route, Routes} from "react-router-dom";
import {useState, useEffect} from "react";
import Nav from './components/nav/Nav';

function App() {
  const [currentDeckIndex, setCurrentDeckIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isDeckPageOpen, setIsDeckPageOpen] = useState(true);
  const [isShared, setIsShared] = useState(false);
  
  return (
    <div>
      <div className="top_container">
        <Nav 
          isShared = {isShared}
          setIsShared={setIsShared}
          currentDeckIndex={currentDeckIndex}
          isDeckPageOpen={isDeckPageOpen}
        />
        {isDeckPageOpen ? <h1 className="header">Pick a Deck.</h1> : ""}
      </div>
      <Routes>
        <Route path="/" element={
          <DeckPage 
            setCurrentDeckIndex={setCurrentDeckIndex} 
            setCurrentCardIndex={setCurrentCardIndex}
            setIsDeckPageOpen={setIsDeckPageOpen}
            setIsShared={setIsShared}
          />
        }/>
        <Route path="/card-page" element={
          <CardPage 
            currentDeckIndex={currentDeckIndex} 
            currentCardIndex={currentCardIndex} 
            setCurrentDeckIndex={setCurrentDeckIndex} 
            setCurrentCardIndex={setCurrentCardIndex} 
            setIsDeckPageOpen={setIsDeckPageOpen}
            isShared = {isShared}
            setIsShared={setIsShared}
          />
        }/>
        <Route path="/card-page/:deckIndex" element={
          <CardPage 
            currentDeckIndex={currentDeckIndex} 
            currentCardIndex={currentCardIndex} 
            setCurrentDeckIndex={setCurrentDeckIndex} 
            setCurrentCardIndex={setCurrentCardIndex} 
            setIsDeckPageOpen={setIsDeckPageOpen}
            isShared = {isShared}
            setIsShared={setIsShared}
          />
        }/>
      </Routes>
    </div>
  );
}

export default App;
