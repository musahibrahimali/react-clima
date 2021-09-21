import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function ConditionTile(props) {

    const {humidity, value, title} = props;

    return (
        <div className="w-80 h-52 bg-component-bg flex flex-col justify-around items-center  mt-8 mx-4 px-4 has-tooltip">
            <span className='tooltip rounded shadow-md p-1 bg-gray-100 text-red-500 -mt-56'>{!humidity ? "today's Wind status" : "Today's humidity status"}</span>
            <p className="text-gray-400 text-center">{title}</p>
            <p className="text-color-text">
                <span className="text-3xl md:text-6xl">
                    {value}
                </span>
                <span className=" text-xl md:text-2xl">
                    {!humidity ? "mph" : "%"}
                </span>
            </p>
            {
                !humidity ? 
                <div className="flex justify-between items-center text-gray-400">
                    <PlayCircleIcon fontSize="small" />
                    <p className="mx-2">WSW</p>
                </div> : 
                <div className="shadow rounded-md w-full bg-gray-300 mt-2">
                    <div className="bg-prog-color rounded-md text-xs leading-none py-1 text-center text-gray-700" style={{"width": `${value.toString()}`}}>{value}%</div>
                </div>
            }
        </div>
    )
}

export default ConditionTile;
