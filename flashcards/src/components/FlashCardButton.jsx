import React from "react";

const FlashCardButton = ({ onRandomize }) => {
    const randomizeQuestion = () => {
        onRandomize();
    };

    return (
        <>
            <div className="flex justify-center rounded-lg shadow-lg m-2">
                <button className="bg-blue-600 text-white" onClick={randomizeQuestion}>
                    Randomize
                </button>
            </div>
        </>
    );
};

export default FlashCardButton;
