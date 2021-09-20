import React, { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {DrawerStyles} from "./DrawerStyles";
import {useStateValue} from "../../provider/AppState";
import Paper from '@mui/material/Paper';
import actionTypes from '../../utils/Utils';

const Drawer = (props) => {
    const {handleOpenDrawer} = props;
    const [{ isDrawerOpen }, dispatch] = useStateValue();
    const styles = DrawerStyles();
    const [searchString, setSearchString] = useState('');
    const [forcastData, setForcastData] = useState([]);

    // open drawer
    const handleData = () => {
        dispatch({
            type: actionTypes.SET_DATA,
            data: forcastData,
        });
    }

    const fetchForcast = async () => {
        fetch(
            `api.openweathermap.org/data/2.5/forecast?q=${searchString}&appid=4a727b7863381778dd1a1b9dc900a909`,
            {mode:'cors'}
            )
            .then(res => res.json())
            .then(
                (result) => {
                    setForcastData(result);
                },
                (error) => {
                    console.log(error);
                }
        );
    }

    const handleSearch = (event) => {
        event.preventDefault();
        fetchForcast();
        if(forcastData){
            handleData();
        }
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
                            <div className="pt-2 relative mx-auto text-gray-600">
                                <input 
                                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                    type="text" 
                                    // value={searchString} 
                                    onChange={(event) => {
                                        event.preventDefault();
                                        setSearchString(event.target.value)
                                    } } 
                                    placeholder="Search" 
                                />

                                <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            <p className="mx-4 bg-blue-700 px-4 py-1 mt-2 text-color-text cursor-pointer"
                                onClick={handleSearch}>
                                search
                            </p>
                            </div>

                            {/* search predictions */}
                            
                        </div>
                </Paper>
            </SwipeableDrawer>
        </Paper>
    );
}

export default Drawer;

