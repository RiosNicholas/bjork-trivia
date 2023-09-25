import React from "react";

const FlashCardButton = ({ onRandomize }) => {
    const randomizeQuestion = () => {
        // Randomize the question
        onRandomize();
    };
    return (
        <>
            <div className="flex justify-center rounded-lg shadow-lg m-2">
                <button onClick={randomizeQuestion} className="bg-blue-600 text-white">Randomize</button>
            </div>
        </>
    );
};

export default FlashCardButton;