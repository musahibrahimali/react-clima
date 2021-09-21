import React, { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {DrawerStyles} from "./DrawerStyles";
import {useStateValue} from "../../provider/AppState";
import Paper from '@mui/material/Paper';
import actionTypes from '../../utils/Utils';

const Drawer = (props) => {
    const {handleOpenDrawer} = props;
    const styles = DrawerStyles();
    const [{ isDrawerOpen }, dispatch] = useStateValue();
    const [searchString, setSearchString] = useState('');

    // open drawer
    const handleData = () => {
        dispatch({
            type: actionTypes.SET_DATA,
            searchData: searchString,
        });

        dispatch({
            type: actionTypes.OPEN_DRAWER,
            isDrawerOpen: false,
        });
    }

    return (
        <Paper classes={{root: styles.root}}>
            <SwipeableDrawer
                anchor={"left"}
                open={isDrawerOpen}
                onClose={handleOpenDrawer}
                onOpen={handleOpenDrawer}>
                <Paper
                    classes={{root: styles.root}}
                    className="w-full"
                    role="presentation">
                        <div className="w-full h-screen px-4 pt-4 bg-drawer-bg">
                            <div className="flex flex-row justify-between items-center">
                                {/* search bar */}
                                <div className="bg-white shadow px-8 py-2 flex">
                                    <input 
                                        className="w-full rounded p-2 focus:outline-none" 
                                        type="text" 
                                        placeholder="Search" 
                                        onChange={
                                            (event) => setSearchString(event.target.value)
                                        }
                                    />

                                    <button 
                                        className="bg-blue-700 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4"
                                        onClick={handleData}
                                    >
                                        <p className="font-semibold text-xs">Search</p>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                </Paper>
            </SwipeableDrawer>
        </Paper>
    );
}

export default Drawer;

