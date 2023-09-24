import React, { useState } from "react";
import FlashCardButtons from "./FlashCardButtons";

const FlashCard = () => {
    const questionBank = [
        {
            question: "What is Björk's full name?",
            answer: "Björk Guðmundsdóttir"
        },
        {
            question: "In which year was Björk born?",
            answer: "1965"
        },
        {
            question: "Which Icelandic band was Björk a part of before her solo career?",
            answer: "The Sugarcubes"
        },
        {
            question: "What is the title of Björk's debut solo album released in 1993?",
            answer: "Debut"
        },
        {
            question: "Björk won an Academy Award for Best Original Song for which film's soundtrack?",
            answer: "Dancer in the Dark"
        },
        {
            question: "In which music video did Björk famously wear a swan dress?",
            answer: "It's Oh So Quiet"
        },
        {
            question: "Which critically acclaimed album by Björk was released in 1997 and heavily features electronic music?",
            answer: "Homogenic"
        }
    ];
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const revealAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="flex flex-col justify-center items-center h-full m-36" id="game-container">
            <div onClick={revealAnswer} className="flex flex-col justify-center content-center align-middle p-10 w-1/3 h-48 bg-orange-200 rounded-lg shadow-lg text-center hover:cursor-pointer">
                <h2 className="font-bold uppercase text-xl m-1">
                    {questionBank[currentQuestion].question}
                </h2>
                {showAnswer && (
                    <p className="font-normal text-lg capitalize m-1">
                        {questionBank[currentQuestion].answer}
                    </p>
                )}
            </div>
            <FlashCardButtons />
        </div>
    );
};

export default FlashCard;
