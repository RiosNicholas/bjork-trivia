import React from "react";

const ArrowButtons = ({ onLeftArrowClick, onRightArrowClick, currentQuestion, setCurrentQuestion }) => {
    const changeQuestion = (direction) => {
        // Handle moving to the previous question
        if (direction === 'left') {
            const newQuestion = (currentQuestion > 0) ? currentQuestion - 1 : questionBank.length - 1;
            setCurrentQuestion(newQuestion);
            onLeftArrowClick(newQuestion);
        }
        // Handle moving to the next question
        else if (direction === 'right') {
            const newQuestion = (currentQuestion < questionBank.length - 1) ? currentQuestion + 1 : 0;
            setCurrentQuestion(newQuestion);
            onRightArrowClick(newQuestion);
        }
    }

    return (
        <div className="flex w-40 justify-center m-2 gap-2 h-full" id='direction-buttons'>
            <button 
                className="bg-pink-300 text-black rounded-lg shadow-lg w-40 flex-grow" 
                id='left-arrow'
                onClick={() => changeQuestion('left')}
            >
                ←
            </button>
            <button 
                className="bg-pink-300 text-black rounded-lg shadow-lg w-40 h-fullflex-grow" 
                id='right-arrow'
                onClick={() => changeQuestion('right')}
            > 
                →
            </button>
        </div>
    );
}

export default ArrowButtons;
