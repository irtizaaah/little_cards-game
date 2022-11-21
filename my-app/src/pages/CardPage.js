import './CardPage.css';
import Card from '../components/card/Card';

import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

import dataCopy from "../data/decks.json";
const dataOriginal = structuredClone(dataCopy);

function CardPage(props) {
  const [data, setData] = useState(dataCopy); // store the original deck of cards
  const [name, setName] = useState(); // name of current deck
  const [text, setText] = useState(); // text in current card
  const {deckIndex} = useParams(); // return param from url

  props.setIsDeckPageOpen(false); // unhide title in top-container in App.js

  const[mousePosition, setMousePosition] = useState({x:0, y:0}); // track mouse position
  if(props.currentCardIndex < -1) props.setCurrentCardIndex(0); // redundent error check

  const handleClick = event => { // get location of where mouse was clicked
    setMousePosition({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  }

  const decrementIndex = () =>{ // check bounds and update index
    if(props.currentCardIndex > 0) {
      props.setCurrentCardIndex(props.currentCardIndex-1);
    }
    else{
      //props.setCurrentCardIndex(data.decks[props.currentDeckIndex].cards.length-1); // loops back around
    }
  }

  const incrementIndex = () =>{ // check bounds and update index
    if(props.currentCardIndex < data.decks[props.currentDeckIndex].cards.length-1) {
      props.setCurrentCardIndex(props.currentCardIndex+1);
    }
    else{
      //props.setCurrentCardIndex(0); // loops back around
    }
  }

  useEffect(()=>{ // when mouse is clicked, update index based on click location
    let midpoint = window.innerWidth/4; // rough midpoint of page
    let buffer = 10;

    if(mousePosition.x < midpoint - buffer) decrementIndex(); // left side click
    else if(mousePosition.x > midpoint + buffer) incrementIndex(); // right side click

    setName(data.decks[props.currentDeckIndex].content.name);
    setText(data.decks[props.currentDeckIndex].cards[props.currentCardIndex].content.text); 
  },[mousePosition])

  useEffect(()=>{ // if deck is shared, split deck or else unsplit it
    if(data.decks[props.currentDeckIndex].cards.length > 1){ // don't attempt split if there's only one card
      if(deckIndex){ // deckIndex is the param in the shared url, this splits the deck of the receiving user (gets even cards)
        props.setCurrentDeckIndex(deckIndex);
        props.setCurrentCardIndex(0); // reset curent card index to avoid potential out of bounds error

        let d = structuredClone(data); // copy all decks 
        d.decks[props.currentDeckIndex].cards = d.decks[props.currentDeckIndex].cards.filter((_,index)=>(index)%2===0);
        setData(d);
      }
      else if(props.isShared){ // isShared is when sending user shares deck, this splits the deck of sending user (gets odd cards)
        let d = structuredClone(data);
        d.decks[props.currentDeckIndex].cards = d.decks[props.currentDeckIndex].cards.filter((_,index)=>(index)%2!==0);
        setData(d);
      }
      else if(!props.isShared){ // no deck was shared
        setData(structuredClone(dataOriginal));
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
