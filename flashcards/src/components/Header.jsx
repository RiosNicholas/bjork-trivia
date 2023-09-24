import React from "react";
import BjorkLogo from '../../public/bjork-logo.png';
import '.././App.css';

const Header = () => {
    return (
        <div className="flex justify-center bg-purple-300">
            <img className="w-1/4 justify-center p-8" src={BjorkLogo}></img>
        </div>
    );
};

export default Header; 