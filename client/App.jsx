import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './css/App.css'

import Performace from "./Components/Performance";
import MainView from "./Components/MainView";
import Login from './Components/Login'
import Help from './Components/Help'

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                 <Route path='/' element = {<MainView />} />
                 <Route path='/performance' element = {<Performace/>} />
                 <Route path='/login' element = {<Login/>} />
                 <Route path='/help' element = {<Help/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

