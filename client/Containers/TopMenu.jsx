import React, {useState} from 'react'
import {useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';

import {navBarcollapseReducer, dropMenuCollapseReducer} from '../Slices/mainFuncSlice'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import '../css/TopMenu.css'

const TopMenu = () =>{
    const navBarcollapse = useSelector((state)=>state.mainFunc.navBarcollapse)
    const dropMenuCollapse = useSelector((state)=>state.mainFunc.dropMenuCollapse)
    

    const dispatch = useDispatch();
  
    return(
        <div className = 'TopMenu'>
            <Button onClick={()=>dispatch(navBarcollapseReducer())}>
                <MenuIcon id='navBarCollapse child1'></MenuIcon>
            </Button>
            <Link to ='/'> <span id = 'child2'>Stock Trader </span> </Link>
            <Button onClick={()=>dispatch(dropMenuCollapseReducer())}>
                <AccountCircleIcon id='login child3' />
            </Button>
        </div>
    )
}

export default TopMenu