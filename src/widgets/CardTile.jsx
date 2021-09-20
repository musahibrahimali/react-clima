import React from 'react';

function CardTile(props) {
    const {date, maxTemp, image, minTemp} = props;

    console.log(date);

    return (
        <div className="w-32 h-48 md:w-32 md:h-48 bg-component-bg p-4 flex flex-col justify-between mx-2 mt-4">
            {/* day or date */}
            <div className="flex justify-center items-center">
                <p className="text-color-text text-center">{date}</p>
            </div>

            {/* image */}
            <div className="flex justify-center items-center -mt-4">
                <img src={image} alt="temperature level" />
            </div>

            {/* min and max temperature */}
            <div className="flex justify-between items-center mt-2">
                <p className="has-tooltip">
                    <span className='tooltip rounded shadow-md p-1 bg-gray-100 text-red-500 mt-10'>maximun temperature temperature</span>
                        <span className="text-color-text text-xs">
                            {Math.floor(maxTemp)}
                        </span>
                        <sup className="text-color-text text-xs">
                            0
                        </sup>
                        <span className="text-color-text text-sm">
                            C
                        </span>
                </p>

                <p className="has-tooltip">
                    <span className='tooltip rounded shadow-md p-1 bg-gray-100 text-red-500 mt-10'>minimun temperature</span>
                    <span className="text-gray-400 text-xs">
                        {Math.floor(minTemp)}
                    </span>
                    <sup className="text-gray-400 text-xs">
                        0
                    </sup>
                    <span className="text-gray-400 text-sm">
                        C
                    </span>
                </p>
            </div>
        </div>
    );
}

export default CardTile;
