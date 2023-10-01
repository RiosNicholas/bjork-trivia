import React from "react";
import questionBank from '../assets/questionBank';

const FlashCardButton = ({ onRandomize }) => {
    const randomizeQuestion = () => {
        onRandomize();
    };    
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col w-40 justify-center m-2">
                <button onClick={randomizeQuestion} className="bg-blue-600 text-white rounded-lg shadow-lg w-40 m-2">Randomize</button>
                <p className="text-white italic text-sm text-center font-medium">Number of Cards: {questionBank.length}</p>
            </div>
        </div>

    );
};

export default FlashCardButton;