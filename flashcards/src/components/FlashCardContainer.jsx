import React, { useState } from "react";
import questionBank from "../assets/questionBank";
import FlashCard from "./FlashCard";
import AnswerGuess from "./AnswerGuess";
import FlashCardButtons from "./FlashCardButtons";

const FlashCardContainer = () => {
    /* DEFINING REACT HOOKS */ 
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const revealAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    /* CALLBACK FUNCTION TO RANDOMIZE THE QUESTION DISPLAYED */
    const randomizeQuestion = () => {
        const randomIndex = Math.floor(Math.random() * questionBank.length);

        // Updating the state 
        setCurrentQuestion(randomIndex);
        
        // Hide the answer when changing the question
        setShowAnswer(false); 
    };

    const handleLeftArrowClick = (newQuestion) => {
        setCurrentQuestion(newQuestion);
        setShowAnswer(false);
    };

    const handleRightArrowClick = (newQuestion) => {
        setCurrentQuestion(newQuestion);
        setShowAnswer(false);
    };    
    return (
        <div className="flex flex-col justify-center items-center h-full m-36" id="game-container">
            <FlashCard
                currentQuestion={currentQuestion}
                showAnswer={showAnswer}
                revealAnswer={revealAnswer}
                questionBank={questionBank}
            />
            <AnswerGuess 
                currentQuestion={currentQuestion}
                questionBank={questionBank}
            />
            <FlashCardButtons 
                onRandomize={randomizeQuestion} 
                currentQuestion={currentQuestion} 
                handleLeftArrowClick={handleLeftArrowClick}
                handleRightArrowClick={handleRightArrowClick}   
                questionBank={questionBank}
            />
        </div>
    );
};

export default FlashCardContainer;
