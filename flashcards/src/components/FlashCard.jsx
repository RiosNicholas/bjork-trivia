import React, { useState } from "react";
import questionBank from "../assets/questionBank";

const FlashCard = ({ currentQuestion, showAnswer, revealAnswer, questionBank }) => {
    return (
        <div onClick={revealAnswer} className="flex flex-col justify-center content-center align-middle p-10 w-full max-w-lg h-56 bg-orange-200 rounded-lg shadow-lg text-center hover:cursor-pointer">
            <h2 className="font-bold uppercase text-xl m-1">
                {questionBank[currentQuestion].question}
            </h2>
            {showAnswer && (
                <p className="font-normal text-lg capitalize m-1">
                    {questionBank[currentQuestion].answer}
                </p>
            )}
        </div>
    );
};

export default FlashCard;
