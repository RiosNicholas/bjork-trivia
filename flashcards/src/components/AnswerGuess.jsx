import { useState } from "react";

const AnswerGuess = ({ currentQuestion, questionBank }) => {
    // STATE VARS
    const [guess, setGuess] = useState('');
    const [submitClicked, setSubmitClicked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleGuessChange = (event) => {
        setGuess(event.target.value);
    };

    // UPDATES STATE VARS TO HANDLE SUBMITTING QUERIES
    const handleSubmit = (event) => {
        event.preventDefault();

        if (guess === questionBank[currentQuestion].answer) {
            setIsCorrect(true);
        }
        else {
            setIsCorrect(false);
        }
        
        setSubmitClicked(true);

        // Reset the appended CSS classes after a delay of 5 seconds
        setTimeout(() => {
            setSubmitClicked(false);
            setIsCorrect(false);
        }, 5000);
    }
    return (
        <> 

             <form className="m-3 flex align-middle h-full items-center">
                <label className='text-yellow-100 font-bold m-1 shadow-sm' id="guess">Guess the answer:</label>
                <input
                    className={`m-1 rounded shadow-sm p-1 ${submitClicked ? (isCorrect ? 'border-green-500 border-2' : 'border-red-500 border-2') : ''}`}
                    type="text"
                    id="guess"
                    placeholder="Your answer goes here"
                    value={guess}
                    onChange={handleGuessChange}
                />
                <input
                    className={`m-1 p-1 bg-white rounded text-sm font-medium hover:cursor-pointer ${submitClicked ? (isCorrect ? 'border-green-500 border-2' : 'border-red-500 border-2') : ''}`}
                    type='submit'
                    id='submit-answer'
                    onClick={handleSubmit}
                />
            </form>
        </>
    );
}

export default AnswerGuess;