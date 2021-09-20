import React from 'react';
import { heavy_cloud,shower,snow,clear, heavy_rain } from '../assets/assets';
import {CardTile,ConditionTile,AirTile} from '../widgets/widgets';
import './MainView.css';

function MainView(props) {
    const {data} = props;

    return (
        <>
            <div className="flex flex-col justify-between px-2 py-4">
                {/* celcius and fahrenheit buttons */}
                <div className="flex justify-end items-end">
                    <div className="h-8 w-8 text-center rounded-full bg-white p-2 cursor-pointer has-tooltip">
                        <span className='tooltip rounded shadow-md p-1 bg-gray-100 text-indigo-600 mt-10 -ml-32'>Change Temperature unit to Celcius</span>
                        <sup className="text-gray-400">
                            0
                        </sup>
                        <span className="text-gray-400">
                            C
                        </span>
                    </div>

                    <div className="h-8 w-8 text-center rounded-full bg-search-place-bg p-2 ml-2 cursor-pointer has-tooltip">
                        <span className='tooltip rounded shadow-md p-1 bg-gray-100 text-red-500 mt-10 -ml-32'>Change Temperature unit to Fahrenheight</span>
                        <sup className="text-gray-300">
                            0
                        </sup>
                        <span className="text-gray-300">
                            F
                        </span>
                    </div>
                </div>

                {/* the next updates including today */}
                <div className="grid grid-cols-2 gap-2 md:flex md:flex-row justify-center mt-8 md:mt-12">
                    <CardTile 
                        date={data.list[1].dt_txt.split(" ").slice(0)[0]} 
                        image={heavy_rain} 
                        minTemp={data.list[1].main.temp_min} 
                        maxTemp={data.list[1].main.temp_max}
                        weather={data.list[1].weather[0].id} 
                    />
                    <CardTile 
                        date={data.list[2].dt_txt.split(" ").slice(0)[0]} 
                        image={heavy_cloud} 
                        minTemp={data.list[2].main.temp_min} 
                        maxTemp={data.list[2].main.temp_max}
                        weather={data.list[2].weather[0].id}
                    />
                    <CardTile 
                        date={data.list[3].dt_txt.split(" ").slice(0)[0]} 
                        image={clear} 
                        minTemp={data.list[3].main.temp_min} 
                        maxTemp={data.list[3].main.temp_max}
                        weather={data.list[3].weather[0].id} 
                    />
                    <CardTile 
                        date={data.list[4].dt_txt.split(" ").slice(0)[0]} 
                        image={shower} 
                        minTemp={data.list[4].main.temp_min} 
                        maxTemp={data.list[4].main.temp_max}
                        weather={data.list[4].weather[0].id} 
                    />
                    <CardTile 
                        date={data.list[5].dt_txt.split(" ").slice(0)[0]} 
                        image={snow} 
                        minTemp={data.list[5].main.temp_min} 
                        maxTemp={data.list[5].main.temp_max}
                        weather={data.list[5].weather[0].id} 
                    />
                </div>

                <div className="mt-24 flex flex-row justify-center items-center -ml-44 md:-ml-80">
                    <h1 className="text-color-text md:text-4xl text-left mb-8">Today's Highlights</h1>
                </div>

                {/* Todays highlights */}
                <div className="grid grid-cols-1 md:flex md:flex-col justify-between items-center">
                    {/* wind status */}
                    <div className="grid grid-cols-1 md:flex justify-center items-center">
                        <ConditionTile 
                            title={"Wind Status"}
                            humidity={false}
                            value={data.list[0].wind.speed}
                        />

                        {/* humidity */}
                        <ConditionTile 
                            title={"Humidity"}
                            humidity={true}
                            value={data.list[0].main.humidity}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:flex justify-center items-center mt-8">
                        {/* visibility */}
                        <AirTile 
                            title={"Visibility"}
                            visibility={false}
                            value={data.list[0].visibility}
                        />

                        {/* Air Pressure */}
                        <AirTile 
                            title={"Air Pressure"}
                            visibility={true}
                            value={data.list[0].main.pressure}
                        />
                    </div>

                </div>

                {/* developer */}
                <div className="flex justify-center items-center mt-8 text-gray-600 cursor-default">
                    <p>
                        <span className="">created by </span> 
                        <span className="font-bold">musah ibrahim ali - </span> 
                        <span className="">devShallenges.io</span> 
                    </p>
                </div>
            </div>
        </>
    )
}

export default MainView;
