import React from "react";
import {Link} from 'react-router-dom';

import '../css/DropDownMenu.css'



const DropDownMenu = () =>{
    return(
        <div className = 'dropDownWrapper'>
            <button className = 'dropdown'>
                <Link to ='/login'>
                    <button> Login </button>
                </Link>
                <Link to ='/help'>
                    <button> Help </button>
                </Link>
            </button>
        </div>
    )
}

export default DropDownMenu