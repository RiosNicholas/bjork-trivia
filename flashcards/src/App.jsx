import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import FlashCard from './components/FlashCard.jsx'
import FlashCardButton from './components/FlashCardButton'

function App() {
  return (
    <>
      <Header />
      <FlashCard /> 
      <div className="flex flex-col">
        {/* <FlashCardButton onRandomize={randomizeQuestion} /> */}
        {/* <p className="text-white italic text-sm text-center font-medium">Number of Cards: {questionBank.length}</p> */}
        <FlashCardButton />
      </div>
    </>
  );
};

export default App
