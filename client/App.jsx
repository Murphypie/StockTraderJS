import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import {useSelector} from 'react-redux'

import './css/App.css'
import TopMenu from "./Containers/TopMenu";
import NavBar from "./Containers/NavBar";
import Performace from "./Components/Performance";
import MainView from "./Components/MainView";
import DropDownMenu from "./Containers/DropDownMenu";

const App = () =>{
    const {navBarcollapse, dropMenuCollapse} = useSelector(state => state.mainFunc)


    return(
        <div className = 'MainBody'>
            <BrowserRouter>
                <TopMenu/>
                <div className = 'BottomMenu' >
                     {navBarcollapse && <NavBar/>}
                     <div className = 'MainView' >
                         <Routes>
                              <Route path='/' element = {<MainView />} />
                              <Route path='/performance' element = {<Performace/>} />
                         </Routes>
                     </div>
                {dropMenuCollapse && <DropDownMenu/>}
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;