import React from "react";
import FlashCardButtons from "./FlashCardButtons";

const FlashCard = () => {
    const questions = [
        {
            question: '',
            answer: ''
        },
    ];
    return (
        <div className="flex flex-col justify-center items-center h-full m-36">
            <div className="flex flex-col justify-center content-center align-middle p-10 w-1/3 h-48 bg-orange-200 rounded-lg shadow-lg text-center">
                <h2 className="font-bold uppercase text-xl m-1">Question goes here.</h2>
                <p className="font-normal text-lg capitalize m-1">Answer goes here</p>
            </div>
            <FlashCardButtons />
        </div>
    );
};

export default FlashCard;
