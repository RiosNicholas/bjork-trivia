import React from "react";

const ArrowButtons = ({ onLeftArrowClick, onRightArrowClick, currentQuestion, questionBank }) => {
    const changeQuestion = (direction) => {
        if (direction === 'left') {
            const newQuestion = (currentQuestion > 0) ? currentQuestion - 1 : questionBank.length - 1;
            onLeftArrowClick(newQuestion);
        } else if (direction === 'right') {
            const newQuestion = (currentQuestion < questionBank.length - 1) ? currentQuestion + 1 : 0;
            onRightArrowClick(newQuestion);
        }
    };

    return ( 
        <>
            <div className="flex flex-col w-40 justify-center items-center m-2">
                <div className="flex w-40 justify-center m-2 gap-2 h-full" id="direction-buttons">
                    <button
                        className="bg-pink-300 text-black rounded-lg shadow-lg w-40 flex-grow"
                        id="left-arrow"
                        onClick={() => changeQuestion('left')}
                    >
                        ←
                    </button>
                    <button
                        className="bg-pink-300 text-black rounded-lg shadow-lg w-40 h-full flex-grow"
                        id="right-arrow"
                        onClick={() => changeQuestion('right')}
                    >
                        →
                    </button>
                </div>
                <p className="text-white italic text-sm text-center font-medium">
                    Current Card: {currentQuestion + 1}/{questionBank.length}
                </p>
            </div>
        </>
    );
};

export default ArrowButtons;
