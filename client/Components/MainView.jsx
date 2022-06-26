import React from "react";

import MainMenu from "../Containers/MainMenu"

const MainView = () =>{
    
    let menu = <h1> Hello </h1>
    // If you need to put more div, make sure to add class and add height 100%
    return(
        <MainMenu menu = {menu}/>
    )
}

export default MainView