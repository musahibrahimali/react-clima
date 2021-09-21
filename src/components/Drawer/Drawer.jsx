import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {DrawerStyles} from "./DrawerStyles";
import Paper from '@mui/material/Paper';
import { Loader } from '../exports';

const Drawer = (props) => {
    const {
        handleOpenDrawer,
        isDrawerOpen,
        isSearchLoading,
        onSubmit,
        setLocation,
    } = props;
    const styles = DrawerStyles();

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
                                        onChange={e => setLocation(e.target.value)}
                                    />

                                    <button 
                                        className="bg-blue-700 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4"
                                        onClick={onSubmit}
                                    >
                                        <p className="font-semibold text-xs">Search</p>
                                    </button>
                                </div>
                            </div>
                            
                            {/* Loader */}
                            {isSearchLoading && <Loader />}

                        </div>
                </Paper>
            </SwipeableDrawer>
        </Paper>
    );
}

export default Drawer;

