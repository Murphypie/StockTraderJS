import React from "react";
import { Link } from "react-router-dom";

import '../css/NavBar.css'

const NavBar = () => {
    return (
        <div className="NavBar">
            <p style={{textAlign: "center"}}> Welcome</p>
            <div id='navChild1'>
                <Link to="/">
                    <button> Home </button>
                </Link>
            </div>
            <div id='navChild2'>
                <Link to="/performance">
                    <button> Performance </button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
