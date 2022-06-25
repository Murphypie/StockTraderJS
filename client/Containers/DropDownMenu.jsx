import React from "react";

import Login from '../Components/Login'

import '../css/DropDownMenu.css'



const DropDownMenu = () =>{
    return(
        <button className = 'dropdown'>
            <Login />
        </button>
    )
}

export default DropDownMenu