import React from "react";
import ArrowButtons from "./ArrowButtons";

const FlashCardButtons = ({ onRandomize, currentQuestion, handleLeftArrowClick, handleRightArrowClick, questionBank }) => {
    const randomizeQuestion = () => {
        onRandomize();
    };    

    return (
        <div className="flex items-center justify-center h-full">
            <ArrowButtons 
                onLeftArrowClick={handleLeftArrowClick}
                onRightArrowClick={handleRightArrowClick} 
                currentQuestion={currentQuestion}
                questionBank={questionBank}
            />
            <div className="flex flex-col w-40 justify-center m-2">
                <button 
                    onClick={randomizeQuestion} className="bg-blue-600 text-white rounded-lg shadow-lg w-40 m-2" 
                    id='randomize-button'
                >
                    Randomize
                </button>
                <p className="text-white italic text-sm text-center font-medium">
                    Number of Cards: {questionBank.length}
                </p>
            </div>
        </div>
    );
};

export default FlashCardButtons;
