import React, { useEffect, useState } from 'react'
import {SideBar,MainView} from '../components/exports';
import {ShimmerCard} from '../widgets/widgets';


const initialPosition = { lat: 6.673175, lng: -1.565423 };


function HomePage() {
    const [data, setData] = useState([]);    
    const [isLoading, setIsloading] = useState(true);    
    const [position, setPosition] = useState(initialPosition);
    const [isLocation, setIsLocation] = useState(false);

    
    // fetch weather data
    const fetData = async () => {
        setIsloading(true);
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${position.lat}&lon=${position.lng}&appid=4a727b7863381778dd1a1b9dc900a909`,
            {mode:'cors'}
            )
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                    if(data){
                        setIsloading(false);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    /* update the location latitude and longitude */
    const setUserPosition = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setPosition({
            lat: latitude,
            lng: longitude,
        });
    }

    // use effect to handle updates in real time
    useEffect( () => {
        const getUserLocation = async () => {
            const position = await navigator.geolocation.getCurrentPosition(setUserPosition);
            if (position) {
                setIsLocation(!isLocation);
            }
        }
        getUserLocation();
        fetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col justify-between items-center md:grid grid-cols-3 gap-0">
                <div className="h-full w-full md:col-span-1 bg-side-bg">
                    {isLoading ? <ShimmerCard />  : <SideBar data={data} />}
                </div>
                <div className="h-full w-full md:col-span-2 bg-main-bg">
                    {isLoading ? <ShimmerCard />  : <MainView data={data} />}
                </div>
            </div>
        </div>
    )
}

export default HomePage;
