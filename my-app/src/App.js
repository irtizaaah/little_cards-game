import './App.css';
import CardPage from './pages/CardPage';
import DeckPage from './pages/DeckPage';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DeckPage/>}/>
      <Route path="/card-page" element={<CardPage/>}/>
    </Routes>
  );
}

export default App;
