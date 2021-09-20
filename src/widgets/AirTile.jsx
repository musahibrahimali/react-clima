import React from 'react';

function AirTile(props) {

    const {visibility, value, title} = props;

    return (
        <div className="w-80 h-32 bg-component-bg flex flex-col justify-center items-center mt-8 mx-4 has-tooltip">
            <span className='tooltip rounded shadow-md p-1 bg-gray-100 text-red-500 -mt-40'>{!visibility ? "today's visibility status" : "Today's Air Pressure status"}</span>
            <p className="text-gray-400 text-center">{title}</p>
            <p className="text-color-text">
                <span className="text-3xl md:text-6xl">
                    {value}
                </span> {" "}
                <span className=" text-xl md:text-2xl">
                    {!visibility ? "miles" : "mb"}
                </span>
            </p>
        </div>
    )
}

export default AirTile;
