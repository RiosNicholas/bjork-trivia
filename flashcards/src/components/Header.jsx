import React from "react";
import BjorkLogo from '../../public/bjork-logo.png';
import '../App.css'; 

const Header = () => {

    return (
        <div className="flex flex-col items-center justify-center bg-purple-300">
            <img className="w-1/4 md:w-1/6 p-4" src={BjorkLogo} alt="Bjork Logo" />
        </div>
    );
};

export default Header;
