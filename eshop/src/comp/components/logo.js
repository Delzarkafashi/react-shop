import React from "react";
import { Link } from "react-router-dom";
import "./logo.css"

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img src="image/logo gorila.png" alt="logo"></img>
                <h2>välkommen till oss</h2>
            </Link>
        </div>
    );
}

export default Logo;
