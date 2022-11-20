import './App.css';
import CardPage from './pages/CardPage';
import DeckPage from './pages/DeckPage';
import {Route, Routes} from "react-router-dom";
import {useState, useEffect} from "react";

function App() {
  const [currentDeckIndex, setCurrentDeckIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<DeckPage setCurrentDeckIndex={setCurrentDeckIndex}/>}/>
      <Route path="/card-page" element={<CardPage currentDeckIndex={currentDeckIndex} currentCardIndex={currentCardIndex} setCurrentCardIndex={setCurrentCardIndex}/>}/>
    </Routes>
  );
}

export default App;
