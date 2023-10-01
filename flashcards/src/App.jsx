import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import FlashCard from './components/FlashCard.jsx'
import FlashCardButton from './components/FlashCardButtons'
import FlashCardContainer from './components/FlashCardContainer'

function App() {
  return (
    <>
      <Header />
      <FlashCardContainer />
    </>
  );
};

export default App
