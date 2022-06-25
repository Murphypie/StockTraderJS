import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () =>{
    return(
        <div className = 'NavBar'>
            <p>Welcome</p>
            <nav>
                <Link to ='/performance'>
                    <button> Performance </button>
                </Link>
            </nav>
        </div>
    )
}

export default NavBar