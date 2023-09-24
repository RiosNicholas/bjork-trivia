import React from "react";
import BjorkLogo from '../assets/bjork-logo.png';
import '.././App.css';

const Header = () => {
    return (
        <div classNamez="flex flex-col justify-center ">
            <img src={BjorkLogo}></img>
            <h1>Bjork Trivia</h1>
        </div>

    );
};

export default Header; 