import React from "react";

import { useSelector } from "react-redux";

import "../css/MainMenu.css";
import TopMenu from "./TopMenu";
import NavBar from "./NavBar";
import DropDownMenu from "./DropDownMenu";

const MainMenu = (prop) => {
    const { navBarcollapse, dropMenuCollapse } = useSelector((state) => state.mainFunc);
    return (
        <div className="MainBody">
            <TopMenu />
            <div className="BottomMenu">
                {navBarcollapse && <NavBar />}
                <div className="MainView">
                    {prop.menu}
                </div>
            </div>
            {dropMenuCollapse && <DropDownMenu/>}
        </div>
    );
};

export default MainMenu;
