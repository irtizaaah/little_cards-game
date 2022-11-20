import './CardPage.css';
import Card from '../components/card/Card';

import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

import data from "../data/decks.json";

function CardPage(props) {
  const [name, setName] = useState();
  const [text, setText] = useState();
  const {deckIndex} = useParams();

  props.setIsDeckPageOpen(false);

  const[mousePosition, setMousePosition] = useState({x:0, y:0});
  if(props.currentCardIndex < -1) props.setCurrentCardIndex(0);

  const handleClick = event => {
    setMousePosition({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  }

  const decrementIndex = () =>{
    if(props.currentCardIndex > 0) {
      props.setCurrentCardIndex(props.currentCardIndex-1);
    }
    else{
      //props.setCurrentCardIndex(data.decks[props.currentDeckIndex].cards.length-1); // loops back around
    }
  }

  const incrementIndex = () =>{
    if(props.currentCardIndex < data.decks[props.currentDeckIndex].cards.length-1) {
      props.setCurrentCardIndex(props.currentCardIndex+1);
    }
    else{
      //props.setCurrentCardIndex(0); // loops back around
    }
  }

  useEffect(()=>{
    let midpoint = window.innerWidth/4;
    let buffer = 10;

    if(mousePosition.x < midpoint - buffer) decrementIndex();
    else if(mousePosition.x > midpoint + buffer) incrementIndex();

    setName(data.decks[props.currentDeckIndex].content.name);
    setText(data.decks[props.currentDeckIndex].cards[props.currentCardIndex].content.text); 

  },[mousePosition])

  useEffect(()=>{
    if(data.decks[props.currentDeckIndex].cards.length > 1){
      if(deckIndex){
        props.setCurrentDeckIndex(deckIndex);
        props.setCurrentCardIndex(0);
    
        data.decks[props.currentDeckIndex].cards = data.decks[props.currentDeckIndex].cards.filter((_,index)=>(index)%2===0);
      }
      else if(props.isShared){
        data.decks[props.currentDeckIndex].cards = data.decks[props.currentDeckIndex].cards.filter((_,index)=>(index)%2!==0);
      }
      else if(!props.isShared){
      }
    }
  },[props.isShared, deckIndex])

  return (
    <div className="CardPage" onClick = {handleClick}>
      <Card
        name={name}
        text={text}
      />
      <p>{props.currentCardIndex+1}/{data.decks[props.currentDeckIndex].cards.length}</p>
    </div>
  );
}

export default CardPage;
